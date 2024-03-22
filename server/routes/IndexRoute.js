import express from "express";
import { dirname } from "path";
import { fileURLToPath } from 'url';
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = express.Router()

// Connecting frontend
router.get("/", function(req,res) {
    res.sendFile(
        path.join(__dirname, "../frontend/build/index.html"),
        function (err) {
            if (err) {
                res.status(500).send(err);
            }
        }
    )
})

export default router