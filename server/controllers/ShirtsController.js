import Shirt from "../models/shirt.js"

// Load all shirts data from server
//app.get("/api/t-shirts", 
const getAllShirts = async(req,res) => {
    try {
        const shirts = await Shirt.find({});
        res.status(200).json(shirts)
        console.log("Shirt data fetched")
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    //res.json(shirts);
};

// Load specific shirt data from server
//app.get("/api/t-shirts/:id", 
const getShirt = async(req,res) => {
    try {
        const queryId = parseInt(req.params.id)
        const shirt = await Shirt.find({ id: queryId });
        res.status(200).json(shirt)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

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

export {
    getAllShirts,
    getShirt
}