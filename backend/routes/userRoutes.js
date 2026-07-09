const express = require("express");
const router = express.Router();

const {
  checkUserStatus,
  getPendingUsers,
  getPendingTeachers,
  getAcceptedTeachers,
  getPendingStudents,
  getAcceptedStudents,
  getAcceptedUserCount,
  getPendingUserCount,
  getRejectedUserCount,
  acceptUser,
  rejectUser,
  enableUser,
  disableUser

} = require("../controllers/userController");

const {
  authenticateUser,
  authorizeRoles,
} = require("../middleware/authMiddleware");



router.get("/checkStatus", authenticateUser, checkUserStatus);
router.get("/pendingUsers", getPendingUsers);
router.get("/pendingTeacher", getPendingTeachers);
router.get("/acceptedTeacher", getAcceptedTeachers);
router.get("/pendingstudent", getPendingStudents);
router.get("/acceptedStudent", getAcceptedStudents);
router.get("/acceptedUserCount", getAcceptedUserCount);
router.get("/pendingUserCount", getPendingUserCount);
router.get("/rejectedUserCount", getRejectedUserCount);
router.put("/acceptUser/:id", acceptUser);
router.put("/rejectUser/:id", rejectUser);
router.put("/enableUser/:id", enableUser);
router.put("/disableUser/:id", disableUser);

module.exports = router;
