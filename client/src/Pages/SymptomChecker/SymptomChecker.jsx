import AnimalSelector from "./AnimalSelector";

import React, { useState } from 'react';

const SymptomChecker = () => {
  return (
    <>
    <div className="p-4  min-h-screen dark:text-gray-300 dark:bg-gray-900">
      <div className="p-4 flex-1">
        <p className="text-xl font-bold text-red-500 dark:text-red-700">THIS SYMPTOM CHECKER IS A PROTOTYPE AND MIGHT NOT BE COMPLETELY ACCURATE.</p>
        <p className="text-xl font-bold text-red-500 dark:text-red-700">IF YOU HAVE SERIOUS CONCERNS, CONTACT A VETERINARY PROFESSIONAL.</p>
        <br/>
        <h1 className="text-4xl font-bold mb-4">Symptom Suggester</h1>
        <p>Use this for a suggestion of your pet's problem and what you can do next.</p>
        <AnimalSelector />
      </div>
    </div>
    </>
  );
};

export default SymptomChecker;
