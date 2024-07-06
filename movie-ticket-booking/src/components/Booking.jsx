import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Booking = () => {
    const [seats, setSeats] = useState([]);
    const [selectedSeat, setSelectedSeat] = useState('');
    const [bookingDetails, setBookingDetails] = useState({
        userId: '',
        movieId: '',
    });

    useEffect(() => {
        const fetchSeats = async () => {
            const res = await axios.get('/api/seats');
            setSeats(res.data);
        };
        fetchSeats();
    }, []);

    const handleChange = (e) => {
        setBookingDetails({
            ...bookingDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleSeatSelect = (seatNumber) => {
        setSelectedSeat(seatNumber);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/bookings', { ...bookingDetails, seatNumber: selectedSeat });
            console.log('Booking successful', res.data);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userId" placeholder="User ID" onChange={handleChange} required />
                <input type="text" name="movieId" placeholder="Movie ID" onChange={handleChange} required />
                <div className="seats">
                    {seats.map(seat => (
                        <button key={seat._id} onClick={() => handleSeatSelect(seat.seatNumber)}>
                            {seat.seatNumber} {seat.isAvailable ? 'Available' : 'Booked'}
                        </button>
                    ))}
                </div>
                <button type="submit">Book Ticket</button>
            </form>
        </div>
    );
};

export default Booking;
