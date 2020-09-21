import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./toast.sass";

const Toast = (props) => {
  const [isActive, setIsActive] = useState(true);
  const { onToastClosed, onToastUnMount, linkName, message } = props;

  useEffect(() => {
    
    setTimeout(() => {
      setIsActive(false);
    }, 3000);

    setTimeout(() => {
      onToastClosed();
    },5000);

    return () => {
      onToastUnMount();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={isActive ? "toast-success fadeIn" : "toast-success fadeOut"}>
      <span>{linkName}</span> {message}
    </div>
  );
};

Toast.propTypes = {
  onToastClosed: PropTypes.func,
  onToastUnMount: PropTypes.func,
  linkName: PropTypes.string,
  message: PropTypes.string
};


export default Toast;
