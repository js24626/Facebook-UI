import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">Contact Facebook</h1>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          If you have any questions or need support, you can reach out to us in the following ways:
        </p>

        <div className="space-y-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12l-2-2m0 0l-2 2m2-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-4m0 4l2-2m0 0l-2 2" />
            </svg>
            <p className="ml-4 text-lg text-gray-700">Email: support@facebook.com</p>
          </div>

          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.586-7.586a2 2 0 012.828 0L21 8m-2.121 2.121a9 9 0 01-12.727 0A9 9 0 0111 4a9 9 0 019 9 9 9 0 01-9 9" />
            </svg>
            <p className="ml-4 text-lg text-gray-700">Phone: (800) 123-4567</p>
          </div>

          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.586-7.586a2 2 0 012.828 0L21 8m-2.121 2.121a9 9 0 01-12.727 0A9 9 0 0111 4a9 9 0 019 9 9 9 0 01-9 9" />
            </svg>
            <p className="ml-4 text-lg text-gray-700">Visit our support page: </p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Page;
