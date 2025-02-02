import React from 'react';

const CleanerCard = ({ cleaner, onBook }) => {
  return (
    <div>
      <h3>{cleaner.name}</h3>
      <p>{cleaner.cleaning_service}</p>
      <p>Location: {cleaner.location}</p>
      <p>Rating: {cleaner.rating}</p>
      <button onClick={() => onBook(cleaner.id)}>Book Now</button>
    </div>
  );
};

export default CleanerCard;
