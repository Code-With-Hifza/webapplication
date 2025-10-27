const mongoose = require("mongoose");

const userRoleSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("UserRole", userRoleSchema);


// Assign Role to User+POST+/api/users/assign-role+{ "userId":"<UserID>", "roleId":"<RoleID>" }