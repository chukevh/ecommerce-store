import { Decimal128 } from "mongodb";
import mongoose from "mongoose";

const shirtSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: true
        },
        img: {
            type: String,
            required: true
        },        
        brand: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Decimal128,
            required: true
        },
        rating: {
            type: Decimal128,
            required: true,
            max: 5
        },
        reviewCount: {
            type: Number,
            required: true
        },
        stock: {
            type: Number,
            required: true
        }
    },
    { timestamps: true}
)

const Shirt = mongoose.model('Shirt', shirtSchema);
export default Shirt;

// app.post("/shirt", async(req,res) => {
//     try {
//         const shirt = await Shirt.create(req.body);
//         res.status(200).json(shirt);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message});
//     }
// })