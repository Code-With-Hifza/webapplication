const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Role", roleSchema);

// Create Role+POST+/api/roles+{ "name":"Admin", "slug":"admin" }