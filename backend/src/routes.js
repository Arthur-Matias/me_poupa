const express = require('express');

const extratoController = require('./controllers/extratoController');
const listIncome = require('./controllers/listIncome');
const listOutcome = require('./controllers/listOutcome');
const quantidade = require('./controllers/quantidade')
const meta = require('./controllers/meta')
const routes = express.Router();
const getData = require('./controllers/getData')

routes.post('/addLancamento', extratoController.store);

routes.get('/returnGanhos', listIncome.show);
routes.get('/returnGastos', listOutcome.show);
routes.get('/quantidadeCategoria',quantidade.define)
routes.post('/defineMeta',meta.definir)
routes.post('/economizar',meta.economizar)
routes.get('/obterMeta',meta.obter)
//routes.get('/tests',getData.get)
//routes.get('/analyse',getData.analyse)

module.exports = routes;