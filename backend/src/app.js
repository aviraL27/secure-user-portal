const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const app = express();

app.use(
  cors({
    origin: true,
    credentials: true
  })
);

// middleware
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

module.exports = app;
