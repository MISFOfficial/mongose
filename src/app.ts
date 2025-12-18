import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { model, Schema } from 'mongoose'

const app: Application = express()

app.use(cors())

// perse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
    res.send('Server is Running')

    // testing a sample data to for prectice
    // step 1 : create a interface
    // step 1 : Schema
    // step 1 : Model
    // step 1 : Database Query on model

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
        name: {
            firstName: { type: String, required: true },
            middleName: { type: String, required: true },
            lastName: { type: String, required: true },
        }
    })


    // model
    const User = model<IUser>('user', userSchema)

    // under in asyc funftions
    const createUser = async () => { // connet the data and send it in the data base

        // Query
        const user = new User({
            id: '444444',
            role: 'admin',
            password: 'dfsdfsd',
            name: {
                firstName: 'muksitul',
                middleName: 'islam',
                lastName: 'jahin',
            },
            gender: 'male',
            email: 'muksitul44@gmail.com'
        }
        );
        await user.save();
    }

    createUser()
})



export default app
