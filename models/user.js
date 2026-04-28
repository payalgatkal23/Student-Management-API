const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
  },
  course: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
