import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { Schema } from 'mongoose'

const app: Application = express()

app.use(cors())

// perse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
    // res.send('Server is Running')

    // testing a sample data to for prectice
    // step 1 : create a interface
    // step 1 : Schema
    // step 1 : Model
    // step 1 : Database Query


    // create a interface
    interface IUser {
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
        name: { type: String, required: true },

    })
})



export default app
