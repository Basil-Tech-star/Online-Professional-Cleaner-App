import React, { useState } from 'react';
import { api } from '../api';

const BookingForm = ({ cleanerId, onClose }) => {
  const [message, setMessage] = useState('');

  const handleBook = async () => {
    const token = localStorage.getItem('token');
    try {
      await api.post(
        '/book',
        { cleaner_id: cleanerId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Booking successful!');
      setTimeout(onClose, 2000);
    } catch (error) {
      console.error(error);
      setMessage('Booking failed!');
    }
  };

  return (
    <div>
      <h2>Book Cleaner</h2>
      <button onClick={handleBook}>Confirm Booking</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookingForm;
