import React from "react";
import BodyTypeDescription from "../../components/BodyTypeDescription/BodyTypeDescription";
import RecommendedItems from "../../components/RecommendedItems/RecommendedItems";
import SubscribeForm from "../../components/SubscribeForm/SubscribeForm";
import "./BodyTypeResult.scss";
import BodyTypeCalc from "../../components/RecommendedItems/BodyTypeCalc";
// import the element that contains {shape}

const BodyTypeResult = () => {
  let calculatedBodyType = BodyTypeCalc(); // to be removed or replaced with referrence to {shape}.

  return (
    <main className="description-page bg-dark">
      <BodyTypeDescription bodyTypeToDescribe={calculatedBodyType} />
      {/*<--- {calculateBodyType} to be replaced with {shape}*/}
      <h3 className="title accent">TOPS that will complement your body</h3>
      <RecommendedItems bodyType={calculatedBodyType} />
      {/*<--- {calculateBodyType} to be replaced with {shape}*/}
      <div className="subscribe-container">
        <h3 className="title accent">Discover even more</h3>
        <SubscribeForm />
      </div>
    </main>
  );
};

export default BodyTypeResult;
