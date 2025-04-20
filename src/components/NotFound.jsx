import React from "react";

const img =
  "https://tse4.mm.bing.net/th?id=OIP.lT3XhWmPG6G7scQs-vqFCwHaEk&pid=Api&P=0&h=180";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={img} alt="Not Found" className="w-1/2 h-auto mb-8" />
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600">Page Not Found</p>
    </div>
  );
};

export default NotFound;
