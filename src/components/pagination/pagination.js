import React from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./pagination.sass";

const Pagination = (props) => {
  const { links } = props;
  let { activePage, setActivePage } = props;

  const pages = [...Array(Math.ceil(links.length / 5)).keys()].map(
    (value) => value + 1
  );

  const generatePages = () => {
    return pages.map((page, index) => {
      return (
        <span
          onClick={() => setActivePage(page)}
          key={index}
          className={index + 1 === activePage ? "active page" : "page"}
        >
          {page}
        </span>
      );
    });
  };

  return (
    <div className="pagination-container">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="icon"
        onClick={() => {
          if (activePage > 1) {
            setActivePage(--activePage);
          }
        }}
      />
      <div className="pages-container">{generatePages()}</div>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="icon"
        onClick={() => {
          if (activePage < pages.pop()) {
            setActivePage(++activePage);
          }
        }}
      />
    </div>
  );
};

Pagination.propTypes = {
  links: PropTypes.array,
  activePage: PropTypes.number,
  setActivePage: PropTypes.func
};

export default Pagination;
