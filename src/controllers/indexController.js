const db = require('../../db/queries');
const CustomNotFoundError = require('../../errors/CustomNotFoundError.js');

module.exports = {
  get: async (req, res) => {
    try {
      const messages = await db.getAllMessages();
      res.render('index', { title: 'Mini Message Board', messages: messages });
    } catch (err) {
      throw new CustomNotFoundError('Could not retrieve messages.');
    }
  },
};
