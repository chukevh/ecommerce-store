import bcrypt from "bcrypt";
import User from "../models/user.js";
import Stripe from "stripe";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const SERVER_URL = process.env.SERVER_URL;
const stripe = new Stripe(STRIPE_SECRET_KEY)

// Get user by email
const getUser = async (req, res) => {
    try {
        const userEmail = req.params.email
        const [user] = await User.find({ email : userEmail })
        if (user) {
            res.status(200).json({
                message: "User found",
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                subscribed: user.subscribed
            }) 
        } else {
            res.status(401).json({ message: "Email not found" })
            console.log("Email not found")
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
}

// Sign up user to db
const createUser = async(req,res) => {
    try {
        let userDetails = req.body
        const passwordHash = await bcrypt.hash(userDetails.password, 13)
        userDetails.password = passwordHash
        console.log(userDetails)
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
}

// Authentic user
const loginUser = async(req,res) => {
    try {
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
}

// Checkout user
const checkoutUser = async(req,res) => {
    try {
        const lineItems = req.body
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
        console.log("checkout succesful", lineItems)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message : error.message })
    }
}

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

export {
    getUser,
    createUser,
    loginUser,
    checkoutUser
}