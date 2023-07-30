import React from "react";
import "./Header.scss";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="header container-fluid">
      <Navigation />
    </header>
  );
};

export default Header;
