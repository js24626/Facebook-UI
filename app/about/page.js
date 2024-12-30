import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">About Facebook</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Facebook is a social media platform that connects people, enabling them to share updates, photos, videos, and interact with others in their social circles. With over 2.8 billion monthly active users, Facebook offers a wide range of features such as news feeds, groups, events, and instant messaging. It helps individuals, communities, businesses, and organizations stay connected and informed.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Founded by Mark Zuckerberg in 2004, Facebook has grown from a university project to one of the largest and most influential tech companies in the world. It plays a central role in modern communication, social networking, and online marketing.
        </p>
        <div className="text-center mt-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            Visit Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
