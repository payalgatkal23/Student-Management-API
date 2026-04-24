const User = require("../models/user");

// CREATE
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
