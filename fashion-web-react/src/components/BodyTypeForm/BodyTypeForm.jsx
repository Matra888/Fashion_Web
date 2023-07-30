import React, { useState } from "react";

const BodyTypeForm = () => {
  const [unit, setUnit] = useState("inches");

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "inches" ? "centimeters" : "inches"));
  };

  return (
    <main className="container-fluid d-flex flex-column bg-dark vh-100">
      <form
        id="bodyShapeForm"
        className="container-fluid d-flex flex-column justify-content-center text-center p-5 mt-2"
      >
        {/* FORM TITLE */}
        <h1 className="display-4 text-light">Body Type Calculator</h1>
        {/* INPUT: UNIT type choice for calculating measurements */}
        <div className="form-group col-md-6 mx-auto my-4">
          <label for="unit" className="text-light">
            Unit of Measurement:
            <div
              className="btn-group-toggle d-flex mt-2"
              id="unit"
              data-toggle="buttons"
            >
              {/* UNIT type A */}

              <label
                className={`btn mx-1 btn-outline-secondary ${
                  unit === "inches" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="unit"
                  value="inches"
                  checked={unit === "inches"}
                  onChange={toggleUnit}
                />{" "}
                Inches
              </label>

              {/* UNIT type B */}

              <label
                className={`btn mx-1 btn-outline-secondary ${
                  unit === "centimeters" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="unit"
                  value="centimeters"
                  checked={unit === "centimeters"}
                  onChange={toggleUnit}
                />{" "}
                Centimeters
              </label>
            </div>
          </label>
        </div>
        {/* INPUT: SHOULDER measurements */}
        <div className="form-group col-md-2 mx-auto">
          <label for="shoulder" className="text-light">
            Shoulder Measurement:
          </label>
          <input
            type="number"
            id="shoulder"
            min="0"
            step="1"
            className="form-control"
          />
        </div>
        {/* INPUT: BUST measurements */}
        <div className="form-group col-md-2 mx-auto">
          <label for="bust" className="text-light">
            Bust Measurement:
          </label>
          <input
            type="number"
            id="bust"
            min="0"
            step="1"
            className="form-control"
          />
        </div>
        {/* INPUT: WAIST measurements */}
        <div className="form-group col-md-2 mx-auto">
          <label for="waist" className="text-light">
            Waist Measurement:
          </label>
          <input
            type="number"
            id="waist"
            min="0"
            step="1"
            className="form-control"
          />
        </div>
        {/* INPUT: HIP measurements */}
        <div className="form-group col-md-2 mx-auto">
          <label for="hips" className="text-light">
            Hip Measurement:
          </label>
          <input
            type="number"
            id="hips"
            min="0"
            step="1"
            className="form-control"
          />
        </div>
        {/* FORM SUBMIT BUTTON */}
        <button
          type="submit"
          className="btn btn-success col-md-2 mx-auto mt-5 mb-1"
        >
          Calculate My Body Type
        </button>
      </form>

      <div id="result" className="mt-2 text-light text-center col-md-6 mx-auto">
        Result to be displayed here or redirect or pop-up?
      </div>
    </main>
  );
};

export default BodyTypeForm;
