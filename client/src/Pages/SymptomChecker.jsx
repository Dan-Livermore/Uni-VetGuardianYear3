import SymptomDropdown from "../Components/SymptomDropdown";
import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { GiRabbit } from "react-icons/gi";

const SymptomChecker = () => {
  return (
    <>
    <div className="p-4 bg-purple-100 h-screen min-h-screen">
      <div className="p-4 flex-1">
        <h1 className="text-4xl font-bold mb-4">Symptom Suggester</h1>
        <p>Complete the following questions for a suggestion of your pet's problem.</p>
        <div className="grid grid-cols-3 gap-2 items-center justify-center">
          <div className="flex justify-center">
            <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold text-2xl py-6 px-8 rounded-md mt-2 flex flex-col items-center justify-center w-48 h-48">
              Dog
              <span className="mt-2"><FaDog size={40} /></span>
            </button>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold text-2xl py-6 px-8 rounded-md mt-2 flex flex-col items-center justify-center w-48 h-48">
              Cat
              <span className="mt-2"><FaCat size={40} /></span>
            </button>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold text-2xl py-6 px-8 rounded-md mt-2 flex flex-col items-center justify-center w-48 h-48">
              Other
              <span className="mt-2"><GiRabbit size={40} /></span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold text-2xl py-4 px-4 rounded-md mt-2"
            >
              Age
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold text-2xl py-4 px-4 rounded-md mt-2"
            >
              Weight
            </button>
          </div>
        </div>

        <SymptomDropdown />
      </div>
      </div>
    </>
  );
};

export default SymptomChecker;
