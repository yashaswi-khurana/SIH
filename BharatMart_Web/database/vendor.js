const { config } = require('./config');
const Database = require('./database.js');
const express = require('express');

const router = express.Router();

const database = new Database(config);

router.get('/', async (_, res) => {
    try {
      // Return a list of Vendors
      const vendors = await database.readAll();
      console.log(`vendors: ${JSON.stringify(vendors)}`);
      res.status(200).json(vendors);
    } catch (err) {
      res.status(500).json({ error: err?.message });
    }
  });