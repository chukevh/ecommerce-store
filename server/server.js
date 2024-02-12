import express from "express";
import mongoose from "mongoose";
//import shirts from "./data/shirtData.js";
import User from "./models/user.js";
import dotenv from "dotenv";
import Shirt from "./models/shirt.js"
import path from "path"

dotenv.config();

const app = express()
app.use(express.json())

const _dirname = path.dirname("")
const buildPath = path.join(_dirname, "../frontend/build")
app.use(express.static(buildPath))

app.get("/", function(req,res) {
    res.sendFile(
        path.join(__dirname, "../frontend/build/index.html"),
        function (err) {
            if (err) {
                res.status(500).send(err);
            }
        }
    )
})

app.get("/api", (req,res) => {
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

// Sign up user to db
app.post("/api/sign-up", async(req,res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

// Update all shirts data with filter
app.post("/api/t-shirts/update", async(req,res) => {
    try {
        const shirt = await Shirt.updateMany(
            {}, 
            { $set: { "imgBack": "base-back.png" } }
        );
        res.status(200).json(shirt)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

// Update all shirts data
app.post("/api/t-shirts/update-manual", async(req,res) => {
    try {
        let changeArray = [
            { genre: "games"},
            { genre: "misc"},
            { genre: "games"},
            { genre: "games"},
            { genre: "anime"},
            { genre: "misc"},
        ]
        for (let id = 1; id < 7; id++) {
            const shirt = await Shirt.updateOne(
                {"id" : [id]}, 
                { $set: changeArray[id-1]  }
            );
            console.log(shirt)
        }
        console.log("updated")
        res.status(200).json(changeArray)
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

