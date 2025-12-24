import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

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

export const User = model<IUser>("users", userSchema);
