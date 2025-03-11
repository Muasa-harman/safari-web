"use client"; 
import { useEffect, useState } from 'react';

type Driver = {
  id: number;
  name: string;
  vehicle: string;
  rating: number;
  distance: string;
};

const AvailableDrivers = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching available drivers from an API
  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        // Simulate an API call with a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const mockDrivers: Driver[] = [
          { id: 1, name: 'John Doe', vehicle: 'Toyota Corolla', rating: 4.8, distance: '2 km away' },
          { id: 2, name: 'Jane Smith', vehicle: 'Honda Civic', rating: 4.7, distance: '3 km away' },
          { id: 3, name: 'Mike Johnson', vehicle: 'Ford Mustang', rating: 4.9, distance: '5 km away' },
        ];
        setDrivers(mockDrivers);
      } catch (error) {
        console.error('Failed to fetch drivers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDrivers();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Loading available drivers...</p>;
  }

  if (drivers.length === 0) {
    return <p className="text-center text-gray-600">No drivers available at the moment.</p>;
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Available Drivers</h2>
      <div className="space-y-4">
        {drivers.map((driver) => (
          <div key={driver.id} className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{driver.name}</h3>
                <p className="text-gray-600">{driver.vehicle}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">{driver.distance}</p>
                <p className="text-yellow-500">{driver.rating} ★</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableDrivers;