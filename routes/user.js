const express = require("express");

const router = express.Router();

// 삭제
const User = require("../models/user");

const { sayHello, signUp, signIn } = require("../controllers/user");

router.get("/", sayHello);
router.get("/signup", signUp);
router.get("/signin", signIn);

module.exports = router;
