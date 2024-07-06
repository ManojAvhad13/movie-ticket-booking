import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    movieId: { type: String, required: true },
    seatNumber: { type: String, required: true },
    bookingDate: { type: Date, default: Date.now },
});

export default mongoose.model('Booking', bookingSchema);
