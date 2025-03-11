"use client"

import React, { useState } from 'react';

const SafariSearchForm = ({ onSearch }: { onSearch: (from: string, to: string) => void }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(from ,to)
    // Handle form submission logic here
    console.log('From:', from);
    console.log('To:', to);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 font-semibold">From</label>
          <input 
            type="text" 
            value={from} 
            onChange={(e) => setFrom(e.target.value)} 
            className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300"
            placeholder="Enter starting location"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">To</label>
          <input 
            type="text" 
            value={to} 
            onChange={(e) => setTo(e.target.value)} 
            className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300"
            placeholder="Enter destination"
          />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600">
          Search Safari
        </button>
      </form>
    </div>
  );
};

export default SafariSearchForm;