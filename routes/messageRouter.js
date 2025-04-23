const { Router } = require('express');
const controller = require('../src/controllers/messageController');

const messageRouter = Router();
messageRouter.get('/:messageId', controller.getMessageById);

module.exports = messageRouter;
