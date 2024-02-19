import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../../../components/DBInfo/BackButton';

const DisplayOneUser = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:1111/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4  min-h-screen">
      <h1 className="text-3xl text-bold my-4 text-center text-black ">User Information</h1>
      <div className="flex flex-col border-2 bg-emerald-200 border-emerald-300 rounded-xl w-[800px] p-4 mx-auto">
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>Object ID:</span>
            <span>{user._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>First Name: </span>
            <span>{user.firstname}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>Last Name:</span>
            <span>{user.lastname}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>Email Address:</span>
            <span>{user.email}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>Admin:</span>
            <span>{user.admin ? 'Yes' : 'No'}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>Time Created:</span>
            <span>{new Date(user.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>Last Updated:</span>
            <span>{new Date(user.updatedAt).toString()}</span>
          </div>
        </div>
      <br />
      <BackButton />
    </div>
  );
};

export default DisplayOneUser;