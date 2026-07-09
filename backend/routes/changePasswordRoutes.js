const express = require("express");
const router = express.Router();

const changePasswordController = require("../controllers/changePasswordController");
const { authenticateAdmin, authenticateUser } = require("../middleware/authMiddleware");


router.put("/changePassword", authenticateUser, changePasswordController.updatePassword);



module.exports = router;