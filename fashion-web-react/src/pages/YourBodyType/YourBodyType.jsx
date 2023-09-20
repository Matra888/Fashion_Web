import React from "react";
import BodyTypeForm from "../../components/BodyTypeForm/BodyTypeForm";
import "./YourBodyType.scss";

const YourBodyType = () => {
  return (
    <main>
      {/* display logic (show test form or show test result) to be moved to this page */}
      <BodyTypeForm />
    </main>
  );
};

export default YourBodyType;
