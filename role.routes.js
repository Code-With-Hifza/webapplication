const express = require("express");
const router = express.Router();
const {
  createRole,
  assignPermission,
} = require("../controllers/role.controller");

router.post("/", createRole);
router.post("/assign-permission", assignPermission);

module.exports = router;
