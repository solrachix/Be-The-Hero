const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
  async index (request, responce) {
    const ongs = await connection('ongs').select('*');
  
    return responce.json(ongs);
  },
  async create(request, responce) {
    const { name, email, whatsapp, city, uf } = request.body;
  
    const id = crypto.randomBytes(4).toString('HEX');
  
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });
  
    return responce.json({ id });
  },
}