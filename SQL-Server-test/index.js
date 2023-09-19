import express from 'express';
import { config } from './config.js';
import Database from './database.js';

// Import App routes
import login from './login.js';

const port = process.env.PORT || 3000;

const app = express();

// Development only - don't do in production
// Run this to create the table in the database
if (process.env.NODE_ENV === 'development') {
  const database = new Database(config);
  database
    .executeQuery(
      `CREATE TABLE Login (id int NOT NULL IDENTITY, passwd varchar(30));`
    )
    .then(() => {
      console.log('Table created');
    })
    .catch((err) => {
      // Table may already exist
      console.error(`Error creating table: ${err}`);
    });
}

// Connect App routes
app.use('/logins', login);
app.use('*', (_, res) => {
  res.send("Hi the server works");
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});