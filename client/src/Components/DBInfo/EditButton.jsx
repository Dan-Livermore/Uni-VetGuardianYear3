import React from 'react';
import { useNavigate } from 'react-router-dom';

const EditButton = () => { 
    let navigate = useNavigate();
    return (
        <>
          <button className='bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 rounded-lg h-10 w-40' onClick={() => navigate("/account/pets/edit/:id")}>Edit Pet</button>
        </>
    );
};

export default EditButton;