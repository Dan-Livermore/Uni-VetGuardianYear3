const Home = () => {
  return (
    <>
    <div className=" min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
        <p className="text-lg mb-4 dark:text-gray-300">
          Vet Guardian provides tools for managing your pet's health. 
          Through suggesting potential health issues based on your pet's symptoms,
          you can seek professional help more effectively.
        </p>
        <p className="text-lg mb-4 dark:text-gray-300">
          Vet Guardian is a prototype animal healthcare platform and does not provide medical advice, diagnosis or treatment.
        </p>
        <p className="text-lg mb-4 dark:text-gray-300">
          Consult a registered veternarian immediately if your pet's condition is serious.
        </p>
      </div>
    </div></>
  );
};

export default Home