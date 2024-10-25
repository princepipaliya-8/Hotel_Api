import express from 'express';
import { bookingGet, bookingPost } from '../controller/booking.js'

const booking = express.Router()

booking.get("/", bookingGet)
booking.post("/", bookingPost)

export default booking