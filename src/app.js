import express, { json } from 'express';
import morgan from 'morgan'
import personsRoutes from './routes/persons'
import accountsRoutes from './routes/accounts'


const app = express()

//middlewares
app.use(morgan('dev'))
app.use(json())

//routes
app.use('/api/persons', personsRoutes)
app.use('/api/accounts',accountsRoutes)

export default app;