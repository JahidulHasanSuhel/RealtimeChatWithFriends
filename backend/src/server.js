import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoute from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js'
import { connectDB } from './lib/db.js';
import { app, server } from './lib/soket.js';

dotenv.config();


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/api/auth", authRoute)
app.use("/api/messages", messageRoutes)

const PORT = process.env.PORT;
server.listen(PORT, ()=>{
    connectDB();
    console.log(`server is running on ${PORT}`);
}) 
