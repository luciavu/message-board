const db = require('../../db.js');
const CustomNotFoundError = require('../../errors/CustomNotFoundError.js');

async function getMessageById(req, res) {
  const { messageId } = req.params;
  const message = await db.getMessageById(messageId);

  if (!message) {
    throw new CustomNotFoundError('Message not found.');
  }

  res.render('messageDetails', { title: 'Message Details', message: message });
}
module.exports = {
  getMessageById,
};
