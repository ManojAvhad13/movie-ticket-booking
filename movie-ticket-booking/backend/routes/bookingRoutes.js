import express from 'express';
import Booking from '../models/Booking.js';

const router = express.Router();

// Create Booking
router.post('/', async (req, res) => {
    const { userId, movieId, seatNumber } = req.body;
    try {
        const newBooking = new Booking({ userId, movieId, seatNumber });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
