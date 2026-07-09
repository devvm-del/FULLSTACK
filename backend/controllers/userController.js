const { getUsersByRoleAndStatus, countUsersByStatus, acceptUserQuery, rejectUserQuery, pendingUsers, enableUserQuery, disableUserQuery, findById } = require("../models/userModel");


const checkUserStatus = async (req, res) => {
  try {
    const data = await findById(req.user.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (!data.is_enabled) {
      return res.status(403).json({
        success: false,
        message: "Your account has been disabled. Please contact the administrator.",
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getPendingUsers = async (req, res) => {
  try {
    const data = await pendingUsers();

    return res.status(200).json({
      success: true,
      status: "pending",
      count: data.length,
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
};


// Teachers pending
const getPendingTeachers = async (req, res) => {
  try {
    const data = await getUsersByRoleAndStatus("teacher", "pending");

    return res.status(200).json({
      success: true,
      role: "teacher",
      count: data.length,
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
};

const getAcceptedTeachers = async (req, res) => {
  try {
    const data = await getUsersByRoleAndStatus("teacher", "accepted");

    return res.status(200).json({
      success: true,
      role: "teacher",
      count: data.length,
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
};

// Students pending (if needed)
const getPendingStudents = async (req, res) => {
  try {
    const data = await getUsersByRoleAndStatus("student", "pending");

    return res.status(200).json({
      success: true,
      role: "student",
      count: data.length,
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
};



const getAcceptedStudents = async (req, res) => {
  try {
    const data = await getUsersByRoleAndStatus("student", "accepted");

    return res.status(200).json({
      success: true,
      role: "student",
      count: data.length,
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
};


const getAcceptedUserCount = async (req, res) => {
  try {
    const data = await countUsersByStatus("accepted");

    return res.status(200).json({
      success: true,
      status: "accepted",
      count: data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
    });
  }
};


const getPendingUserCount = async (req, res) => {
  try {
    const data = await countUsersByStatus("pending");

    return res.status(200).json({
      success: true,
      status: "pending",
      count: data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
    });
  }
};

const getRejectedUserCount = async (req, res) => {
  try {
    const data = await countUsersByStatus("rejected");

    return res.status(200).json({
      success: true,
      status: "rejected",
      count: data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
    });
  }
};


const acceptUser = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await acceptUserQuery(id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User accepted successfully",
      data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


const rejectUser = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await rejectUserQuery(id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User rejected successfully",
      data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const enableUser = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await enableUserQuery(id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User enabled successfully",
      data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const disableUser = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await disableUserQuery(id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User disabled successfully",
      data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


module.exports = {
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
  
};