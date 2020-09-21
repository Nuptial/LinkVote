import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./submit-link.sass";

const SubmitLink = () => {
  return (
    <Link to="/new" className="submit-link-wrapper">
      <div className="submit-link">
        <div className="plus-icon">
          <FontAwesomeIcon icon={faPlus} className="icon" />
        </div>
        <span>SUBMIT A LINK</span>
      </div>
    </Link>
  );
};

export default SubmitLink;
