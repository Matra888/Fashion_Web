import React, { useState } from "react";
import BodyTypeCalc from "./BodyTypeCalc"; // Import the BodyTypeCalc function

const BodyTypeForm = () => {
  const [unit, setUnit] = useState("inches");
  const [result, setResult] = useState(""); // State to store the result

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "inches" ? "centimeters" : "inches"));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const shoulder = parseFloat(document.getElementById("shoulder").value);
    const bust = parseFloat(document.getElementById("bust").value);
    const waist = parseFloat(document.getElementById("waist").value);
    const hips = parseFloat(document.getElementById("hips").value);

    const calculatedBodyType = BodyTypeCalc(shoulder, bust, waist, hips);
    setResult(`Body Type: ${calculatedBodyType}`);
  };

  return (
    <main className="container-fluid d-flex flex-column bg-dark vh-100">
      <form
        id="bodyShapeForm"
        className="container-fluid d-flex flex-column justify-content-center text-center p-5 mt-2"
        onSubmit={handleSubmit} // Add the handleSubmit function here
      >
        {/* ... (rest of your form fields) */}

        {/* FORM SUBMIT BUTTON */}
        <button
          type="submit"
          className="btn btn-success col-md-2 mx-auto mt-5 mb-1"
        >
          Calculate My Body Type
        </button>
      </form>

      <div id="result" className="mt-2 text-light text-center col-md-6 mx-auto">
        {result} {/* Display the result here */}
      </div>
    </main>
  );
};

export default BodyTypeForm;

};

export default BodyTypeForm;
