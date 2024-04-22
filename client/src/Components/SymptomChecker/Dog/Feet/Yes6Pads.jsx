import React, { useState } from "react";

function Yes6Pads() {
  return (
    <>
      <div className="flex flex-col p-4 dark:text-gray-300">
        <p className="font-bold text-xl">Potential Symptoms</p>
        <p className="text-lg">
          Cracked Pads: Can be due to dryness or environmental factors. Moisturize pads, avoid harsh surfaces, and monitor. If cracks are deep or bleeding, consult a vet.
        </p>
        <p className="text-lg">
          Growths: Any new growth should be checked by a vet to rule out warts, cysts, or tumors.
        </p>
        <p className="text-lg">
          <p className="text-lg">
            No Cracked Pads or Growths: If general discoloration or other changes are noted without other symptoms, continue to monitor.
          </p>
        </p>
      </div>
    </>
  );
}

export default Yes6Pads;
