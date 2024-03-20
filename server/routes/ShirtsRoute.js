import express from 'express'
import { getAllShirts, getShirt } from '../controllers/ShirtsController.js'

const router = express.Router()

router.get('/', getAllShirts)
router.get('/:id', getShirt)


export default router