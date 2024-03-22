import express from "express";
import { dirname } from "path";
import { fileURLToPath } from 'url';
import path from "path";

const router = express.Router()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// const _dirname = path.dirname("")
// const buildPath = path.join(_dirname, "../frontend/build")

// Connecting frontend
router.get("*", function(req,res) {
    res.sendFile(
        path.join(__dirname, "../../frontend/build/index.html"),
        function (err) {
            if (err) {
                res.status(500).send(err);
            }
        }
    )
})

export default router