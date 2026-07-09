const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController");
const {
  authenticateUser,
  authorizeRoles,
} = require("../middleware/authMiddleware");

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected example
router.get(
  "/admin",
  authenticateUser,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({ message: "Welcome Admin" });
  }
);

module.exports = router;