import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from 'url';
import ShirtsRoute from "./routes/ShirtsRoute.js"
import UserRoute from "./routes/UserRoute.js"
import { logger } from "./utils/middleware.js";
import { limiter } from "./utils/utils.js";

// Definitions
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const _dirname = path.dirname("")
const buildPath = path.join(_dirname, "../frontend/build")

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

// Connecting frontend
app.get("*", function(req,res) {
    res.sendFile(
        path.join(__dirname, "../frontend/build/index.html"),
        function (err) {
            if (err) {
                res.status(500).send(err);
            }
        }
    )
})

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
    mongoose.connect(DB_URL)
        .then(() => {
            console.log('connected to mongodb');
        }).catch((error) => {
            console.log(error);
        })
    
});

