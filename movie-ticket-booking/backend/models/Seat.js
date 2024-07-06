import mongoose from 'mongoose';

const seatSchema = new mongoose.Schema({
    seatNumber: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },
});

export default mongoose.model('Seat', seatSchema);
