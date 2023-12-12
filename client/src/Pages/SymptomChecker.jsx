import Info1 from "./SymptomChecker/Info1";

import React, { useState } from 'react';

const SymptomChecker = () => {
  return (
    <>
    <div className="p-4 bg-purple-100 h-screen min-h-screen">
      <div className="p-4 flex-1">
        <h1 className="text-4xl font-bold mb-4">Symptom Suggester</h1>
        <p>Complete the following questions for a suggestion of your pet's problem.</p>

        <Info1 />
      </div>
    </div>
    </>
  );
};

export default SymptomChecker;
