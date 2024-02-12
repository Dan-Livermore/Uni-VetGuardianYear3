import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const DisplayPets = () => {
  const [pets, setPets] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const id = jwtDecode(token).userId;
        axios
          .get("http://localhost:1111/pets")
          .then((response) => {
            setPets(response.data.data);
            axios.get(`http://localhost:1111/users`).then((response) => {
              setUsers(response.data.data);
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

  const formattedPets = pets.map((pet, index) => {
    const owner = users.find((user) => user._id === pet.ownerID);
    const formattedDate = formatDate(pet.dob);
  
    return {
      _id: pet._id,
      index: index + 1,
      name: pet ? pet.name: "Unknown Name",
      ownerFname: owner ? owner.firstname : "Unknown Owner",
      ownerLname: owner ? owner.lastname : "Unknown Owner",
      animal: pet ? pet.animal: "Unknown Animal",
      weight: pet ? pet.weight: "Unknown Weight",
      gender: pet ? pet.gender: "Unknown Gender",
      dob: formattedDate,
    };
  });

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
  }

  return (
    <div className="p-4  min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold my-8">List of All Pets</h1>
        <Link to="/admin/pets/create">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg w-40 h-10 4xl">
            Add New Pet
          </button>
        </Link>
      </div>
      <>
        {pets.length === 0 ? (
          <p>No pet data in the database.</p>
        ) : (
          <table className="w-full border-spacing-2 bg-white">
            <thead className="bg-emerald-500 text-white">
              <tr>
                <th className="border border-slate-600">No.</th>
                <th className="border border-slate-600">Pet Name</th>
                <th className="border border-slate-600  max-md:hidden">
                  Owner's Name
                </th>
                <th className="border border-slate-600 max-md:hidden">
                  Animal
                </th>
                <th className="border border-slate-600 max-md:hidden">
                  Weight (kg)
                </th>
                <th className="border border-slate-600 max-md:hidden">
                  Gender
                </th>
                <th className="border border-slate-600 max-md:hidden">
                  Date of Birth
                </th>
                {/* <th className="border border-slate-600 max-md:hidden">Health Records</th> */}
                <th className="border border-slate-600">Options</th>
              </tr>
            </thead>
            <tbody>
              {formattedPets.map((pet, index) => (
                <tr key={pet._id} className="h-8">
                  <td className="border border-slate-700 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-slate-700 text-center">
                    {pet.name + " " + pet.ownerLname}
                  </td>
                  <td className="border border-slate-700 text-center max-md:hidden">
                    {pet.ownerFname + " " + pet.ownerLname}
                  </td>
                  <td className="border border-slate-700 text-center max-md:hidden">
                    {pet.animal}
                  </td>
                  <td className="border border-slate-700 text-center max-md:hidden">
                    {pet.weight}
                  </td>
                  <td className="border border-slate-700 text-center max-md:hidden">
                    {pet.gender}
                  </td>
                  <td className="border border-slate-700 text-center max-md:hidden">
                    {pet.dob}
                  </td>
                  {/* <td className="border border-slate-700 text-center max-md:hidden">
                  {user.records}
                  </td> */}

                  <td className="border border-slate-700 text-center">
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/admin/pets/read/${pet._id}`}>
                        <BsInfoCircle className="text-2xl text-green-800" />
                      </Link>
                      <Link to={`/admin/pets/edit/${pet._id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-600" />
                      </Link>
                      <Link to={`/admin/pets/delete/${pet._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-600" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>
    </div>
  );
};

export default DisplayPets;
