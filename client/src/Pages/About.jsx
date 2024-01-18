
const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-100">
      <div className="max-w-4xl p-8 border-emerald-600 border-3 rounded-md bg-white">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Vet Guardian provides tools for managing your pet's health. 
          Through suggesting potential health issues based on your pet's symptoms,
          you can seek professional help more effectively.
        </p>
        <p className="text-lg mb-4">
          Vet Guardian is a prototype animal healthcare platform and does not provide medical advice, diagnosis or treatment.
        </p>
        <p className="text-lg mb-4">
          Consult a registered veternarian immediately if your pet's condition is serious.
        </p>
        {/* Add more content here */}
      </div>
    </div>
  )
}

export default About