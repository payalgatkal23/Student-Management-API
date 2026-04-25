const User = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.json({ message: "Name is required" });
    }

    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.json({ message: "Error creating user" });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: "Error fetching users" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.json({ message: "Error deleting user" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!user) {
      return res.json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.json({ message: "Error updating user" });
  }
};
