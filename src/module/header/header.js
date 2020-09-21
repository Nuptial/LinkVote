import React from "react";
import "./header.sass";

const Header = () => {
  return (
    <div className="header">
      <img
        src="hepsiburada-logo.png"
        alt="hepsiburada-logo"
        className="hepsiburada-logo"
      />
      <span className="header-desc">
        <b>Link</b>Vote Challenge
      </span>

      <hr></hr>
    </div>
  );
};

export default Header;
