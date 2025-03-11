import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';


const Safari = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <section className="relative w-full h-[500px] flex items-center justify-center bg-gradient-to-r from-green-400 to-yellow-400 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Book Your Dream Safari</h1>
          <p className="text-lg mt-2">Explore breathtaking landscapes and wildlife adventures.</p>
          <Link href="/book-safari-form" className="mt-4 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">Get Started</Link>
        </div>
      </section>
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Expert Guides</h3>
            <p className="mt-2">Our experienced guides ensure a safe and unforgettable adventure.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Luxurious Rides</h3>
            <p className="mt-2">Comfortable and well-equipped vehicles for a smooth experience.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Affordable Packages</h3>
            <p className="mt-2">Enjoy the best safari experience at competitive rates.</p>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white text-center py-4 mt-8">
        <p>&copy; 2025 Safari & Ride. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Safari;
