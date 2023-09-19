import React, { useState } from "react";
import BodyTypeCalc from '../RecommendedItems/BodyTypeCalc'
import BodyTypeDescription from "../../components/BodyTypeDescription/BodyTypeDescription";
import RecommendedItems from "../../components/RecommendedItems/RecommendedItems";
import SubscribeForm from "../../components/SubscribeForm/SubscribeForm";
import "../../pages/YourBodyTypeResult/YourBodyTypeResult.scss";

const BodyTypeForm = () => {
  const [unit, setUnit] = useState("inches");
  const [shape, setShape] = useState('');

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "inches" ? "centimeters" : "inches"));
  };

  const calculateBodyType = () => {
    let shoulder = parseFloat(document.getElementById("shoulder").value);
    let bust = parseFloat(document.getElementById("bust").value);
    let waist = parseFloat(document.getElementById("waist").value);
    let hips = parseFloat(document.getElementById("hips").value);
  
    if (unit === "centimeters") {
      shoulder /= 2.54;
      bust /= 2.54;
      waist /= 2.54;
      hips /= 2.54;
    }

    const result = BodyTypeCalc(shoulder, bust, waist, hips);

    setShape(result);
  };

  const render = () => {
    if (!shape) {
      return (
      <>
        {/* FORM TITLE */}
        <h1 className="display-4 text-light">Body Type Calculator</h1>
        {/* INPUT: UNIT type choice for calculating measurements */}
        <div className="form-group col-md-6 mx-auto my-4">
          <label htmlFor="unit" className="text-light">
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
          <label htmlFor="shoulder" className="text-light">
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
          <label htmlFor="bust" className="text-light">
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
          <label htmlFor="waist" className="text-light">
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
          <label htmlFor="hips" className="text-light">
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
          type="button"
          className="btn btn-success col-md-2 mx-auto mt-5 mb-1"
          onClick={calculateBodyType}
        >
          Calculate My Body Type
        </button>
      </>
    );
    }
    else {
      return (
        <>
          <BodyTypeDescription bodyTypeToDescribe={shape} />
          <h3 className="title accent">TOPS that will complement your body</h3>
          <RecommendedItems bodyType={shape} />
          <div style={{ width: '300px', margin: '0 auto' }}>
            <h3 className="title accent">Discover even more</h3>
            <SubscribeForm />
          </div>
        </>
      );
    }
  }
  
  return (
    <main className="description-page bg-dark container-fluid d-flex flex-column">
      <form
        id="bodyShapeForm"
        className="container-fluid d-flex flex-column justify-content-center text-center p-5 mt-2"
      >
        <div>{render()}</div>
      </form>
    </main>

  );
};

export default BodyTypeForm;