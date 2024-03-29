import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import path from "path";
import ShirtsRoute from "./routes/ShirtsRoute.js"
import UserRoute from "./routes/UserRoute.js"
import IndexRoute from "./routes/IndexRoute.js"
import { logger } from "./utils/middleware.js";
import { limiter } from "./utils/utils.js";
import { dirname } from "path";
import { fileURLToPath } from 'url';

// Definitions
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// const _dirname = path.dirname("")
const buildPath = path.join(__dirname, "../frontend/build")

// Server
const app = express()
// Middleware
app.use(express.json())
// Apply the rate limiter to all requests
app.use(limiter); 
// Allows static files from frontend to be served
app.use(express.static(buildPath))

// Routes
app.use("/api/shirt", logger, ShirtsRoute)
app.use("/api/user", logger, UserRoute)
app.use("*", IndexRoute)


app.listen(5000, () => {
    console.log(`server is listening on port ${PORT}`);
    mongoose.connect(DB_URL)
        .then(() => {
            console.log('connected to mongodb');
        }).catch((error) => {
            console.log(error);
        })
});

