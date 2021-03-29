import React, { useState } from 'react';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import { Text, Input } from '@quarkly/widgets';
const overrides = {
	'input': {
		'kind': 'Input',
		'props': {
			'padding': '12px 16px 0',
			'height': '40px'
		}
	},
	'input-active': {
		'kind': 'Input',
		'props': {}
	},
	'input-normal': {
		'kind': 'Input',
		'props': {}
	},
	'label': {
		'kind': 'Text',
		'props': {
			'top': '0',
			'left': '0',
			'margin': '0',
			'padding': '0 16px',
			'width': '100%',
			'line-height': '40px',
			'transition': 'transform .1s ease',
			'box-sizing': 'border-box',
			'position': 'absolute',
			'opacity': '.5'
		}
	},
	'label-active': {
		'kind': 'Text',
		'props': {
			'transform': 'translate(-10%, -25%) scale(.75)'
		}
	},
	'label-normal': {
		'kind': 'Text',
		'props': {
			'transform': 'translate(0%, 0%) scale(1)'
		}
	}
};
const Label = atomize.label({
	name: 'Label',
	effects: {
		hover: ':hover',
		focus: ':focus'
	}
}, {
	position: 'relative',
	display: 'inline-block',
	cursor: 'text'
});

const CustomInput = props => {
	const [isActive, setActive] = useState(false);
	const [value, setValue] = useState('');

	const handleActive = active => setActive(active || value.length > 0);

	const handleChange = value => setValue(value);

	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, {});
	return <Label {...rest}>
		            
		<Input
			{...override('input', `input-${isActive ? 'active' : 'normal'}`)}
			onFocus={() => handleActive(true)}
			onBlur={() => handleActive(false)}
			onChange={e => handleChange(e.target.value)}
			value={value}
		/>
		            
		<Text {...override('label', `label-${isActive ? 'active' : 'normal'}`)}>
			                Placeholder
            
		</Text>
		        
	</Label>;
};

Object.assign(CustomInput, {
	overrides
});
export default CustomInput;