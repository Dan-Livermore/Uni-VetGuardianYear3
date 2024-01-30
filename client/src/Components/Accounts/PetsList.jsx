import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

import { FaBug } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { FaDove } from "react-icons/fa";
import { FaDragon } from "react-icons/fa";
import { FaEvernote } from "react-icons/fa";
import { FaFrog } from "react-icons/fa";
import { FaHippo } from "react-icons/fa";
import { FaHorseHead } from "react-icons/fa";
import { FaKiwiBird } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaMandalorian } from "react-icons/fa";
import { GiRabbit } from "react-icons/gi";
import { GiSnail } from "react-icons/gi";
import { FaSpider } from "react-icons/fa";

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
          <li
            key={pet._id}
            className={`flex justify-between items-center mb-4 ${
              index !== 0 && "border-t pt-4"
            }`}
          >
            {pet.animal === "Bug" ? <FaBug size={40} /> :
             pet.animal === "Cat" ? <FaCat size={40} /> :
             pet.animal === "Dog" ? <FaDog size={40} /> :
             pet.animal === "Dove" ? <FaDove size={40} /> :
             pet.animal === "Dragon" ? <FaDragon size={40} /> :
             pet.animal === "Elephant" ? <FaEvernote size={40} /> :
             pet.animal === "Frog" ? <FaFrog size={40} /> :
             pet.animal === "Hippo" ? <FaHippo size={40} /> :
             pet.animal === "Horse" ? <FaHorseHead size={40} /> :
             pet.animal === "Kiwi" ? <FaKiwiBird size={40} /> :
             pet.animal === "Penguin" ? <FaLinux size={40} /> :
             pet.animal === "Rabbit" ? <GiRabbit size={40} /> :
             pet.animal === "Spider" ? <FaSpider size={40} /> :
             pet.animal === "Snail" ? <GiSnail size={40} /> :
             <FaMandalorian size={40} />}
            <span>{pet.name}</span>
            <div className="flex items-center">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded">
                View Details
              </button>
              <div className="border-r mx-1 h-6" />
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded">
                Previous Records
              </button>
              <div className="border-r mx-1 h-6" />
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" alt="Delete Pet">
                <FaTrash/>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetsList;
