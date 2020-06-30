import { actionsTypes } from "../actions";
/**
 * state : Array of guessed words
 * action: to be reduced
 * @returns {boolean} : new success state
 */
export default (state = false, action) => {
  switch (action.type) {
    case actionsTypes.CORRECT_GUESS:
      return true;

    default:
      return state;
  }
};
