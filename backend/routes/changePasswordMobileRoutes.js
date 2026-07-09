const express = require("express");
const router = express.Router();

const changePasswordMobileController = require("../controllers/changePasswordMobileController");
const { authenticateAdmin, authenticateUser } = require("../middleware/authMiddleware");


router.put("/changePasswordMobile", authenticateUser, changePasswordMobileController.updatePassword);



module.exports = router;