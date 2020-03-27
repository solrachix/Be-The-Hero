const connection = require('../database/connection');

module.exports = {
  async index (request, responce) {
    const { page = 1 } = request.query;

    const [ count ] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1 ) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ]);
    
    responce.header('X-Total-Count', count['count(*)'])

    return responce.json(incidents);
  },
  async create(request, responce){
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;
    
    const [ id ] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    });

    responce.json({ id })
  },
  async delete (request, responce) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('*')
      .first();

    if (incident.ong_id !== ong_id) {
      return responce.status(401).json({ error: 'Operation not permited' });
    }

    await connection('incidents').where('id', id).delete();
    
    // return responce.status(204).send();
    return responce.json(incident);
  },
}