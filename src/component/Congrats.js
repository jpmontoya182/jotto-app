import React from "react";
import PropTypes from "prop-types";

const Congrats = props => {
  const { success } = props;
  if (success) {
    return (
      <div data-test="component-congrast">
        <span data-test="congrast-message">
          Congratulation ! You guessed the word
        </span>
      </div>
    );
  }

  return <div data-test="component-congrast" />;
};

Congrats.propTypes = {
  success: PropTypes.bool
};

export default Congrats;
