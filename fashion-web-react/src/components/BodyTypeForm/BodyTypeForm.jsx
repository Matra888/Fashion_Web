import React, { useState } from "react";
import BodyTypeCalc from '../../helpers/BodyTypeCalc'
import BodyTypeDescription from "../../components/BodyTypeDescription/BodyTypeDescription";
import RecommendedItems from "../../components/RecommendedItems/RecommendedItems";
import "./BodyTypeForm.scss";
import { getElementFloatValue, getElementStringValue, toggleBlockElement,
         isPositiveNumber, isAtoZString, isEmail,
         serverStatistics, serverSubscribeToGuide } from "../../helpers/helpers";

const BodyTypeForm = () => {
  const [unit, setUnit] = useState('in');
  const [shape, setShape] = useState('');
  
  // TODO: needs a unique value
  const [id, setId] = useState(Math.random());

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'in' ? 'cm' : 'in'));
  };

  const calculateBodyType = () => {
    const errorElem = document.getElementById('calc-error');
    toggleBlockElement(errorElem, false);
    errorElem.innerText = '';

    const shoulderElem = document.getElementById('shoulder');
    const bustElem = document.getElementById('bust');
    const waistElem = document.getElementById('waist');
    const hipsElem = document.getElementById('hips');

    let shoulder = getElementFloatValue(shoulderElem);
    let bust = getElementFloatValue(bustElem);
    let waist = getElementFloatValue(waistElem);
    let hips = getElementFloatValue(hipsElem);

    let hasError = false;
    hasError |= shoulderElem.classList.toggle('field-error', !isPositiveNumber(shoulder));
    hasError |= bustElem.classList.toggle('field-error', !isPositiveNumber(bust));
    hasError |= waistElem.classList.toggle('field-error', !isPositiveNumber(waist));
    hasError |= hipsElem.classList.toggle('field-error', !isPositiveNumber(hips));

    if (hasError) {
      // Invalid input
      toggleBlockElement(errorElem, true);
      errorElem.innerText = 'Please check the highlighted values.';
      return;
    }

    if (unit === 'cm') {
      shoulder /= 2.54;
      bust /= 2.54;
      waist /= 2.54;
      hips /= 2.54;
    }

    const result = BodyTypeCalc(shoulder, bust, waist, hips);
    if (result === 'Unclear') {
      // Could not calculate a value based on the input
      toggleBlockElement(errorElem, true);
      errorElem.innerText = 'Body shape is not clearly defined.'
      return;
    }

    serverStatistics({ id, shoulder, bust, waist, hips });

    setShape(result);
  };

  const subscribeToGuide = () => {
    const errorElem = document.getElementById('calc-error');
    toggleBlockElement(errorElem, false);
    errorElem.innerText = '';

    const fullnameElem = document.getElementById('fullname');
    const emailElem = document.getElementById('email');

    let fullname = getElementStringValue(fullnameElem);
    let email = getElementStringValue(emailElem);

    let hasError = false;
    hasError |= fullnameElem.classList.toggle('field-error', !isAtoZString(fullname));
    hasError |= emailElem.classList.toggle('field-error', !isEmail(email));

    if (hasError) {
      // Invalid input
      toggleBlockElement(errorElem, true);
      errorElem.innerText = 'Please check the highlighted values.';
      return;
    }

    serverSubscribeToGuide({ id, fullname, email });
  }

  const inputField = (fieldName, fieldLabel, fieldType) => {
    // Key field added, otherwise React recycles the old inputs with their existing values
    if (fieldType === 'number') {
      return (
        <>
          <div className="form-group col-md-2 mx-auto">
            <label htmlFor={fieldName} className="text-light">{fieldLabel}</label>
            <input id={fieldName} key={fieldName} type="number" min="0" step="1" className="form-control" />
          </div>
        </>
      );
    }
    if (fieldType === 'string') {
      return (
        <>
          <div className="form-group col-md-2 mx-auto">
            <label htmlFor={fieldName} className="text-light">{fieldLabel}</label>
            <input id={fieldName} key={fieldName} type="text" className="form-control" />
          </div>
        </>
      );
    }
  }

  const calculateForm = () => {
    return (
      <>
        <h1 className="display-4 text-light">Body Type Calculator</h1>

        <div className="form-group col-md-6 mx-auto my-4">
          <label htmlFor="unit" className="text-light">
            Unit of Measurement:
            <div id="unit" className="btn-group-toggle d-flex mt-2" data-toggle="buttons">
              <label className={`btn mx-1 btn-outline-secondary ${unit === "in" ? "active" : ""}`}>
                <input type="radio" name="unit" value="in" checked={unit === "in"} onChange={toggleUnit} />{" "}
                Inches
              </label>

              <label className={`btn mx-1 btn-outline-secondary ${unit === "cm" ? "active" : ""}`}>
                <input type="radio" name="unit" value="cm" checked={unit === "cm"} onChange={toggleUnit} />{" "}
                Centimeters
              </label>
            </div>
          </label>
        </div>

        {inputField('shoulder', 'Shoulder Measurement:', 'number')}
        {inputField('bust', 'Bust Measurement:', 'number')}
        {inputField('waist', 'Waist Measurement:', 'number')}
        {inputField('hips', 'Hip Measurement:', 'number')}

        <button type="button" className="btn btn-success col-md-2 mx-auto mt-5 mb-1" onClick={calculateBodyType}>
          Calculate My Body Type
        </button>

        <div id='calc-error' className="form-group col-md-6 mx-auto my-2 calc-error" style={{ display: 'none' }}></div>
      </>
    );
  }

  const resultsForm = () => {
    return (
      <>
        <BodyTypeDescription bodyTypeToDescribe={shape} />
        <h3 className="title accent">TOPS that will complement your body</h3>
        <RecommendedItems bodyType={shape} />

        <h3 className="title accent">Discover even more</h3>

        <p className="text-secondary">Receive our full seasonal shopping guide</p>

        {inputField('fullname', 'Full Name:', 'string')}
        {inputField('email', 'E-mail:', 'string')}

        <button type="button" className="btn btn-success col-md-2 mx-auto mt-5 mb-1" onClick={subscribeToGuide}>
          Yes, send me the guide
        </button>

        <div id='calc-error' className="form-group col-md-6 mx-auto my-2 calc-error" style={{ display: 'none' }}></div>
      </>
    );
  }

  const render = () => {
    if (!shape) {
      return calculateForm();
    }
    else {
      return resultsForm();
    }
  }
  
  return (
    <main className="description-page bg-dark container-fluid d-flex flex-column justify-content-center text-center p-5 mt-2">
      {render()}
    </main>
  );
};

export default BodyTypeForm;