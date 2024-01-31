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
            setPets(response);
            axios.get(`http://localhost:1111/users`).then((response) => {
              setUsers(response);
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

  return (
    <div className="p-4 bg-emerald-50 min-h-screen">
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
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">No.</th>
                <th className="border border-slate-600 rounded-md">Pet Name</th>
                {/* <th className="border border-slate-600 rounded-md max-md:hidden">Owner's Name</th> */}
                <th className="border border-slate-600 rounded-md max-md:hidden">Animal</th>
                <th className="border border-slate-600 rounded-md max-md:hidden">Weight</th>
                <th className="border border-slate-600 rounded-md max-md:hidden">Gender</th>
                <th className="border border-slate-600 rounded-md max-md:hidden">Date of Birth</th>
                {/* <th className="border border-slate-600 rounded-md max-md:hidden">Health Records</th> */}
                <th className="border border-slate-600 rounded-md">Options</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pet, index) => (
                <tr key={pet._id} className="h-8">
                  <td className="border border-slate-700 rounded-md text-center">
                    {index + 1}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {pet.name}
                  </td>
                  {/* <td className="border border-slate-700 rounded-md text-center">
                    {user.firstname + " " + user.lastname}
                  </td> */}
                  <td className="border border-slate-700 rounded-md text-center">
                    {pet.animal}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                  {pet.weight}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                  {pet.gender}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                  {pet.dob}
                  </td>
                  {/* <td className="border border-slate-700 rounded-md text-center">
                  {user.records}
                  </td> */}

                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">
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
