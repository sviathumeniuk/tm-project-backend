const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const groupRoutes = require("./routes/group.route");
const teacherRoutes = require("./routes/teacher.route");
const loadRoutes = require("./routes/load.route");
const paymentRoutes = require("./routes/payment.route");
const reportRoutes = require("./routes/report.route");
const studentRoutes = require("./routes/student.route");
const authRoutes = require("./routes/auth.route");
require("dotenv").config();
const { MONGO_URL, PORT } = process.env

const app = express();

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: ["http://localhost:4200"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use('/api/groups', groupRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/loads', loadRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
