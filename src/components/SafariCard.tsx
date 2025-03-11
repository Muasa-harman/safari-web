"use client"

import Link from 'next/link';
import React from 'react';

const SafariCard:React.FC<SafariCardProps> = ({ safari }) => {
  return (
    <Link href={`/safari/${safari.id}`} passHref>
    <div className="grid  gap-6">
        <div key={safari.id} className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{safari.name}</h2>
          <p className="text-gray-600 mb-2">Price: ${safari.price}</p>
          <p className="text-gray-600 mb-2">Duration: {safari.duration}</p>
          <p className="text-gray-600 mb-2">Rating: {safari.rating} ★</p>
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
            Book Now
          </button>
        </div>
    </div>
     </Link>
  );
};

export default SafariCard;