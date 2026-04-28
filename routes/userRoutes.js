const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/students", userController.createStudent);
router.get("/students", userController.getStudents);
router.delete("/students/:id", userController.deleteStudent);
router.put("/students/:id", userController.updateStudent);

module.exports = router;
