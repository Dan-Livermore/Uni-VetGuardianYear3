
import React, { useState } from 'react';

import Symptom2 from "./Symptom2";

import SymptomDropdown from "../../components/SymptomDropdown";

const Symptom1 = () => {
  return (
    <div className='py-4 pr-4 pb-4 flex-1 w-1/3'>
      <p>Select your pet's main symptom from the list:</p>
      <SymptomDropdown />
      </div>
  )
}

export default Symptom1