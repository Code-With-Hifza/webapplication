const express = require("express");
const router = express.Router();
const {
  createPermission,
} = require("../controllers/permission.controller");

router.post("/", createPermission);

module.exports = router;
