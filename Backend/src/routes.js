const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes
  .post('/session', SessionController.create)

  .get('/ongs', OngController.index)
  .post('/ongs', OngController.create)

  .get('/profile', ProfileController.index)

  .get('/incidents', IncidentController.index)
  .post('/incidents', IncidentController.create)
  .delete('/incidents/:id', IncidentController.delete);

module.exports = routes;