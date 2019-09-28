import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';
import { findByTestAttrib } from '../../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => shallow(<Congrats {...props} />);

test('render without error', () => {
	const wrapper = setup();
	const component = findByTestAttrib(wrapper, 'component-congrast');
	// console.log(component.debug());
	expect(component.length).toBe(1);
});

test('render no text when "sucess" prop is false', () => {
	const wrapper = setup({ success: false });
	const component = findByTestAttrib(wrapper, 'component-congrast');
	expect(component.text()).toBe('');
});

test('renders non-empty congrast message when sucess props is trie', () => {
	const wrapper = setup({ success: true });
	const message = findByTestAttrib(wrapper, 'congrast-message');
	expect(message.text().length).not.toBe(0);
});
