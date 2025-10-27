const Role = require("../models/Role");
const RolePermission = require("../models/RolePermission");

exports.createRole = async (req, res) => {
  try {
    const { name, slug } = req.body;

    const role = new Role({ name, slug });
    await role.save();

    res.status(201).json({ message: "Role created successfully", role });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.assignPermission = async (req, res) => {
  try {
    const { roleId, permissionId } = req.body;

    const rolePermission = new RolePermission({ roleId, permissionId });
    await rolePermission.save();

    res
      .status(201)
      .json({ message: "Permission assigned to role successfully", rolePermission });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
