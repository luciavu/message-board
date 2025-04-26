const db = require('../../db/queries');
const CustomNotFoundError = require('../../errors/CustomNotFoundError.js');

module.exports = {
  get: (req, res) => {
    res.render('form', { title: 'New Message' });
  },
  post: async (req, res) => {
    const { name, message } = req.body;
    try {
      await db.insertMessage(name || 'Anonymous', message, new Date());
      res.redirect('/');
    } catch (err) {
      throw new CustomNotFoundError('Failed to add message.');
    }
  },
};
