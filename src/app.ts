import morgan from 'morgan'
import cors from 'cors'
import express from  'express'
import userRoutes from './routes/user.routes'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(userRoutes)

export default app;