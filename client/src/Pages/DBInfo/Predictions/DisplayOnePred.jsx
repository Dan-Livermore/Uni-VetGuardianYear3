import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../../../components/DBInfo/BackButton';

const DisplayOnePred = () => {
  const [prediction, setPrediction] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:1111/predictions/${id}`)
      .then((response) => {
        setPrediction(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4  min-h-screen dark:bg-gray-900">
      <h1 className="text-3xl text-bold my-4 text-center text-black dark:text-gray-300">Prediction Information</h1>
      <div className="flex flex-col border-2 bg-emerald-200 border-emerald-300 rounded-xl w-[800px] p-4 mx-auto">
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>Object ID:</span>
            <span>{prediction._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>Pet ID: </span>
            <span>{prediction.petID}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>Time:</span>
            <span>{new Date(prediction.time).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>Output:</span>
            <span>{prediction.Output}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>Time Created:</span>
            <span>{new Date(prediction.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>Last Updated:</span>
            <span>{new Date(prediction.updatedAt).toString()}</span>
          </div>
        </div>
      <br />
      <BackButton />
    </div>
  );
};

export default DisplayOnePred;