import React from "react";
import "./Landing.scss";
import HeroImage from "../../assets/hero-image-medium.jpg";

const Landing = () => {
  return (
    <main className="bg-dark vh-100">
      <div className="container m-0 p-0 bg-dark">
        <div className="row g-0">
          <div className="col-md-6 order-md-1">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="hero-image img-fluid"
            />
          </div>
          <div className="col-md-6 order-md-2 d-flex flex-column justify-content-center px-2 px-md-4 px-lg-5 py-3 m-0 bg-transparent text-light">
            <h2 className="landing__title display-4 text-center text-sm-start fw-semibold">
              <span className="fs-4 accent">OurName</span>
              <br /> Your Personal <br /> Shopping Transformed
            </h2>
            <h3 className="landing__subtitle lead text-center text-sm-start text-white-50">
              Expert recommendations tailored to your body
            </h3>
            <p className="landing__cta accent text-center text-sm-start pt-4">
              Ready to elevate your style?
              <br />
              Join the <b>3,051</b> women in the waitlist!
            </p>

            <div className="d-flex flex-column flex-lg-row gap-3 m-2 my-4 mx-md-0">
              <a
                className="btn btn-success btn-lg text-nowrap"
                href="/YourBodyType"
                role="button"
              >
                Sign Up for the Launch!
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
