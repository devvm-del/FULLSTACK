const jwt = require("jsonwebtoken");

// AUTHENTICATION
function authenticateUser(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }

    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }

    return res.status(401).json({ message: "Authentication failed" });
  }
}

// ROLE AUTHORIZATION
function authorizeRoles(...roles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    next();
  };
}

// STATUS CHECK
function checkStatus(...statuses) {
  return (req, res, next) => {
    if (!statuses.includes(req.user.status)) {
      return res.status(403).json({
        message: "Account not approved",
      });
    }

    next();
  };
}

module.exports = {
  authenticateUser,
  authorizeRoles,
  checkStatus,
};