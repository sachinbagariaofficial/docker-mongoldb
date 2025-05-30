const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  location: String,
  email: String,
});

module.exports = mongoose.model("User", userSchema);
