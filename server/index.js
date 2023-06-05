import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import authRouter from './routes/auth.js';
import goodsRouter from './routes/goods.js';
import commentRouter from "./routes/comment.js";
import replyRouter from "./routes/reply.js";

const app = express();
dotenv.config();

//Constants
const DB_NAME = process.env.DB_NAME;
const PORT = process.env.PORT;

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/auth", authRouter);
app.use("/", goodsRouter);
app.use("/good/comments", commentRouter);
app.use("/", replyRouter);

const start = async() => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`);
        app.listen(PORT, () => console.log(`Connect to server on port: ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start();