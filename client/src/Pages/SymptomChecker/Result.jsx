import React, { useState } from 'react';

const Result = () => {
  return (
    <>
    <div className="p-4 bg-emerald-50 h-screen min-h-screen">
      <div className="p-4 flex-1">
        <h1 className="p-2 text-4xl font-bold mb-4">Illness Prediction</h1>
        <p className='p-2 text-xl'> You're pet might have: <b>ADD ISSUE</b>.</p>
        <h2 className="p-2 text-xl font-bold mb-4">Should your pet's condition deteriorate within the next 24 to 48 hours, 
          we highly recommend contacting your veterinary clinic for immediate assistance.</h2>
      </div>
    </div>
    </>
  );
};

export default Result