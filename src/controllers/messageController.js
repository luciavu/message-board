const db = require('../../db/queries');
const CustomNotFoundError = require('../../errors/CustomNotFoundError.js');

async function getMessageById(req, res) {
  const { messageId } = req.params;
  try {
    const message = await db.getMessageById(messageId);
    res.render('messageDetails', { title: 'Message Details', message: message[0] });
  } catch (err) {
    throw new CustomNotFoundError('Message not found.');
  }
}
module.exports = {
  getMessageById,
};
