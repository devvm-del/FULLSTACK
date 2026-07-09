require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const authMobileRoutes = require("./routes/authMobileRoutes");
const adminRoutes = require("./routes/changePasswordRoutes");
const changePasswordMobileRoutes = require("./routes/changePasswordMobileRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

app.use("/api/authMobile", authMobileRoutes);
app.use("/api/mobile", changePasswordMobileRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 