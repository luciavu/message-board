const db = require('../../db.js');
const CustomNotFoundError = require('../../errors/CustomNotFoundError.js');

async function getMessageById(req, res) {
  const { messageId } = req.params;
  console.log('req param', messageId);
  const message = await db.getMessageById(messageId);

  if (!message) {
    throw new CustomNotFoundError('Message not found.');
  }

  res.render('messageDetails', { title: 'Message Details', message: message });
}
module.exports = {
  getMessageById,
};
