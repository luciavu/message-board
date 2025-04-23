const { randomUUID } = require('crypto');
const { messages } = require('../../db.js');
module.exports = {
  get: (req, res) => {
    res.render('form');
  },
  post: (req, res) => {
    const { name, message } = req.body;
    messages.push({
      id: randomUUID(),
      text: message,
      user: name || 'Anonymous',
      added: new Date(),
    });
    console.log(messages);
    res.redirect('/');
  },
};
