import React, { useState } from "react";

function Yes2Tight() {
  return (
    <>
      <div className="flex flex-col p-4 dark:text-gray-300">
        <p className="font-bold text-xl">Potential Symptom</p>
        <p className="text-lg">
          Diarrhea: If persistent or bloody, see a vet immediately. If mild, monitor hydration and diet, consider a bland diet.
        </p>
        <p className="text-lg">
          Constipation: Ensure adequate hydration and exercise. If no improvement in 24-48 hours, consult a vet.
        </p>
      </div>
    </>
  );
}

export default Yes2Tight;
