"use client"

import React from 'react';
import SafariCard from './SafariCard';



const SafariList: React.FC<SafariListProps> = ({ safaris }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {safaris.map((safari) => (
        <SafariCard key={safari.id} safari={safari} />
      ))}
    </div>
  );
};

export default SafariList;