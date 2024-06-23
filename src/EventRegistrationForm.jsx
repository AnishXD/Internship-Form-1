// EventRegistrationForm.jsx

import React, { useState } from 'react';
import useForm from './useForm';
import useValidation from './useValidation';
import Summary from './summary'; // Ensure to import Summary correctly with proper casing

const EventRegistrationForm = () => {
  const [formData, handleChange] = useForm({
    name: '',
    email: '',
    age: '',
    attendingWithGuest: false,
    guestName: ''
  });

  const [errors, validate] = useValidation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(formData)) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return <Summary formData={formData} />;
  }

  return (
    <div className="bg-white flex flex-col p-6 shadow-lg rounded-2xl h-full">
      <h1 className='font-medium font-sans my-4 text-4xl text-center'>Event Registration Form</h1>
      <form onSubmit={handleSubmit} className="my-4 space-y-6">
        <div className="flex items-start space-x-4">
          <label htmlFor="name" className="text-lg font-medium text-gray-700 w-32">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition duration-200 ease-in-out"
          />
          {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
        </div>
        <div className="flex items-start space-x-4">
          <label htmlFor="email" className="text-lg font-medium text-gray-700 w-32">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition duration-200 ease-in-out"
          />
          {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
        </div>
        <div className="flex items-start space-x-4">
          <label htmlFor="age" className="text-lg font-medium text-gray-700 w-32">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition duration-200 ease-in-out"
          />
          {errors.age && <span className="text-red-500 text-xs">{errors.age}</span>}
        </div>
        <div className="flex items-start">
          <input
            type="checkbox"
            id="attendingWithGuest"
            name="attendingWithGuest"
            checked={formData.attendingWithGuest}
            onChange={handleChange}
            className="form-checkbox h-4 w-4 transition duration-150 ease-in-out mt-1"
          />
          <label htmlFor="attendingWithGuest" className="ml-2 text-lg text-gray-700">Are you attending with a guest?</label>
        </div>
        {formData.attendingWithGuest && (
          <div className="flex items-start space-x-4">
            <label htmlFor="guestName" className="text-lg font-medium text-gray-700 w-32">Guest Name:</label>
            <input
              type="text"
              id="guestName"
              name="guestName"
              value={formData.guestName}
              onChange={handleChange}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition duration-200 ease-in-out"
            />
            {errors.guestName && <span className="text-red-500 text-xs">{errors.guestName}</span>}
          </div>
        )}
        <button type="submit" className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-400 focus:outline-none focus:bg-pink-400 transition duration-300 ease-in-out">Submit</button>
      </form>
    </div>
  );
};

export default EventRegistrationForm;
