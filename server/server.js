import express from "express";
import products from "./data/Products.js";
import dotenv from "dotenv"

dotenv.config();

const app = express()

// Load products from server
app.get("/api/products",(req,res)=>{
    res.json(products);
});

// Load product from server
app.get("/api/product/:id",(req,res)=>{
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.get("/",(req,res)=>{
    res.send("API is running..");
});

const PORT = process.env.PORT;

app.listen(PORT,console.log(`server is listening on port ${PORT}`));