const express = require('express');
const Permission = require('../models/permission.model');
const router = express.Router();

// Create new permission
router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;
    const permission = await Permission.create({ name, description });
    res.status(201).json({ message: 'Permission created', permission });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all permissions
router.get('/', async (req, res) => {
  const permissions = await Permission.find();
  res.json(permissions);
});

module.exports = router;
