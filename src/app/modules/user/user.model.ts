import { model, Schema } from "mongoose"
import { IUser } from "./user.interface"

// creating schema using interface
const userSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
        firstName: { type: String, required: true },
        middleName: { type: String, required: true },
        lastName: { type: String, required: true },
    }
})


// model
export const User = model<IUser>('user', userSchema)