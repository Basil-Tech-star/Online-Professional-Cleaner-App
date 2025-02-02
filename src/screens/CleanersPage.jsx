import React, { useEffect, useState } from 'react';
import CleanerCard from '../components/CleanerCard';
import { api } from '../api';

const CleanersPage = () => {
  const [cleaners, setCleaners] = useState([]);

  useEffect(() => {
    const fetchCleaners = async () => {
      const response = await api.get('/cleaners');
      setCleaners(response.data);
    };
    fetchCleaners();
  }, []);

  const handleBook = (cleanerId) => {
    alert('Booking feature coming soon!');
  };

  return (
    <div>
      <h2>Available Cleaners</h2>
      {cleaners.map((cleaner) => (
        <CleanerCard key={cleaner.id} cleaner={cleaner} onBook={handleBook} />
      ))}
    </div>
  );
};

export default CleanersPage;
