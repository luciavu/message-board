require('dotenv').config();
const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR ( 255 ),
  added DATE DEFAULT CURRENT_DATE
);

INSERT INTO messages (username, text, added) VALUES ('Amando', 'Hi there!', CURRENT_DATE),
  ('Charles', 'Hello World!', CURRENT_DATE),
  ('Lena', 'can''t stop thinking about that sandwich yesterday', CURRENT_DATE),
  ('Miles', 'How is everyone doing?', CURRENT_DATE),
  ('Anonymous', 'It''s my birthday today', CURRENT_DATE),
  ('Miles', 'Happy Birthday!', CURRENT_DATE);
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: process.argv[2],
  });
  await client.connect();
  console.log('connected to DB');
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
