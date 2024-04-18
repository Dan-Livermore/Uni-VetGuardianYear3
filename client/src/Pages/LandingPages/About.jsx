import ReactLogo from "../../assets/LandingPages/React.PNG";
import TailwindLogo from "../../assets/LandingPages/TailwindCSS.PNG";
import NodeLogo from "../../assets/LandingPages/Node.PNG";
import MongoLogo from "../../assets/LandingPages/Mongo.PNG";
import YoloLogo from "../../assets/LandingPages/Yolo.PNG";
import PythonLogo from "../../assets/LandingPages/Python.PNG";

const About = () => {
  return (
    <div className=" flex items-center justify-center min-h-screen dark:bg-gray-900">
      <div className="max-w-4xl p-8 border-3 rounded-md bg-white dark:bg-gray-900 dark:text-gray-300">
        <h1 className="text-3xl font-bold mb-4 dark:gray-300 text-center">
          About Vet Guardian
        </h1>
        <p className="text-lg mb-4 dark:gray-300">
        Vet Guardian is a pet health tracker platform, featuring a self-diagnosis tool to help assist users in managing their pet’s health. Through the symptom checker, users can input their pet’s symptoms and receive information about their pet’s predicted problem. 
        </p>
        <p className="text-lg mb-4 dark:gray-300">
        Veterinary practices are constantly under high pressure due to the high volume of business from pet owners and emergencies. Therefore, Vet Guardian aims to reduce some of the stress from the vital role veterinary staff play, by creating a quick and convenient solution to limit the amount of unnecessary and costly emergency visits to the vets.
        </p>
        <br/>
        <p className="text-lg mb-4 dark:gray-300">
          This application is built using the following technologies:
        </p>
        <ul className="list-disc list-inside dark:gray-300">
          <li className="text-lg mb-4">
            React is used for the interactive front-end application.
          </li>
          <li className="text-lg mb-4">
            Tailwind CSS is used to style the React app and incorporate a
            togglable dark theme.
          </li>
          <li className="text-lg mb-4">
            Express.js and Node.js act as the server for the application,
            allowing interaction with MongoDB.
          </li>
          <li className="text-lg mb-4">
            MongoDB is used for storing the accounts and pets' data.
          </li>
          <li className="text-lg mb-4">
            The YOLOV8 library was used to train and build the AI image
            classification model.
          </li>
          <li className="text-lg mb-4">
            Python Flask is used to host the image classification model.
          </li>
        </ul>
        <div className="flex flex-row items-center justify-center space-x-4">
          <img src={ReactLogo} alt="React Logo" className="h-24" />
          <img src={TailwindLogo} alt="Tailwind Logo" className="h-24" />
          <img src={NodeLogo} alt="Node Logo" className="h-24" />
          <img src={MongoLogo} alt="Mongo Logo" className="h-24" />
          <img src={YoloLogo} alt="Yolo Logo" className="h-24" />
          <img src={PythonLogo} alt="Python Logo" className="h-24" />
        </div>
      </div>
    </div>
  );
};

export default About;
