const express = require("express");
const router = express.Router();

// fullName,userName,password,authorizationLevel

router.post("/", (req, res, next) => {
  res.status(200).json({
    result: true,
    uuid: "sdf6s54135-sdf5544-as5d4a3sd25",
    key:
      "Cfsdfsdf6s5df13s5df4s63d5fsdfkusidhfksjdhgfkuahvsgfkashdfs52df4s5df13s5f4sdfkjbsdjfhvsgdkfjA==",
  });
});

module.exports = router;
