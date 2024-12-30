import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center">
      {/* Main content */}
      <div className="text-center p-6">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">
          facebook
        </h1>
        <p className="text-2xl font-semibold text-gray-700 mb-6">
        Facebook helps you connect and share with the people in your life.
        </p>
        
        {/* Buttons for Sign In and Sign Up */}
        <div className="space-x-4">
          <Link href="/in">
            <h1>
              <button className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
                Sign In
              </button>
            </h1>
          </Link>
          <Link href="/up">
            <h1>
              <button className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
                Sign Up
              </button>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
