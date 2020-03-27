const crypto = require('crypto');

const connection = require('../database/connection');
const Mail = require('./MailController');

// Gerar novo ID
function genareteId() {
  const id = crypto.randomBytes(4).toString('HEX')
  return checkId(id)
}

async function checkId(id) {
  // Vai retornar verdadeiro se o id existir
  const ongWithIdExist = await connection('ongs')
    .select('*')
    .where({ 'id': id })
    .first();

  while (ongWithIdExist) {
    id = genareteId();
  }

  return id
}

module.exports = {
  async index (request, responce) {
    const ongs = await connection('ongs').select('*');
  
    return responce.json(ongs);
  },
  async create(request, responce) {
    const { name, email, whatsapp, city, uf } = request.body;
  
    const id = await genareteId();
  
    // await connection('ongs').insert({
    //   id,
    //   name,
    //   email,
    //   whatsapp,
    //   city,
    //   uf
    // });
    
    Mail.Send({
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