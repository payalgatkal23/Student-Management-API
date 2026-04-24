const express = require("express");
const mongoose = require("mongoose");
const student = require("./models/user");

const app = express();
const PORT = 3000;

mongoose
  .connect("mongodb://localhost:27017/crudapp")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error Connecting to MongoDB:", error);
  });

app.use(express.json());

//add
app.post("/adduser", async (req, res) => {
  try{
  const newUser = await student.create(req.body); 
  res.send(newUser);
  }catch(err){
    res.send("Error creating user");
  }
});

//read
app.get("/readuser", async (req, res) => {
  const read = await student.find();
   res.send(read);
});

//delete
app.delete("/deleteuser/:id", async (req, res) => {
  const del = await student.deleteOne({ _id: req.params.id });
   res.send(del);
});

//update
app.put("/updateuser/:id", async (req, res) => {
  const up = await student.updateOne(
    { _id: req.params.id },
    { $set: req.body },
  );
  res.send(up);
});

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
