import React, { useReducer } from 'react';
import { Box } from '@quarkly/widgets';
const defaultProps = {
	'allowMultiple': true,
	'allowToggle': true
};
const propInfo = {
	allowMultiple: {
		control: 'checkbox',
		category: 'Main',
		weight: '1'
	},
	allowToggle: {
		control: 'checkbox',
		category: 'Main',
		weight: '1'
	}
};

const setOpenItemsReducer = (state, action) => {
	switch (action.type) {
		case 'add':
			return [...state, action.idx];

		case 'delete':
			return state.filter(idx => idx !== action.idx);

		case 'replace':
			return [action.idx];

		default:
			return state;
	}
};

const Accordion = ({
	allowMultiple,
	allowToggle,
	children,
	...rest
}) => {
	const [openItems, setOpenItemsDispatch] = useReducer(setOpenItemsReducer, []);

	const setOpenItem = ({
		idx,
		isOpen,
		disabled
	}) => {
		const isOpenLastEl = openItems.length === 1,
		      isPreventDoubleClick = !allowMultiple && !allowToggle && isOpen && isOpenLastEl,
		      isRequireLastElOpen = !allowToggle && isOpen && isOpenLastEl,
		      type = !isOpen ? allowMultiple ? 'add' : 'replace' : 'delete';

		if (isPreventDoubleClick || isRequireLastElOpen || disabled) {
			return;
		}

		setOpenItemsDispatch({
			type,
			idx
		});
	};

	return <Box
		border="1px solid #BEC7CC"
		border-radius="4px"
		overflow="hidden"
		flex-direction="column"
		display="flex"
		{...rest}
	>
		{React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, {
			openItems,
			setOpenItem
		}) : child)}
	</Box>;
};

export default Object.assign(Accordion, {
	defaultProps,
	propInfo
});