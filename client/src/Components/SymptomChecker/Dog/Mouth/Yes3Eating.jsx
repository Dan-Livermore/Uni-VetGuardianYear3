import React, { useState } from 'react';

function Yes3Eating() {
  return (
    <>
      <div className="flex flex-col p-4 dark:text-gray-300">
        <p className="font-bold text-xl">Potential Symptom</p>
        <p className="text-lg">
        Possible tooth decay, broken teeth, or oral injury. Check for visible signs of injury or swelling.
        </p>
        <p className="text-lg">
        Visible Injury: Consult a vet immediately for possible treatment or extraction.
        </p>
        <p className="text-lg">
        No Visible Injury: Pain may be from deeper in the mouth or throat. See a vet for a thorough examination.
        </p>
      </div>
    </>
  );
};

export default Yes3Eating;
