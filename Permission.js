const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Permission", permissionSchema);


// Create Permission+POST+/api/permissions+{ "name":"View Users", "slug":"view_users" }