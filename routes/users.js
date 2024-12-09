const router = require("express").Router();
const {
  getCurrentUser,
  createUser,
  loginUser,
} = require("../controllers/users");

router.get("/me", getCurrentUser);
router.post("/signup", createUser);
router.post("/signin", loginUser);
