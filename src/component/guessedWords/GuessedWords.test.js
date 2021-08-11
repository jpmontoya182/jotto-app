import React from "react";
import { shallow } from "enzyme";
import GuessedWords from "./GuessedWords";
import { findByTestAttrib, checkProps } from "../../../test/testUtils";

const initialState = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};

const setup = (props = {}) => {
  const setupProps = { ...initialState, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(GuessedWords, initialState);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without error component", () => {
    const component = findByTestAttrib(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders without error message", () => {
    const instructions = findByTestAttrib(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train_1", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 }
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test("renders without error component guess words", () => {
    const component = findByTestAttrib(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders guess words section", () => {
    const guessedWordsNode = findByTestAttrib(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });
  test("correct number of guessed words", () => {
    const guessedWordNodes = findByTestAttrib(wrapper, "guessed-word");
    expect(guessedWordNodes.length).toBe(guessedWords.length);
  });
});
