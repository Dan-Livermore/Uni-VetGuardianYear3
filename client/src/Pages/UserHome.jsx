import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const UserHome = () => {
  return (
  <>
  <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 bg-purple-100">
  <div className="bg-white shadow-md rounded-md p-6 max-w-md w-full mt-1 md:mt-0">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Your Account
          </h2>

          <Link to="/symptom-checker">
          <button type="submit"
            className="flex-1 bg-purple-500 hover:bg-purple-700 text-white font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-full">
            Symptom Checker
          </button>
          </Link>
          <Link to="/image-classifier">
          <button type="submit"
            className="flex-1 bg-purple-500 hover:bg-purple-700 text-white font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-full">
            Pet Identifier
          </button>
          </Link>

        </div>
        </div>
        </div>
        </>
  )
}

export default UserHome