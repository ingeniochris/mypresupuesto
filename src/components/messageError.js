import React from "react";
import PropTypes from "prop-types";

const MessageError = ({ message }) => {
  return <small className="form-text text-muted text-danger">{message}</small>;
};

MessageError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageError;
