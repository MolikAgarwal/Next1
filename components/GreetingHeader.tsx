'use client';
import React, { useEffect, useState } from 'react';

const GreetingHeader = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const now = new Date();
    setDate(now.toLocaleDateString('en-GB')); // Format: dd/mm/yyyy
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning ☀️';
    if (hour < 18) return 'Good Afternoon ☀️';
    return 'Good Evening 🌙';
  };

  return (
    <div className="greeting-header">
      <h2>{getGreeting()}</h2>
      <p>{date}</p>
    </div>
  );
};

export default GreetingHeader;
