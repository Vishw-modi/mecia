const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["doctor", "customer"],
    required: true,
  },
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Static method for registering a user
userSchema.statics.register = async function (username, email, password, role) {
  const existingUser = await this.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }
  const user = new this({ username, email, password, role });
  await user.save();
  return user;
};

// Static method for logging in a user
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }
  // Instead of JWT, just return the user data
  return user;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
