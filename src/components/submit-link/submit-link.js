import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./submit-link.sass";


const SubmitLink = (props) => {
  const { onClick } = props;

  return (
    <div className="submit-link" onClick={onClick}>
      <div className="plus-icon">
        <FontAwesomeIcon icon={faPlus} className="icon"/>
      </div>
      <span>SUBMIT A LINK</span>
    </div>
  );
};

SubmitLink.propTypes = {
  onClick: PropTypes.func,
};

export default SubmitLink;
