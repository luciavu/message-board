const { randomUUID } = require('crypto');

const messages = [
  {
    id: randomUUID(),
    text: 'Hi there!',
    user: 'Amando',
    added: new Date('2025-04-23T11:30:00'),
  },
  {
    id: randomUUID(),
    text: 'Hello World!',
    user: 'Charles',
    added: new Date('2025-04-23T11:35:01'),
  },
  {
    id: randomUUID(),
    text: "can't stop thinking about that sandwich yesterday",
    user: 'Lena',
    added: new Date('2025-04-23T16:22:04'),
  },
  {
    id: randomUUID(),
    text: 'How is everyone doing?',
    user: 'Miles',
    added: new Date(),
  },
  {
    id: randomUUID(),
    text: "It's my birthday today",
    user: 'Anonymous',
    added: new Date(),
  },
  {
    id: randomUUID(),
    text: 'Happy birthday!',
    user: 'Miles',
    added: new Date(),
  },
  {
    id: randomUUID(),
    text: 'what sandwich was it',
    user: 'Dan',
    added: new Date(),
  },
];

async function getMessageById(messageId) {
  return messages.find((message) => message.id === messageId);
}

module.exports = { messages, getMessageById };
