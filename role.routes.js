const express = require('express');
const Role = require('../models/role.model');
const Permission = require('../models/permission.model');
const router = express.Router();

// Create new role with permissions
router.post('/', async (req, res) => {
  try {
    const { name, permissions } = req.body; // permissions = [permIds]
    const role = await Role.create({ name, permissions });
    res.status(201).json({ message: 'Role created', role });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all roles with permissions populated
router.get('/', async (req, res) => {
  const roles = await Role.find().populate('permissions');
  res.json(roles);
});

module.exports = router;
