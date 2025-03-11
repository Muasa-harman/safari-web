"use client"

import { useParams } from 'next/navigation';;



// Mock data for safaris
const mockSafaris: Safari[] = [
  {
    id: 1,
    name: "Serengeti Safari",
    price: 1200,
    duration: "5 days",
    rating: 4.8,
    description: "Experience the wild beauty of the Serengeti with our guided safari tour.",
  },
  {
    id: 2,
    name: "Maasai Mara Adventure",
    price: 900,
    duration: "4 days",
    rating: 4.5,
    description: "Explore the Maasai Mara and witness the Great Migration.",
  },
  {
    id: 3,
    name: "Kruger National Park Tour",
    price: 1500,
    duration: "7 days",
    rating: 4.9,
    description: "Discover the diverse wildlife of Kruger National Park.",
  },
  {
    id: 4,
    name: "Okavango Delta Expedition",
    price: 1800,
    duration: "6 days",
    rating: 4.7,
    description: "Explore the unique ecosystem of the Okavango Delta.",
  },
  {
    id: 5,
    name: "Ngorongoro Crater Safari",
    price: 1100,
    duration: "3 days",
    rating: 4.6,
    description: "Visit the Ngorongoro Crater, a UNESCO World Heritage Site.",
  },
];

const DetailsPage = () => {
  const params = useParams(); // Get the dynamic route parameters
  const id = params.id as string; // Extract the `id` parameter
  // Find the safari with the matching ID
  const safari = mockSafaris.find((s) => s.id === parseInt(id ));

  // If no safari is found, display an error message
  if (!safari) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-red-500 text-2xl">Safari not found!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{safari.name}</h1>
        <p className="text-gray-600 mb-2">Price: ${safari.price}</p>
        <p className="text-gray-600 mb-2">Duration: {safari.duration}</p>
        <p className="text-gray-600 mb-2">Rating: {safari.rating} ★</p>
        <p className="text-gray-700 mt-4">{safari.description}</p>
        <button className="mt-6 w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;