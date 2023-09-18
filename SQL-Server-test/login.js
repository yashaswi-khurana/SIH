import express from 'express';
import { config } from './config.js';
import Database from './database.js';

const router = express.Router();
router.use(express.json());

// Development only - don't do in production
console.log(config);

// Create database object
const database = new Database(config);

router.get('/', async (_, res) => {
  try {
    // Return a list of logins
    const logins = await database.readAll();
    console.log(`logins: ${JSON.stringify(logins)}`);
    res.status(200).json(logins);
  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
});

router.post('/', async (req, res) => {
  try {
    // Create a login
    const login = req.body;
    console.log(`login: ${JSON.stringify(login)}`);
    const rowsAffected = await database.create(login);
    res.status(201).json({ rowsAffected });
  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    // Get the login with the specified ID
    const loginId = req.params.id;
    console.log(`loginId: ${loginId}`);
    if (loginId) {
      const result = await database.read(loginId);
      console.log(`logins: ${JSON.stringify(result)}`);
      res.status(200).json(result);
    } else {
      res.status(404);
    }
  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    // Update the login with the specified ID
    const loginId = req.params.id;
    console.log(`loginId: ${loginId}`);
    const login = req.body;

    if (loginId && login) {
      delete login.id;
      console.log(`login: ${JSON.stringify(login)}`);
      const rowsAffected = await database.update(loginId, login);
      res.status(200).json({ rowsAffected });
    } else {
      res.status(404);
    }
  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // Delete the login with the specified ID
    const loginId = req.params.id;
    console.log(`loginId: ${loginId}`);

    if (!loginId) {
      res.status(404);
    } else {
      const rowsAffected = await database.delete(loginId);
      res.status(204).json({ rowsAffected });
    }
  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
});

export default router;