const User = require("../models/User");
const UserRole = require("../models/UserRole");

exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const user = new User({ firstName, lastName, email, password });
    await user.save();

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.assignRole = async (req, res) => {
  try {
    const { userId, roleId } = req.body;

    const userRole = new UserRole({ userId, roleId });
    await userRole.save();

    res
      .status(201)
      .json({ message: " Role assigned to user successfully", userRole });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
