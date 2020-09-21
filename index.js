const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();

const getRoleRoutes = require("./api/Admin/GetRole");
const loginRoutes = require("./api/Admin/Login");
const adminRegisterRoutes = require("./api/Admin/AdminRegister");
const roleRoutes = require("./api/Admin/Role");
const membershipRoutes = require("./api/Admin/Membership");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/Admin/getrole", getRoleRoutes);
app.use("/api/Admin/login", loginRoutes);
app.use("/api/Admin/admin_register", adminRegisterRoutes);
app.use("/api/Admin/role", roleRoutes);
app.use("/api/Membership", membershipRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
