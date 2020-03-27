const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  })

  afterAll(async () => {
    await connection.destroy();
  });
  it('should be able to create a new ONG', async () => {
    const responce = await request(app)
      .post('/ongs')
      .send({
        name: "APAD",
        email: "cpetecs123@gmail.com",
        whatsapp: "11111111111",
        city: "Santana de Parnaiba",
        uf: "SP"
      });
    
      expect(responce.body).toHaveProperty('id');
      expect(responce.body.id).toHaveLength(8);
    })
});