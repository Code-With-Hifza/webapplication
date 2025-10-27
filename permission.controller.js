const Permission = require("../models/Permission");

exports.createPermission = async (req, res) => {
  try {
    const { name, slug } = req.body;

    const permission = new Permission({ name, slug });
    await permission.save();

    res
      .status(201)
      .json({ message: "Permission created successfully", permission });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
