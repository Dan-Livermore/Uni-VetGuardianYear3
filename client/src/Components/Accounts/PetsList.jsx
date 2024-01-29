import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PetsList = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:1111/pets")
      .then((response) => {
        setPets(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="shadow-xl p-8 mx-auto my-16 bg-white">
      <h1 className="text-3xl mb-6 font-bold">Your Pets</h1>
      <ul>
        {pets.map((pet, index) => (
          <li key={pet._id} className={`flex justify-between items-center mb-4 ${index !== 0 && 'border-t pt-4'}`}>
            <span>{pet.name}</span>
            <div className="flex items-center">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded">View Details</button>
              <div className="border-r mx-1 h-6"/>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded">Previous Records</button>
              <div className="border-r mx-1 h-6"/>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Remove Pet</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetsList;
