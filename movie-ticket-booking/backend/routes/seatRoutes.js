import express from 'express';
import Seat from '../models/Seat.js';

const router = express.Router();

// Get all seats
router.get('/', async (req, res) => {
    try {
        const seats = await Seat.find();
        res.status(200).json(seats);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
