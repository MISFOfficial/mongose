import express, { Application, Request, Response } from "express";
import cors from "cors";
import { model, Schema } from "mongoose";

const app: Application = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
  // inseting a test data in the mongobd
  // step 1 interface
  // step 2 schema
  // step 3 model
  // step 4 data base query

  // 1 creating inter face
  interface IUser {
    name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
    gender: "male" | "female";
    email: string;
    password: string;
  }

  // 2 creating schema using inter face

  const userSchema = new Schema<IUser>(
    {
      name: {
        firstName: { type: String, require: true },
        middleName: { type: String, require: true },
        lastName: { type: String, require: true },
      },
      gender: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
    },
    { timestamps: true }
  );

  // 3 creatin model using interface then the schema
  const User = model<IUser>("users", userSchema);

  // create user call funtions
  const createUserToDB = async () => {
    // 4 CREATE instance fo connect to the data base
    const user = new User({
      name: {
        firstName: "lalal",
        middleName: "Islam",
        lastName: "lalu",
      },
      gender: "male",
      email: "muksitul44@gmail.com",
      password: "123456789",
    });

    // now save to the data base
    await user.save();
  };

  createUserToDB();
});

export default app;
