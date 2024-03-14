import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../../../components/DBInfo/BackButton';

const DisplayOnePet = () => {
  const [pet, setPet] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    // Get the pet with the given id.
    setLoading(true);
        axios
          .get(`http://localhost:1111/pets/${id}`)
          .then((response) => {
            setPet(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
          console.log(pet);
  }, []);

  // const formattedPets = pets.map((pet, index) => {
  //   const owner = users.find((user) => user._id === pet.ownerID);
  //   const formattedDate = formatDate(pet.dob);
  
  //   return {
  //     _id: pet._id,
  //     index: index + 1,
  //     name: pet ? pet.name: "Unknown Name",
  //     ownerFname: owner ? owner.firstname : "Unknown Owner",
  //     ownerLname: owner ? owner.lastname : "Unknown Owner",
  //     animal: pet ? pet.animal: "Unknown Animal",
  //     weight: pet ? pet.weight: "Unknown Weight",
  //     gender: pet ? pet.gender: "Unknown Gender",
  //     dob: formattedDate,
  //   };
  // });

  // function formatDate(dateString) {
  //   const date = new Date(dateString);
  //   const day = String(date.getDate()).padStart(2, "0");
  //   const month = String(date.getMonth() + 1).padStart(2, "0");
  //   const year = date.getFullYear();
    
  //   return `${day}/${month}/${year}`;
  // }

  return (
    // Display the information of the pet.
    <div className="p-4  min-h-screen dark:bg-gray-900">
      <h1 className="text-3xl text-bold my-4 text-center text-black dark:text-gray-300">Pet Information</h1>
      <div className="flex flex-col border-2 bg-emerald-200 border-emerald-300 rounded-xl w-[800px] p-4 mx-auto">
          <div>
            {/* <div className='my-4'>
              <span className='text-xl mr-4 font-bold text-black'>Object ID:</span>
              <span>{pet._id}</span>
            </div> */}
            <div className='my-4'>
              <span className='text-xl mr-4 font-bold text-black'>Pet's Name: </span>
              <span>{pet.name}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 font-bold text-black'>Owner's Name:</span>
              <span>{pet.ownerID}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 font-bold text-black'>Animal:</span>
              <span>{pet.animal}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 font-bold text-black'>Weight:</span>
              <span>{pet.weight}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 font-bold text-black'>Gender:</span>
              <span>{pet.gender}</span>
            </div>
            {/* Convert the dates into strings */}
            <div className='my-4'>
              <span className='text-xl mr-4 font-bold text-black'>Date of Birth:</span>
              <span>{new Date(pet.dob).toString()}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 font-bold text-black'>Time Created:</span>
              <span>{new Date(pet.createdAt).toString()}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 font-bold text-black'>Last Updated:</span>
              <span>{new Date(pet.updatedAt).toString()}</span>
            </div>
          </div>
        </div>
      <br />
      <BackButton />
    </div>
  );
};

export default DisplayOnePet