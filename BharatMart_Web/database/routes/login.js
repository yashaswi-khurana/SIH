const { config } = require('../config.js');
const Database = require('../database.js');
const express = require('express');

const router = express.Router();

const database = new Database(config);

router.get('/login', async (_, res) => {
    try {
      // Return a list of Vendors
      const vendors = await database.readAll();
      console.log(`vendors: ${JSON.stringify(vendors)}`);
      res.status(200).json(vendors);
    } catch (err) {
      res.status(500).json({ error: err?.message });
    }
  });

router.post('/login', async (req, res) => {
    try {
      // Create a vendor
      const vendor = req.body;
      console.log(`vendor: ${JSON.stringify(vendor)}`);
      const rowsAffected = await database.create(vendor);
      res.status(201).json({ rowsAffected });
    } catch (err) {
      res.status(500).json({ error: err?.message });
    }
  });

  router.get('/login/:id', async (req, res) => {
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
  
  router.put('/login/:id', async (req, res) => {
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
  
  router.delete('/login/:id', async (req, res) => {
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
  
module.exports = router;