import Info1 from "./Info1";

import React, { useState } from 'react';

const SymptomChecker = () => {
  return (
    <>
    <div className="p-4  min-h-screen dark:text-gray-300 dark:bg-gray-900">
      <div className="p-4 flex-1">
        <h1 className="text-4xl font-bold mb-4">Symptom Suggester</h1>
        <p>Use this for a suggestion of your pet's problem and what you can do next.</p>
        <Info1 />
      </div>
    </div>
    </>
  );
};

export default SymptomChecker;
