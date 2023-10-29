import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Logo" className="logo-image" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title align-self-center"
              id="offcanvasDarkNavbarLabel"
            >
              Fashion Web
            </h5>

            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {/* Link to our Body Type section*/}
              <li className="nav-item align-self-center">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/YourBodyType"
                >
                  Your Body Type
                </a>
              </li>
              {/* Link to our Color Palette section */}
              <li className="nav-item align-self-center">
                <a className="nav-link" href="/">
                  Your Color Palette
                </a>
              </li>
              {/* Link to our Blog section */}
              <li className="nav-item align-self-center">
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
