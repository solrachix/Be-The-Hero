const express = require('express');
const routes = express.Router();

routes.get('/users', (request, responce) => {
  const body = request.body;

  return responce.json({
    a: "a"
  });
})

module.exports = routes;