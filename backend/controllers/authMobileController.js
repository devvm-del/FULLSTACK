const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// REGISTER
async function register(req, res) {
  try {
    const { username, password, full_name, department, address } = req.body;

    // 1. Validate role
    const role = "student";

    // 2. Check if email exists
    const existingUser = await User.findByUsername(username);

    if (existingUser) {
      return res.status(400).json({ message: "Student ID already exists" });
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create user
    const newUser = await User.createUser({
      username,
      password: hashedPassword,
      full_name,
      department,
      address,
      role,
    });

    return res.status(201).json({
      message: "User registered successfully, Wait for the approval.",
      user: newUser,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;

    // Find user
    const user = await User.findByUsername(username);

    if (!user) {
      return res.status(401).json({
        message: "Invalid username",
      });
    }

    // Check account status
    switch (user.status) {
      case "accepted":
        break;

      case "pending":
        return res.status(403).json({
          message: "Account not approved yet",
        });

      case "rejected":
        return res.status(403).json({
          message:
            "Your account has been rejected. Please contact the administrator.",
        });

      default:
        return res.status(403).json({
          message: "Account is inactive.",
        });
    }

    // Allow only students and teachers
    if (!["student", "teacher"].includes(user.role)) {
      return res.status(403).json({
        message:
          "Access denied. Only students and teachers can use the mobile app.",
      });
    }
    // Check if the account is enabled
    if (!user.is_enabled) {
      return res.status(403).json({
        message: "Your account has been disabled. Please contact the administrator.",
      });
    }

    // Verify password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role,
        full_name: user.full_name,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN || "1h",
      },
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        username: user.username,
        full_name: user.full_name,
        role: user.role,
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
}

module.exports = { login, register };
