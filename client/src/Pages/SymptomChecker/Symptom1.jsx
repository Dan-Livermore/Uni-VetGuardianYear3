
import React, { useState } from 'react';

import Symptom2 from "./Symptom2";

import SymptomDropdown from "../../Components/SymptomDropdown";

const Symptom1 = () => {
  return (
    <div className='p-4 pt-12 flex-1'>
      <p>Select your pet's symptom from the list:</p>
      <SymptomDropdown />
      </div>
  )
}

export default Symptom1