import SymptomDropdown from "../Components/SymptomDropdown";

const SymptomChecker = () => {
  return (
    <>
      <div>
        <h1>Symptom Suggester</h1>
        <p>Complete the following questions for a suggestion of your pet's problem.</p>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <p>Dog</p>
          </div>
          <div>
            <p>Cat</p>
          </div>
          <div>
            <p>Other</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>Age</p>
          </div>
          <div>
            <p>Weight</p>
          </div>
        </div>

        <SymptomDropdown/>

      </div>
    </>
  );
};

export default SymptomChecker;
