import Link from "next/link";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center relative">
      {/* header */}
      <Header />

      {/* Hero Section */}
      <section className="w-full text-center py-20 text-white relative overflow-hidden bg-gradient-to-r from-green-400 to-yellow-400">
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Safari & Ride Services</h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Seamlessly create rides, book safaris, and manage services with our
            intuitive platform.
          </p>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-16 max-w-5xl text-center">
        <h2 className="text-3xl font-bold">Get Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <Link href="/create-ride">
            <div className="p-6 shadow-md rounded-lg border cursor-pointer hover:bg-gray-100">
              <h3 className="text-xl font-semibold">Create a Ride</h3>
              <p className="mt-2 text-gray-600">
                Set up and manage ride services effortlessly.
              </p>
            </div>
          </Link>
          <Link href="/book-safari">
            <div className="p-6 shadow-md rounded-lg border cursor-pointer hover:bg-gray-100">
              <h3 className="text-xl font-semibold">Book a Safari</h3>
              <p className="mt-2 text-gray-600">
                Explore and book exciting safari experiences.
              </p>
            </div>
          </Link>
          <Link href="/admin">
            <div className="p-6 shadow-md rounded-lg border cursor-pointer hover:bg-gray-100">
              <h3 className="text-xl font-semibold">Admin Panel</h3>
              <p className="mt-2 text-gray-600">
                Manage the website, users, and services.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white w-full text-center">
        <p>
          &copy; {new Date().getFullYear()} Safari & Ride Services. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
