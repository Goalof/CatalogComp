import React, { useState, useEffect } from 'react';
import { Box } from '@quarkly/widgets';
const defaultProps = {
	'open': true,
	'disabled': false
};
const propInfo = {
	open: {
		control: 'checkbox',
		category: 'Main',
		weight: '1'
	},
	disabled: {
		control: 'checkbox',
		category: 'Main',
		weight: '1'
	}
};

function AccordionItem({
	open,
	disabled,
	openItems,
	setOpenItem,
	children,
	...rest
}) {
	const [idx] = useState(`${Date.now() + Math.random()}`);
	const isOpen = openItems.includes(idx);
	useEffect(() => {
		if (open) {
			setOpenItem({
				idx,
				open,
				disabled
			});
		}
	}, []);
	return <Box flex-direction='column' display='flex' {...rest}>
		{React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, {
			idx,
			isOpen,
			disabled,
			setOpenItem
		}) : child)}
	</Box>;
}

;
export default Object.assign(AccordionItem, {
	defaultProps,
	propInfo
});