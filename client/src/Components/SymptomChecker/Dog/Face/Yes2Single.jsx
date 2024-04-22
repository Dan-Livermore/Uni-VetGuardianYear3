import React, { useState } from "react";

function Yes2Single() {
  return (
    <>
      <div className="flex flex-col p-4 dark:text-gray-300">
        <p className="font-bold text-xl">Potential Symptom</p>
        <p className="text-lg">
          Possible abscess, allergic reaction, or injury. Observe closely.
        </p>
        <p className="text-lg">
          If accompanied by pain or heat: Likely infection or abscess. Consult a
          vet immediately.
        </p>
        <p className="text-lg">
          If no pain and not hot to the touch: Possible allergic reaction.
          Monitor for breathing difficulties and consult a vet if condition
          persists or worsens.
        </p>
      </div>
    </>
  );
};

export default Yes2Single;
