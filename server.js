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
app.post("/users", async (req, res) => {
  try{
     if (!req.body.name) {
      return res.json({ message: "Name is required" });
    }
  const newUser = await student.create(req.body); 
  res.json(newUser);
  }catch(err){
    res.json("Error creating user");
  }
});

//read
app.get("/users", async (req, res) => {
  try{
  const read = await student.find();
   res.json(read);
}catch(err){
  res.json("Error fetching users");
}
});

//delete
app.delete("/users/:id", async (req, res) => {
  try{
  const del = await student.findByIdAndDelete(req.params.id);
  if (!del) {
  return res.json("User not found");
  }
   res.json(del);
}catch(err){
  res.json("Error deleting user");
}
});

//update
app.put("/users/:id", async (req, res) => {
  try{
  const up = await student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if(!up){
    return res.json("User not found");
  }
  res.json(up);
}catch(err){
  res.json("Error updating user");
}
});

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
