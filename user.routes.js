const express = require("express");
const router = express.Router();
const {
  createUser,
  assignRole,
} = require("../controllers/user.controller");

router.post("/", createUser);
router.post("/assign-role", assignRole);

module.exports = router;
