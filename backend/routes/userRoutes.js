const express = require("express");
const { getUsers, getUserById } = require("../controllers/userController");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, getUsers);
router.get("/:id", auth, getUserById);

module.exports = router;
