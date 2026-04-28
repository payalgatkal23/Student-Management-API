const User = require("../models/user");

exports.createStudent = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.json({ message: "Name is required" });
    }

    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.json({ message: "Error creating student" });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: "Error fetching students" });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.json({ message: "Student not found" });
    }

    res.json(user);
  } catch (err) {
    res.json({ message: "Error deleting student" });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!user) {
      return res.json({ message: "Student not found" });
    }

    res.json(user);
  } catch (err) {
    res.json({ message: "Error updating student" });
  }
};
