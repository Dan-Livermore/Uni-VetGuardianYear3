import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Image from "../assets/PageNotFound.webp";

const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen p-4 bg-purple-100 font-sans">
      <h1 className="font-bold text-center text-4xl mb-12 mt-1/2">OH NO! PAGE NOT FOUND!!!!!!</h1>
      <img src={Image} alt="Page Not Found" className="max-w-full h-auto max-h-96 mb-12 pd-0"/>
      <h1 className="font-bold text-center mb-12 mt-1/2">Sometimes it just be that way</h1>
      <br />
      <Link to="/">
        <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md mt-2">Return Home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
