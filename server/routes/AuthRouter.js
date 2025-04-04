const { signUp, login } = require("../controllers/AuthController.js");
const {
  signUpValidation,
  loginValidation,
} = require("../middlewares/AuthMiddleware");
const upload = require("../models/fileUpload");
const ensureAuthenticated = require("../middlewares/Auth");

const router = require("express").Router();

router.post("/signup", signUp);

router.post("/login", login);

router.get("/verify", ensureAuthenticated, (req, res) => {
  res.send({ message: "You have access!", user: req.user });
});

module.exports = router;
