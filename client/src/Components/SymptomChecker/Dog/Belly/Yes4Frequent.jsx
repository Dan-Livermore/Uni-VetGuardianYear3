import React, { useState } from 'react';

function Yes4Frequent() {
  return (
    <>
      <div className="flex flex-col p-4 dark:text-gray-300">
        <p className="font-bold text-xl">Potential Symptom</p>
        <p className="text-lg">
          This indicates a potentially serious condition. Consult a vet immediately.
        </p>
      </div>
    </>
  );
};

export default Yes4Frequent;