import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box, Icon } from "@quarkly/widgets";
import { IoIosArrowDown } from "react-icons/io";
const overrides = {
	'AccordionSummary': {
		kind: 'Box',
		props: {
			opacity: '1'
		}
	},
	'AccordionSummary-open': {
		kind: 'Box',
		props: {}
	},
	'AccordionSummary-disabled': {
		kind: 'Box',
		props: {
			'pointer-events': 'none',
			cursor: 'default',
			opacity: '.5'
		}
	},
	'AccordionSummaryIcon': {
		kind: 'Icon',
		props: {
			size: '18px',
			color: '#7A869A',
			category: 'io',
			icon: IoIosArrowDown
		}
	},
	'AccordionSummaryIcon-open': {
		kind: 'Icon',
		props: {
			icon: 'IoIosArrowUp'
		}
	},
	'AccordionSummaryIcon-disabled': {
		kind: 'Icon',
		props: {
			cursor: 'default'
		}
	}
};
const effects = {
	hover: ':hover'
};

const AccordionSummary = ({
	idx,
	isOpen,
	setOpenItem,
	disabled,
	...props
}) => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, {});
	return <Box
		padding="16px 64px 16px 24px"
		background-color="#E6E5E6"
		border-bottom="1px solid #BEC7CC"
		box-sizing="border-box"
		position="relative"
		cursor="pointer"
		onClick={() => setOpenItem({
			idx,
			isOpen,
			disabled
		})}
		{...rest}
		{...override('AccordionSummary', isOpen && 'AccordionSummary-open', disabled && 'AccordionSummary-disabled')}
	>
		<Icon
			top="50%"
			right="20px"
			margin-top="-12px"
			width="24px"
			height="24px"
			line-height="24px"
			position="absolute"
			z-index="2"
			{...rest}
			{...override('AccordionSummaryIcon', isOpen ? 'AccordionSummaryIcon-open' : '', disabled && 'AccordionSummaryIcon-disabled')}
		/>
		{children}
	</Box>;
};

export default Object.assign(AccordionSummary, {
	overrides,
	effects
});