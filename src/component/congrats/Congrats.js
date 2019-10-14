import React from "react";
import PropTypes from "prop-types";
import "./Congrats.css";

const Congrats = props => {
  const { success } = props;
  let message = "";

  if (success) {
    message = (
      <p className="Congrats__Sucess">
        "Congratulation ! You guessed the word"
      </p>
    );
  }

  return (
    <div data-test="component-congrast">
      <span data-test="congrast-message">{message}</span>
    </div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
