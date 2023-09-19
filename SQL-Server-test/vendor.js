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
    // Return a list of Vendors
    const Vendors = await database.readAll();
    console.log(`Vendors: ${JSON.stringify(Vendors)}`);
    res.status(200).json(Vendors);
  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
});

router.post('/', async (req, res) => {
  try {
    // Create a Vendor
    const Vendor = req.body;
    console.log(`Vendor: ${JSON.stringify(Vendor)}`);
    const rowsAffected = await database.create(Vendor);
    res.status(201).json({ rowsAffected });
  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    // Get the Vendor with the specified ID
    const VendorId = req.params.id;
    console.log(`VendorId: ${VendorId}`);
    if (VendorId) {
      const result = await database.read(VendorId);
      console.log(`Vendors: ${JSON.stringify(result)}`);
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
    // Update the Vendor with the specified ID
    const VendorId = req.params.id;
    console.log(`VendorId: ${VendorId}`);
    const Vendor = req.body;

    if (VendorId && Vendor) {
      delete Vendor.id;
      console.log(`Vendor: ${JSON.stringify(Vendor)}`);
      const rowsAffected = await database.update(VendorId, Vendor);
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
    // Delete the Vendor with the specified ID
    const VendorId = req.params.id;
    console.log(`VendorId: ${VendorId}`);

    if (!VendorId) {
      res.status(404);
    } else {
      const rowsAffected = await database.delete(VendorId);
      res.status(204).json({ rowsAffected });
    }
  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
});

export default router;