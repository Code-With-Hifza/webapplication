const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();
app.use(express.json());

// MongoDB connect
connectDB();

// Routes import
app.use('/api/permissions', require('./routes/permission.routes'));
app.use('/api/roles', require('./routes/role.routes'));
app.use('/api/users', require('./routes/user.routes'));

// Test route
app.get("/", (req, res) => {
  res.send("RBAC System Running ");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
