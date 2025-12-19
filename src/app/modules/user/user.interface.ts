import { Schema } from "mongoose";

// create a interface
export interface IUser {
    id: string;
    role: 'admin';
    password: string;
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    };
    gender: 'male' | 'female';
    email?: string
}

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
