import React from 'react';
import PropTypes from 'prop-types';

const Congrats = (props) => {
	const { success } = props;
	if (success) {
		return (
			<div data-test="component-congrast">
				<span data-message="congrast-message">Congratulation ! You guessed the word</span>
			</div>
		);
	}

	return <div data-test="component-congrast" />;
};

export default Congrats;
