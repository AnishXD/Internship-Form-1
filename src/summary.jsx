import React from 'react';

const Summary = ({ formData }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-2xl w-full max-w-md mx-auto">
      <h2 className="font-medium font-sans my-4 text-4xl text-center mb-6">Form Summary</h2>
      <div className="space-y-4 flex flex-col items-start">
        <p className="text-lg">
          <strong className="text-gray-700">Name:</strong> {formData.name}
        </p>
        <p className="text-lg">
          <strong className="text-gray-700">Email:</strong> {formData.email}
        </p>
        <p className="text-lg">
          <strong className="text-gray-700">Age:</strong> {formData.age}
        </p>
        <p className="text-lg">
          <strong className="text-gray-700">Attending with Guest:</strong> {formData.attendingWithGuest ? 'Yes' : 'No'}
        </p>
        {formData.attendingWithGuest && (
          <p className="text-lg">
            <strong className="text-gray-700">Guest Name:</strong> {formData.guestName}
          </p>
        )}
      </div>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-400 focus:outline-none focus:bg-pink-400 transition duration-300 ease-in-out"
      >
        Register Another
      </button>
    </div>
  );
};

export default Summary;
