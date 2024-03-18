import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "./models/user.js";
import dotenv from "dotenv";
import Shirt from "./models/shirt.js"
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from 'url';
import Stripe from "stripe";

const password = "password1"
const hash = await bcrypt.hash(password, 13)


const isMatch = await bcrypt.compare("password1", hash)

console.log(password, hash, isMatch)

dotenv.config();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const SERVER_URL = process.env.SERVER_URL;

const app = express()
app.use(express.json())

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const _dirname = path.dirname("")
const buildPath = path.join(_dirname, "../frontend/build")
app.use(express.static(buildPath))

const stripe = new Stripe(STRIPE_SECRET_KEY)


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
        let userDetails = req.body
        const passwordHash = await bcrypt.hash(userDetails.password, 13)
        userDetails.password = passwordHash
        const user = await User.create(userDetails);
        res.status(200).json({ 
            isLoggedIn: true,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            subscribed: user.subscribed
        });
        console.log("User signed up successfully")
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

app.post("/api/login", async(req,res) => {
    try {
        console.log("Attempting login")
        const [user] = await User.find({ email : req.body.email })
        if (user) {
            const isMatch = await bcrypt.compare(req.body.password, user.password)
            if (isMatch) {
                res.status(200).json({ 
                    isLoggedIn: true,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    subscribed: user.subscribed
                })
                console.log("Login successful")
            } else {
                res.status(401).json({ message: "Login failed, password is incorrect" })
                console.log({ message: "Login failed, password incorrect" })
            }
        } else {
            res.status(401).json({ message: "Email not found" })
            console.log("Email not found")
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
})

app.post("/api/checkout", async(req,res) => {
    console.log("Checking out")
    try {
        const lineItems = req.body
        console.log(lineItems)
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: lineItems,
            success_url: `${SERVER_URL}/cart/order-confirmation`,
            cancel_url: `${SERVER_URL}`,
            billing_address_collection: "required",
            shipping_address_collection: { allowed_countries : ["AU"]},
            shipping_options: [ 
                { 
                    shipping_rate : "shr_1OmEXGINq4VScbw35GfjLLeh"
                },
                {
                    shipping_rate: "shr_1OmF0kINq4VScbw3rYA61Ln6"
                }
            ]
        })
        res.status(200).json({ url: session.url})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message : error.message })
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

// Update all shirts data
// app.post("/api/t-shirts/update-manual", async(req,res) => {
//     try {
//         let changeArray = [
//             { description: "Unleash your inner warrior with this striking T-shirt, featuring a detailed, dark-toned medieval emblem that commands respect and evokes the spirit of ancient legends. Perfect for the modern-day knight or fantasy enthusiast, it's a bold statement piece that's both stylish and steeped in mystique."},
//             { description: "Celebrate your love for the renowned Twitch cutie Nilliur! Designed for fans and followers of Nilliur's amazing content, this trendy and comfortable t-shirt is a must-have addition to any Nilliur enthusiast's wardrobe."},
//             { description: "Escape to your favorite rural retreat with our Stardew Valley T-shirt, where every wear is a step into a charming pixel paradise. It's the perfect attire for any fan looking to show off their love for the tranquil farm life and the cozy community within."},
//             { description: "Strategize in style with our Teamfight Tactics T-shirt, boasting a sleek golden emblem that's as bold and competitive as the game itself. It's a trophy garment for tacticians who craft victories with skill and flair."},
//             { description: "Step into the world of soul reapers with this dynamic T-shirt, featuring your favourite fierce samurai warrior set against a backdrop of swirling clouds. It's the ultimate piece for fans who appreciate the blend of action, honor, and shinigamis. The sky is the limit with this tee!"},
//             { description: "Make a minimalist statement with this crisp T-shirt, showcasing bold 'SAMPLE TEXT' in a stark, eye-catching frame. It's a meme classic, and for those who know? You know."},
//             { description: "Dive into a world of fantasy with this vibrant T-shirt, adorned with striking anime characters ready for adventure. It's a wearable portal to an epic saga, ideal for fans who live and breathe the gacha life."},
//             { description: "Celebrate your love for Korea's favorite drink with this playful T-shirt, featuring a cute soju bottle and takeout box in a lighthearted spirit. It's the ideal pick for foodies and party-goers who enjoy a touch of humor with their style."},
//             { description: "???"},
//         ]
//         for (let id = 1; id < 10; id++) {
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

// //Update a single shirt
// app.post("/api/t-shirts/update-single", async(req,res) => {
//     try {
//         const shirt = await Shirt.updateOne(
//             {"id" : 5},
//             { $set: { 
//                 brand: "Bleach",
//                 name: "Ichigo Graphic Tee"
//             }}
//         )
//         console.log("updated")
//         res.status(200).json(shirt)
//     } catch (error) {
//         console.log(error.message)
//         res.status(500).json({ message : error.message })
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



app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
    mongoose.connect(DB_URL)
        .then(() => {
            console.log('connected to mongodb');
        }).catch((error) => {
            console.log(error);
        })
    
});

