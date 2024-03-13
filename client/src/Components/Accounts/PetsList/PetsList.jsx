import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

// Icons for pets
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
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Gets pets and users from the database.
  useEffect(() => {
    setLoading(true);
    // Checks that the user is logged in and is allowed to access the data.
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const id = jwtDecode(token).userId;
        console.log(id);
        axios
          .get("http://localhost:1111/pets")
          .then((response) => {
            const filteredPets = response.data.data.filter(
              (pet) => pet.ownerID === id
            );
            setPets(filteredPets);
            axios.get(`http://localhost:1111/users`).then((userResponse) => {
              setUsers(userResponse.data.data);
              setLoading(false);
            });
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      } catch (error) {
        console.error("Error decoding token:", error);
        setLoading(false);
      }
    }
  }, []);

  // Combine the 2 collections for the data that will be displayed.
  const usersPets = pets.map((pet, index) => {
    const owner = users.find((user) => user._id === pet.ownerID);
    return {
      _id: pet._id,
      index: index + 1,
      name: pet.name,
      lastname: owner ? owner.lastname : "",
      animal: pet.animal,
      weight: pet.weight,
      gender: pet.gender,
      dob: pet.dob,
    };
  });

  return (
    <div className="shadow-xl p-8 mx-auto my-16 bg-white dark:bg-gray-900 dark:text-gray-300">
      <h1 className="text-3xl mb-6 font-bold text-center">Your Pets</h1>
      <ul>
        {/* If the user does not have any connected pets to their account display no pets */}
        {usersPets.length === 0 ? (
          <p className="text-md bg-grey-700 dark:bg-gray-300 text-center">
            You have no pets registered to this account.
          </p>
        ) : (
          //Else display all pets owned by the logged in user
          usersPets.map((pet, index) => (
            <li
              key={pet._id}
              className={`flex justify-between items-center mb-4 ${
                index !== 0 && "border-t pt-4"
              }`}
            >
              {/* Get the type of pet and display the corresponding icon */}
              {pet.animal === "Bug" ? (
                <FaBug size={40} />
              ) : pet.animal === "Cat" ? (
                <FaCat size={40} />
              ) : pet.animal === "Dog" ? (
                <FaDog size={40} />
              ) : pet.animal === "Dove" ? (
                <FaDove size={40} />
              ) : pet.animal === "Dragon" ? (
                <FaDragon size={40} />
              ) : pet.animal === "Elephant" ? (
                <FaEvernote size={40} />
              ) : pet.animal === "Frog" ? (
                <FaFrog size={40} />
              ) : pet.animal === "Hippo" ? (
                <FaHippo size={40} />
              ) : pet.animal === "Horse" ? (
                <FaHorseHead size={40} />
              ) : pet.animal === "Kiwi" ? (
                <FaKiwiBird size={40} />
              ) : pet.animal === "Penguin" ? (
                <FaLinux size={40} />
              ) : pet.animal === "Rabbit" ? (
                <GiRabbit size={40} />
              ) : pet.animal === "Spider" ? (
                <FaSpider size={40} />
              ) : pet.animal === "Snail" ? (
                <GiSnail size={40} />
              ) : (
                <FaMandalorian size={40} />
              )}
              <span>
                {pet.name} {pet.lastname}
              </span>
              {/* For each pet, buttons that lead to their details and records from the symptom suggester */}
              <div className="flex items-center">
                <Link to={`/pets/details/${pet._id}`}>
                  <button className="bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-700 dark:hover:bg-emerald-800 text-white dark:text-gray-300 px-4 py-2 rounded">
                    View Details
                  </button>
                </Link>
                <div className="border-r mx-1 h-6"/>
                <Link to={`/records/pet/${pet._id}`}>
                  <button className="bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-700 dark:hover:bg-emerald-800 text-white dark:text-gray-300 px-4 py-2 rounded">
                    Previous Records
                  </button>
                </Link>
                <div className="border-r mx-1 h-6"/>
                <Link to={`/pets/remove/${pet._id}`}>
                  <button className="bg-red-500 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800 text-white dark:text-gray-300 px-4 py-3 rounded">
                    <FaTrash />
                  </button>
                </Link>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default PetsList;