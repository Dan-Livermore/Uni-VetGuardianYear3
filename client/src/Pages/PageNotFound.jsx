import Image from "../assets/PageNotFound.webp";

const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <h1 className="font-bold text-center text-4xl mb-12 mt-1/2">OH NO! PAGE NOT FOUND!!!!!!</h1>
      <img src={Image} alt="Page Not Found" className="max-w-full h-auto max-h-96 mb-12"/>
      <h1 className="font-bold text-center mb-12 mt-1/2">Sometimes it just be that way</h1>
    </div>
  );
};

export default PageNotFound;
