import express from "express";
import mongoose from "mongoose";
//import shirts from "./data/shirtData.js";
import User from "./models/user.js";
import dotenv from "dotenv";
import Shirt from "./models/shirt.js"

dotenv.config();

const app = express()
app.use(express.json())

app.get("/", (req,res) => {
    res.send("API is running..");
});

// Load products from server
app.get("/api/t-shirts", async(req,res) => {
    try {
        const shirts = await Shirt.find({});
        res.status(200).json(shirts)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    //res.json(shirts);
});

// Load product from server
app.get("/api/t-shirts/:id", async(req,res) => {
    try {
        const queryId = parseInt(req.params.id)
        const shirt = await Shirt.find({ id: queryId });
        res.status(200).json(shirt)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.post("/sign-up", async(req,res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})


const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
    mongoose.connect(DB_URL)
        .then(() => {
            console.log('connected to mongodb');
        }).catch((error) => {
            console.log(error);
        })
});

