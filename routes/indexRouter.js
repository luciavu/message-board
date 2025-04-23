const { Router } = require('express');
const controller = require('../src/controllers/indexController');
const indexRouter = Router();

indexRouter.get('/', controller.get);

module.exports = indexRouter;
