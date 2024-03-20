import express from "express";
import { checkoutUser, createUser, getUser, loginUser } from "../controllers/UserController.js";

const router = express.Router()

router.get('/:email', getUser)
router.post('/', createUser)
router.post('/login', loginUser)
router.post('/checkout', checkoutUser)

export default router