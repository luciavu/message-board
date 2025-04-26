const db = require('../../db/queries');
const CustomNotFoundError = require('../../errors/CustomNotFoundError.js');

module.exports = {
  get: async (req, res, next) => {
    try {
      const messages = await db.getAllMessages();
      if (!messages) {
        return next(new CustomNotFoundError('Could not retrieve messages.'));
      }
      res.render('index', { title: 'Mini Message Board', messages: messages });
    } catch (err) {
      next(err);
    }
  },
};
