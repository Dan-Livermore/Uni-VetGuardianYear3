import React, { useState } from 'react';

function Yes2Red() {
    return (
        <div className="flex flex-col items-center py-4 dark:text-gray-300">
          <p className="text-center">This could indicate an infection or irritation. Check for odor or discharge.
             Odor/Discharge Present: Likely an ear infection. Consult a vet promptly.
            No Odor/Discharge: Might be irritation or allergies. Monitor and if it persists, see a vet.</p>
        </div>
    );
}

export default Yes2Red;