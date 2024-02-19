import express from "express";
import mongoose from "mongoose";
//import shirts from "./data/shirtData.js";
import User from "./models/user.js";
import dotenv from "dotenv";
import Shirt from "./models/shirt.js"
import path from "path"
import { dirname } from "path"
import { fileURLToPath } from 'url';

dotenv.config();

const app = express()
app.use(express.json())
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const _dirname = path.dirname("")
const buildPath = path.join(_dirname, "../frontend/build")
app.use(express.static(buildPath))


app.get("/api", (req,res) => {
    res.send("API is running..");
});

// Load all shirts data from server
app.get("/api/t-shirts", async(req,res) => {
    try {
        const shirts = await Shirt.find({});
        res.status(200).json(shirts)
        console.log("Shirt data fetched")
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    //res.json(shirts);
});

// Load specific shirt data from server
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
app.post("/api/signup", async(req,res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json({user, message: "User signed up successfully"});
        console.log("User signed up successfully")
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

app.post("/api/login", async(req,res) => {
    try {
        console.log("Attempting login")
        console.log(req.body)
        const [user] = await User.find({ email : req.body.email })
        if (user) {
            if (user.password === req.body.password) {
                res.status(200).json({ message: "Login Successful"})
                console.log("Login successful")
            } else {
                res.status(401).json({ message: "Login failed, password is incorrect" })
                console.log({ message: "Login failed, password incorrect"})
            }
        } else {
            res.status(401).json({ message: "Email not found" })
            console.log("Email not found")
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

// // Drop an index in database
// app.post("/api/user/drop", async(req,res) => {
//     try {
//         //const user = await Shirt.collection.getIndexes()
//         const user = await User.collection.createIndex("email")
//         res.status(200).json(user)
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message});
//     }
// })

/* ADMIN FUNCTIONS */
// // Update DB with a new shirt
// app.post("/api/shirt", async(req,res) => {
//     try {
//         const shirt = await Shirt.create(req.body);
//         res.status(200).json(shirt);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message});
//     }
// })

// // Update all shirts data with filter
// app.post("/api/t-shirts/update", async(req,res) => {
//     try {
//         const shirt = await Shirt.updateMany(
//             {}, 
//             { $set: { "imgBack": "base-back.png" } }
//         );
//         res.status(200).json(shirt)
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message});
//     }
// })

// // Update all shirts data
// app.post("/api/t-shirts/update-manual", async(req,res) => {
//     try {
//         let changeArray = [
//             { genre: "games"},
//             { genre: "misc"},
//             { genre: "games"},
//             { genre: "games"},
//             { genre: "anime"},
//             { genre: "misc"},
//         ]
//         for (let id = 1; id < 7; id++) {
//             const shirt = await Shirt.updateOne(
//                 {"id" : [id]}, 
//                 { $set: changeArray[id-1]  }
//             );
//             console.log(shirt)
//         }
//         console.log("updated")
//         res.status(200).json(changeArray)
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message});
//     }
// })

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

