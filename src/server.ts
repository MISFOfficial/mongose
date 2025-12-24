import mongoose from "mongoose";
import app from "./app";

const port = 5000;

// data base connections

async function main() {
  try {
    await mongoose.connect(
      "mongodb://admin:secret123@localhost:27017/StateFast?authSource=admin"
    );
    console.log("Database connection successfully");

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (err) {
    console.log("Conection Faild!", err);
  }
}

main();
