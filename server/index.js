const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const jerseyteamRoutes = require("./routes/team");
const orderRoutes = require("./routes/order");
const authMW = require("./middleware/auth");
const logosRoutes = require("./routes/logos");

const mailerRoutes = require("./src/routes/mailer");
const imageRoutes = require("./src/routes/image");
const videoRoutes = require("./src/routes/video");
const scheduleRoutes = require("./src/routes/schedule");
const teamRoutes = require("./src/routes/team");
const playerRoutes = require("./src/routes/player");

const app = express();

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/comment", mailerRoutes);
app.use("/image", imageRoutes);
app.use("/video", videoRoutes);
app.use("/schedule", scheduleRoutes);
app.use("/team", teamRoutes);
app.use("/player", playerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/team/logos", authMW, logosRoutes);
app.use("/api/team", authMW, jerseyteamRoutes);
app.use("/api/order", authMW, orderRoutes);

// Mongo + Listen
const port = process.env.PORT || 8000;
const db_url = process.env.DATABASE_URL;

mongoose
  .connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to DB"));

app.listen(port, () => console.log(`Server is running on port: ${port}......`));
