import React, {useState} from 'react'

const Yes4Lumps = () => {  return (
  <>
    <div className="flex flex-col p-4 dark:text-gray-300">
      <p className="font-bold text-xl">Potential Symptom</p>
      <p className="text-lg">
      Yes: Could be an abscess, cyst, or other growth.
                 Soft and Painful: Likely an abscess or infection. Veterinary care needed promptly.
                Hard and Not Painful: Monitor the lump. If it grows or changes, or if the dog seems affected, seek veterinary care.
      </p>
    </div>
  </>
);
};

export default Yes4Lumps
