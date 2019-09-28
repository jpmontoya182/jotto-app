export const findByTestAttrib = (wrapper, val) => {
	return wrapper.find(`[data-test='${val}']`);
};
