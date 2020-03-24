const connection = require('../database/connection');

module.exports = {
  async index (request, responce) {
    const ong_id = request.headers.authorization;

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');
  
    return responce.json(incidents);
  },
}