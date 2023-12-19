import React from "react";
import BodyTypeData from "./BodyTypeData";
import "./BodyTypeDescription.scss";

const BodyTypeDescription = ({ bodyTypeToDescribe }) => {
  const selectedBodyType = bodyTypeToDescribe; // Body Type TEST RESULT

  // Content of the matching body type (selectedBodyType) is selected to be presented
  const selectedProps = BodyTypeData[selectedBodyType];

  if (!selectedProps) {
    return null; // Handle the case where selectedBodyType doesn't match any set
  }
  const { bodyType, bodyTypePicture, styleRecommendations } = selectedProps;

  return (
    <>
      <div className="body-type__container">
        <h2 className="body-type__title text-light">
          Your body type is <span className="accent">{bodyType}</span>
        </h2>

        <img className="body-type__image" src={bodyTypePicture} />

        {/* <div className="style-recommendations__container text-light">
          <h3 className="style-recommendations__title accent">
            Styles that will look great:
          </h3>
          <div className="style-recommendations__content">
            {styleRecommendations.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default BodyTypeDescription;
