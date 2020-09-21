import React from "react";
import PropTypes from "prop-types";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./dialog.sass";

const Dialog = (props) => {
  const { onDialogClosed, onDialogConfirm, selectedLink } = props;

  return (
    <>
      <div className="dialog-container">
        <div className="dialog-header">Remove Link</div>
        <div className="dialog-body">
          <p>
            Do you want to remove:
            <span data-testid="dialog-span">{selectedLink.name}</span>
          </p>
        </div>
        <div className="dialog-footer">
          <button className="dialog-button" onClick={onDialogConfirm}>
            OK
          </button>
          <button className="dialog-button" onClick={onDialogClosed}>
            CANCEL
          </button>
        </div>
        <FontAwesomeIcon
          icon={faTimes}
          className="close-icon"
          onClick={onDialogClosed}
        />
      </div>
      <div className="overlay" onClick={onDialogClosed}></div>
    </>
  );
};

Dialog.propTypes = {
  onDialogClosed: PropTypes.func,
  onDialogConfirm: PropTypes.func,
  selectedLink: PropTypes.object
};

export default Dialog;
