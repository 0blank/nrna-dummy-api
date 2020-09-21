const express = require("express");
const router = express.Router();

const data = [
  {
    id: 1,
    name: "ICC Admin",
    normalizedName: "ICC ADMIN",
    concurrencyStamp: 11,
  },
  {
    id: 2,
    name: "Project Admin",
    normalizedName: "PROJECT ADMIN",
    concurrencyStamp: 22,
  },
  {
    id: 3,
    name: "Admin",
    normalizedName: "ADMIN",
    concurrencyStamp: 33,
  },
  {
    id: 4,
    name: "Document Admin",
    normalizedName: "DOCUMENT ADMIN",
    concurrencyStamp: 44,
  },
];

router.get("/", (req, res, next) => {
  res.status(200).json(data);
});

module.exports = router;
