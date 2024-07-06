import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SeatBooking = () => {
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        const fetchSeats = async () => {
            const res = await axios.get('/api/seats');
            setSeats(res.data);
        };
        fetchSeats();
    }, []);

    return (
        <div className="seats">
            {seats.map(seat => (
                <div key={seat._id} className={`seat ${seat.isAvailable ? 'available' : 'booked'}`}>
                    {seat.seatNumber}
                </div>
            ))}
        </div>
    );
};

export default SeatBooking;
