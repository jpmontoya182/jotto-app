import React from "react";
import PropTypes from "prop-types";

const GuessedWords = props => {
  return <div></div>;
};

GuessedWords.protoTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
