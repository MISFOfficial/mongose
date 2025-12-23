import mongoose from "mongoose";

const express = require("express");
const app = express();
const port = 5000;

// data base connections

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/statefast");
    console.log("Database connection successfully");
  } catch (err) {
    console.log("Conection Faild!", err);
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
