const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();
app.use(express.json()); // Middleware for parsing JSON

// Direct MongoDB connection string
const MONGO_URI = "mongodb://localhost:27017/my-app-db"; // Replace with your MongoDB URL

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Register route
app.post("/register", async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const user = await User.register(username, email, password, role);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    res.json({ message: "Login successful", user }); // Return user object
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
