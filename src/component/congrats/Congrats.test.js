import React from "react";
import { shallow } from "enzyme";
import Congrats from "./Congrats";
import { findByTestAttrib, checkProps } from "../../../test/testUtils";

const defaultProps = { success: false };

// Factory function to creare a shallowWrapper
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("render without error", () => {
  const wrapper = setup();
  const component = findByTestAttrib(wrapper, "component-congrast");
  expect(component.length).toBe(1);
});

test('render no text when "success" prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttrib(wrapper, "component-congrast");
  expect(component.text()).toBe("");
});

test("renders non-empty congrast message when sucess props is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttrib(wrapper, "congrast-message");
  expect(message.text().length).not.toBe(0);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: true };
  checkProps(Congrats, expectedProps);
});
