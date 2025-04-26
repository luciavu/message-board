const db = require('../../db/queries');
const CustomNotFoundError = require('../../errors/CustomNotFoundError.js');

async function getMessageById(req, res, next) {
  const { messageId } = req.params;
  try {
    const message = await db.getMessageById(messageId);
    if (!message || message.length === 0) {
      return next(new CustomNotFoundError('Message not found.'));
    }
    res.render('messageDetails', { title: 'Message Details', message: message[0] });
  } catch (err) {
    next(err);
  }
}
module.exports = {
  getMessageById,
};
