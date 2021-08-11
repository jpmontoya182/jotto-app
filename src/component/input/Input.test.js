import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../../../test/testUtils";
import Input from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />);
  // console.log(wrapper.debug());
};



describe("render", () => {
  describe("word has not been guessed", () => {});
});
describe("update state", () => {
  describe("word has not been guessed", () => {
    test("should renders component without error", () => {});
    test("renders input box", () => {});
    test("renders submit button", () => {});
  });

  describe("word has been guessed", () => {
    test("should renders component without error", () => {});
    test("renders not input box", () => {});
    test("renders not submit button", () => {});
  });
});
