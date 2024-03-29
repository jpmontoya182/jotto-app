import { actionTypes, actionsTypes } from "../actions";
import successReducer from "./successReducer";

test("returns default initial state of `false` when no action is passed", () => {
  const newState = successReducer(undefined, { type: "" });
  expect(newState).toBe(false);
});

test("returns state of `true` upon receiving an action of type `CORRECT_GUESS`", () => {
  const newState = successReducer(undefined, {
    type: actionsTypes.CORRECT_GUESS,
  });
  expect(newState).toBe(true);
});
