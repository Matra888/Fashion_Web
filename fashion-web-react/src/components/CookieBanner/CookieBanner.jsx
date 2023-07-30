import React from "react";

const CookieBanner = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center fixed-bottom bg-dark p-2">
      <p className="mb-0 text-light p-2">
        We use cookies to enhance your experience. Read more about our{" "}
        <a href="/privacy-policy">cookies and privacy policy</a>.
      </p>
      <div>
        <button className="btn btn-success m-2">Accept All</button>
        <button className="btn btn-outline-secondary m-2">Customize</button>
      </div>
    </div>
  );
};

export default CookieBanner;
