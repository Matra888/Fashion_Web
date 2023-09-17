import React from "react";
import "./Hero.scss";
import HeroImage from "../../assets/hero-image-medium.jpg";

const Hero = () => {
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
            <h1 className="display-4 text-center text-sm-start fw-semibold">
              <span className="fs-4 accent">Welcome to</span>
              <br /> Your Personalized <br /> Style Journey
            </h1>
            <p className="lead text-center text-sm-start text-white-50">
              Unleash your unique style with fashion recommendations tailored to
              your body type.
            </p>
            <p className="accent text-center text-sm-start pt-4">
              Ready to transform your style? Let's get started!
            </p>

            <div className="d-flex flex-column flex-lg-row gap-3 m-2 my-4 mx-md-0">
              <a
                className="btn btn-success btn-lg text-nowrap"
                href="/YourBodyType"
                role="button"
              >
                Discover Your Body Type
              </a>
              <a
                className="btn btn-outline-success btn-lg text-nowrap"
                href="/"
                role="button"
              >
                Uncover Your Color Palette
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
