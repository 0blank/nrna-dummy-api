const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  if (
    (req.body.userName === "admin@admin.com" ||
      "superAdmin@admin.com" ||
      "documentAdmin@admin.com" ||
      "paymentAdmin@admin.com" ||
      "iccAdmin@admin.com") &&
    req.body.password === "gg"
  ) {
    res.status(200).json({
      user: {
        mfaToken:
          "eyalsijdhfalkjsdhflakjhf8a7w6ylaksjdffa8usdhflakjsdfhlaskjdfg0a98dufhlajsdfhs-sdf-sdofjlaisudflaisdfyaosliud",
        authorizationLevel: "string",
        authorizationType: null,
        firstName: "Suman",
        middleName: "Mahtashi",
        lastName: "Gauchan",
        title: null,
        suspended: false,
        createdAt: "2020-09-10T09:58:22.8353935",
        updatedAt: null,
        emailVerifiedOn: null,
        contactNoVerifiedOn: null,
        id: "7696a5fb-b3bf-477a-93f8-32731caa5cc6",
        userName: req.body.userName,
        normalizedUserName: "RAWALLAXMI221@GMAIL.COM",
        email: "rawallaxmi221@gmail.com",
        normalizedEmail: "RAWALLAXMI221@GMAIL.COM",
        emailConfirmed: false,
        passwordHash:
          "AQAAAAEAACcQAAAAENCw+u+wsYn8H8C0VtFx2ze0SQNMKVF1CduZ1ZmFO8tPuMBXh8q+EyA6jDD2QQgwTA==",
        securityStamp: "VAZIQL7DORX6D5NYII4XU4WYNSEVLWA2",
        concurrencyStamp: "4f49d248-e943-4f24-aaec-61a0b65da50f",
        phoneNumber: null,
        phoneNumberConfirmed: false,
        twoFactorEnabled: false,
        lockoutEnd: null,
        lockoutEnabled: true,
        accessFailedCount: 0,
      },
      role: [
        req.body.userName === "admin@admin.com"
          ? "Admin"
          : req.body.userName === "superAdmin@admin.com"
          ? "Project Admin"
          : req.body.userName === "documentAdmin@admin.com"
          ? "Document Admin"
          : req.body.userName === "paymentAdmin@admin.com"
          ? "Payment Admin"
          : "ICC Admin",
      ],
    });
  } else {
    res.status(403).json({ message: "Invalid credintial" });
  }
});

module.exports = router;
