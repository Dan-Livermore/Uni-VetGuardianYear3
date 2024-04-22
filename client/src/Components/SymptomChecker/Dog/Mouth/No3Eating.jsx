import React, { useState } from "react";

function No3Eating() {
  return (
    <>
      <div className="flex flex-col p-4 dark:text-gray-300">
        <p className="font-bold text-xl">Potential Symptom</p>
        <p className="text-lg">
          If drooling excessively without pain, check for foreign objects or
          signs of nausea.
        </p>
        <p className="text-lg">
          Foreign Object Found: Remove if easily accessible or see a vet if
          removal is risky or impossible.
        </p>
        <p className="text-lg">
          No Foreign Object: If excessive drooling continues, consult a vet as
          it could indicate toxicity or neurological issues.
        </p>
      </div>
    </>
  );
}

export default No3Eating;
