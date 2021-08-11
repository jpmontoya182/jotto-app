import { correctGuess, actionsTypes } from "./";

describe("correctGuess", () => {
  test("return an action with type `CORRECT_GUESS`", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionsTypes.CORRECT_GUESS });
  });
});

// Use .toBe to compare primitive values or to check referential identity of object instances
// Use .toEqual to compare recursively all properties of object instances
