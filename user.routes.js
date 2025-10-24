const express = require('express');
const User = require('../models/user.model');
const Role = require('../models/role.model');
const router = express.Router();

// Create new user & assign roles

router.post('/', async (req, res) => {
  try {
    const { name, email, password, roles } = req.body; 
    const user = await User.create({ name, email, password, roles });
    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get single user with roles + permissions

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate({
        path: 'roles',
        populate: { path: 'permissions' }
      });

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
