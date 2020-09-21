import React from "react";
import PropTypes from "prop-types";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./order-by-dropdown.sass";

const OrderByDropdown = (props) => {
  const {onChangeDropdown} = props;

  return (
    <div className="my-select">
      <select onChange={(e) => onChangeDropdown(e.target.value)}>
        <option defaultValue>Order By</option>
        <option value="mv">Most Voted (Z &#8594; A)</option>
        <option value="lv">Less Voted (A &#8594; Z)</option>
      </select>
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faChevronDown} className="icon" />
      </div>
    </div>
  );
};

OrderByDropdown.propTypes = {
  onChangeDropdown: PropTypes.func,
};

export default OrderByDropdown;
