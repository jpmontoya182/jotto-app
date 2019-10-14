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

  test("renders without error", () => {
    const component = findByTestAttrib(wrapper, "component-guessed-words");
    expect(component.lenght).toBe(1);
  });
  test("renders without error", () => {
    const instructions = findByTestAttrib(wrapper, "guess-instructions");
    expect(instructions.text().lenght).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  test("renders without error", () => {});
});
