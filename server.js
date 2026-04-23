const express = require("express");
const mongoose = require("mongoose");
const student = require("./models/user");

const app = express();
const PORT = 3000;

mongoose
  .connect("mongodb://localhost:27017/crudapp")
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((error) => {
    console.log("Error Connecting to MongoDB:", error);
  });

app.use(express.json());

//add
app.post("/adduser", async (req, res) => {
  const newUser = await student.create(req.body);
  res.send(newUser);
});

//read
app.get("/readuser", async (req, res) => {
  const read = await student.find();
   res.send(read);
});

//delete
app.delete("/deleteuser/:name", async (req, res) => {
  const del = await student.deleteOne({ name: req.params.name });
   res.send(del);
});

//update
app.put("/updateuser", async (req, res) => {
  const up = await student.updateOne(
    { name: req.body.name },
    { $set: req.body },
  );
  res.send(up);
});

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
