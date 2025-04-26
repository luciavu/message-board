const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function insertMessage(username, text, added) {
  console.log(username, text, added);
  await pool.query('INSERT INTO messages (username, text, added) VALUES ($1, $2, $3)', [
    username,
    text,
    added,
  ]);
}

async function getMessageById(id) {
  const results = await pool.query(`SELECT * from messages WHERE id = ${id}`);
  return results.rows;
}

module.exports = { getAllMessages, insertMessage, getMessageById };
