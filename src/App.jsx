import React from 'react';
import './App.css';

import EventRegistrationForm from './EventRegistrationForm';

const App = () => {
  return (
    <div className='flex items-center justify-center h-[90vh]'>
      <div >
        <div className='flex justify-center items-center'>
          <EventRegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default App;
