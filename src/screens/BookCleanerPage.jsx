import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';

const BookCleanerPage = ({ cleanerId }) => {
  const [showBookingForm, setShowBookingForm] = useState(true);

  const handleClose = () => setShowBookingForm(false);

  return (
    <div>
      {showBookingForm ? <BookingForm cleanerId={cleanerId} onClose={handleClose} /> : <p>Booking Completed!</p>}
    </div>
  );
};

export default BookCleanerPage;
