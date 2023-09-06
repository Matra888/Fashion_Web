import React from "react";
import BodyTypeDescription from "../../components/BodyTypeDescription/BodyTypeDescription";
import RecommendedItems from "../../components/RecommendedItems/RecommendedItems";
import SubscribeForm from "../../components/SubscribeForm/SubscribeForm";
import "./YourBodyTypeResult.scss";
import BodyTypeCalc from "../../components/RecommendedItems/BodyTypeCalc";

const YourBodyTypeResult = () => {
  let calculatedBodyType = BodyTypeCalc();

  return (
    <main className="description-page bg-dark">
      <BodyTypeDescription bodyTypeToDescribe={calculatedBodyType} />
      <h3 className="title accent">TOPS that will complement your body</h3>
      <RecommendedItems bodyType={calculatedBodyType} />
      <h3 className="title accent">Discover even more</h3>
      <SubscribeForm />
    </main>
  );
};

export default YourBodyTypeResult;
