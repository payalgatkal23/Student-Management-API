const express = require("express");
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");

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

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
