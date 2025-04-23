const { Router } = require('express');
const controller = require('../src/controllers/newMessageController');

const newMessageRouter = Router();
newMessageRouter.get('/', controller.get);
newMessageRouter.post('/', controller.post);

module.exports = newMessageRouter;
