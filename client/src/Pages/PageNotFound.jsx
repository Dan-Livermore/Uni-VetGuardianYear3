import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Image from "../assets/PageNotFound.webp";

const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen pt-6 pb-6 bg-emerald-50 font-sans">
      <h1 className="font-bold text-center text-4xl">OH NO! PAGE NOT FOUND!</h1>
      <img src={Image} alt="Page Not Found" className="max-w-full h-auto max-h-96 mb-12 pd-0"/>
      <h1 className="font-bold text-center mb-4 mt-1/2">Sometimes it just be that way</h1>
      <Link to="/">
        <button type="submit" className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold text-2xl py-2 px-4 rounded-md mt-2">Return Home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
