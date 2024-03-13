import Image from "../assets/PageNotFound.webp";
import ReturnHomeButton from "../components/PageNotFound/ReturnHomeButton";

const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen pt-6 pb-6  font-sans dark:bg-gray-900">
      <h1 className="font-bold text-center text-4xl dark:text-gray-300">OH NO! PAGE NOT FOUND!</h1>
      <img src={Image} alt="Page Not Found" className="max-w-full h-auto max-h-96 mb-12 pd-0"/>
      <h1 className="font-bold text-center mb-4 mt-1/2 dark:text-gray-300">Sometimes it just be that way</h1>
      <ReturnHomeButton/>
    </div>
  );
};

export default PageNotFound;
