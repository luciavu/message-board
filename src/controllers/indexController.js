const messages = require('../../db.js');
module.exports = {
  get: (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages: messages });
  },
};
