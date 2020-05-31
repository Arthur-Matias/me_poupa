const express = require('express');

const extratoController = require('./controllers/extratoController');
const listIncome = require('./controllers/listIncome');
const listOutcome = require('./controllers/listOutcome');

const routes = express.Router();

routes.post('/addLancamento', extratoController.store);

routes.get('/returnGanhos', listIncome.show);
routes.get('/listOutcome', listOutcome.show);

module.exports = routes;