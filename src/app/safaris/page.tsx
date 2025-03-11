'use client'
import SafariList from '@/components/SafariList';
import React, { useState } from 'react';

// Mock data for safaris
const mockSafaris = [
  { id: 1, name: "Serengeti Safari", price: 1200, duration: "5 days", rating: 4.8 },
  { id: 2, name: "Maasai Mara Adventure", price: 900, duration: "4 days", rating: 4.5 },
  { id: 3, name: "Kruger National Park Tour", price: 1500, duration: "7 days", rating: 4.9 },
  { id: 4, name: "Okavango Delta Expedition", price: 1800, duration: "6 days", rating: 4.7 },
  { id: 5, name: "Ngorongoro Crater Safari", price: 1100, duration: "3 days", rating: 4.6 },
];

const AllSafarisPage = () => {
  const [safaris, setSafaris] = useState(mockSafaris);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: Infinity,
    duration: '',
  });

  // Sort safaris by price
  const sortSafaris = (order: React.SetStateAction<string>) => {
    const sorted = [...safaris].sort((a, b) => 
      order === 'asc' ? a.price - b.price : b.price - a.price
    );
    setSafaris(sorted);
    setSortOrder(order);
  };

  // Apply filters
  const applyFilters = () => {
    const filtered = mockSafaris.filter((safari) => {
      const priceInRange = safari.price >= filters.minPrice && safari.price <= filters.maxPrice;
      const durationMatch = filters.duration ? safari.duration === filters.duration : true;
      return priceInRange && durationMatch;
    });
    setSafaris(filtered);
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({ minPrice: 0, maxPrice: Infinity, duration: '' });
    setSafaris(mockSafaris);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">All Safaris</h1>

        {/* Sorting Buttons */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => sortSafaris('asc')}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Cheap to Expensive
          </button>
          <button
            onClick={() => sortSafaris('desc')}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Expensive to Cheap
          </button>
        </div>

        {/* Filters Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold">Min Price</label>
              <input
                type="number"
                value={filters.minPrice}
                onChange={(e) => setFilters({ ...filters, minPrice: +e.target.value })}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Max Price</label>
              <input
                type="number"
                value={filters.maxPrice === Infinity ? '' : filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: +e.target.value || Infinity })}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Duration</label>
              <select
                value={filters.duration}
                onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">All</option>
                <option value="3 days">3 days</option>
                <option value="4 days">4 days</option>
                <option value="5 days">5 days</option>
                <option value="6 days">6 days</option>
                <option value="7 days">7 days</option>
              </select>
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={applyFilters}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Apply Filters
            </button>
            <button
              onClick={resetFilters}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Safaris List */}
        <SafariList safaris={safaris}/>
      </div>
    </div>
  );
};

export default AllSafarisPage;