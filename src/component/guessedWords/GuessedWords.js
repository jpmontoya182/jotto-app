import React from "react";
import PropTypes from "prop-types";
import "./GuessedWords.css";

const GuessedWords = props => {
  let contents = "";
  if (!props.guessedWords || props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">Try to guess the secret word</span>
    );
  } else {
    const guessedWordsRows = props.guessedWords.map((word, index) => (
      <tr
        data-test="guessed-word"
        key={index}
        className="GuessedWords__table--body"
      >
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div data-test="guessed-words" className="GuessedWords">
        <h3 className="GuessedWords__title">Guessed Words</h3>
        <table className="GuessedWords__table">
          <thead>
            <tr className="GuessedWords__table--title">
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordsRows}</tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{contents}</div>;
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
