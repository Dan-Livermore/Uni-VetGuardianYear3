import React, { useState } from "react";

function Yes2Red() {
  return (
    <>
      <div className="flex flex-col p-4 dark:text-gray-300">
        <p className="font-bold text-xl">Potential Symptom</p>
        <p className="text-lg">
          This could indicate an infection or irritation. Check for odor or
          discharge.
        </p>
        <p className="text-lg">
          Odor/Discharge Present: Likely an ear infection. Consult a vet
          promptly.
        </p>
        <p className="text-lg">
          No Odor/Discharge: Might be irritation or allergies. Monitor and if it
          persists, see a vet.
        </p>
      </div>
    </>
  );
}

export default Yes2Red;
