const { randomUUID } = require('crypto');

const messages = [
  {
    id: randomUUID(),
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    id: randomUUID(),
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

async function getMessageById(messageId) {
  return messages.find((message) => message.id === messageId);
}

module.exports = { messages, getMessageById };
