const express = require("express");
const router = express.Router();
const UserControllers = require("./UserControllers");

router.post("/login", UserControllers.login);
router.post("/logout", UserControllers.logout);
router.post("/validate", UserControllers.validate);

module.exports = router;
