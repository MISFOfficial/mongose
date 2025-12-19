import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import UserRouter from './app/modules/user/user.route'

const app: Application = express()

app.use(cors())

// perse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req: Request, res: Response) => {
    res.send('server is running')
})


// app.post('/api/v1/user', UserRouter)
app.use('/api/v1/user', UserRouter)





export default app
