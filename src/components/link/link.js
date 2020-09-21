import React from "react";
import PropTypes from "prop-types";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./link.sass";

const Link = (props) => {
  const { link, onDialogOpened, onUpVote, onDownVote } = props;

  return (
    <div className="link-container">
      <div className="link-points">
        <span className="points" data-testid="link-points">
          {link.points}
        </span>
        POINTS
      </div>
      <div className="link-details">
        <span className="link-title" data-testid="link-name">
          {link.name}
        </span>
        <span className="link-url" data-testid="link-url">
          ({link.url})
        </span>
        <div className="link-vote-container">
          <div className="link-vote" onClick={onUpVote}>
            <FontAwesomeIcon icon={faArrowUp} className="icon" />
            Up Vote
          </div>
          <div className="link-vote" onClick={onDownVote}>
            <FontAwesomeIcon icon={faArrowDown} className="icon" />
            Down Vote
          </div>
        </div>
      </div>
      <img
        src="sign-delete-icon.png"
        alt="delete-icon"
        className="delete-icon"
        onClick={onDialogOpened}
      />
    </div>
  );
};

Link.propTypes = {
  link: PropTypes.object,
  onDialogOpened: PropTypes.func,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func,
};

export default Link;
