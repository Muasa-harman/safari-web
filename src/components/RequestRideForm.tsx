"use client"; 
import { useState } from 'react';

const RequestRideForm = () => {
  const [destination, setDestination] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission (e.g., API call)
    console.log('Ride Request Submitted:', {
      destination,
    });
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Request a Ride</h1>
      
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Destination</label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300"
              placeholder="Enter destination"
              required
            />
          </div>
        </form>
      
    </div>
  );
};

export default RequestRideForm;