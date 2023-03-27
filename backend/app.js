// Import dependencies
const express = require("express");
const noteRoutes = require("./routes/note.route");
const userRoutes = require("./routes/user.route");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Create an express app
const app = express();

// Configure express app (middleware)
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

/* This is the root route. It is used to check if the server is running. */
app.get("/", (req, res) => {
	res.status(200).json({ alive: "true" });
});

// Routing
app.use("/api/notes", noteRoutes);
app.use("/api", userRoutes);

module.exports = app;
