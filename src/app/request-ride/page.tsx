
"use client"; 
import AvailableDrivers from '@/components/AvailableDrivers';
import RequestRideForm from '@/components/RequestRideForm';
import { useState } from 'react';

const RequestRidePage = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [rideType, setRideType] = useState('bike');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission (e.g., API call)
    console.log('Ride Request Submitted:', {
      pickupLocation,
      destination,
      rideType,
      notes,
    });
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
      <RequestRideForm/>
      <AvailableDrivers/>

      </div>
    </div>
  );
};

export default RequestRidePage;