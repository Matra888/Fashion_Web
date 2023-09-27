import React, { useState } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAcceptAll = () => {
    // Hide the banner when "Accept All" is clicked
    setIsVisible(false);

    // You can add any logic related to accepting cookies here
  };

  return (
    // Render the banner only if it is visible
    isVisible && (
      <div
        id="cookie-banner"
        className="container-fluid d-flex justify-content-center align-items-center fixed-bottom bg-dark p-2"
      >
        <p className="mb-0 text-light p-2">
          We use cookies to enhance your experience. Read more about our{" "}
          <a href="/privacy-policy">cookies and privacy policy</a>.
        </p>
        <div>
          <button className="btn btn-success m-2" onClick={handleAcceptAll}>
            Accept All
          </button>
          <button className="btn btn-outline-secondary m-2">Customize</button>
        </div>
      </div>
    )
  );
};

export default CookieBanner;
