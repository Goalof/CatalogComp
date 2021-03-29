import React from "react";
import { useOverrides, Override, StackItem, Stack, Section } from "@quarkly/components";
import { Icon, Text } from "@quarkly/widgets";
import { MdFileUpload, MdInbox, MdRemoveRedEye, MdFace } from "react-icons/md";
const defaultProps = {
	"background": "#181C22",
	"padding": "0px 0 0px 0",
	"border-width": "1px 0px 0px 0px",
	"border-color": "#ffffff",
	"border-style": "solid"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {
			"margin": "0px 0px 0px 0px",
			"gap": "--cmp-stack-gap-small"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex",
			"nout-width": "70%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"sm-justify-content": "center"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdFileUpload,
			"size": "16px",
			"color": "--greyD1",
			"margin": "0px 10px 0px 10px",
			"sm-margin": "0px 10px 0px 3px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--desccomp",
			"margin": "0px 10px 0px 0px",
			"display": "inline-block",
			"color": "--greyD1",
			"nout-font": "normal 300 15px/1.5 --fontFamily-mono",
			"md-font": "300 10px Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace",
			"sm-font": "300 9px Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace",
			"sm-margin": "0px 8px 0px 0px",
			"children": "Version: 1.0 |"
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdInbox,
			"size": "16px",
			"color": "--greyD1",
			"margin": "0px 10px 0px 0px"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--desccomp",
			"margin": "0px 10px 0px 0px",
			"display": "inline-block",
			"color": "--greyD1",
			"nout-font": "normal 300 15px/1.5 --fontFamily-mono",
			"md-font": "300 10px Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace",
			"sm-font": "300 9px Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace",
			"sm-margin": "0px 10px 0px 0px",
			"children": "Size: 11.3 kb |"
		}
	},
	"icon2": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdRemoveRedEye,
			"size": "16px",
			"color": "--greyD1",
			"margin": "0px 10px 0px 0px"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--desccomp",
			"margin": "0px 10px 0px 0px",
			"display": "inline-block",
			"color": "--grey",
			"nout-font": "normal 300 15px/1.5 --fontFamily-mono",
			"md-font": "300 10px Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace",
			"sm-font": "300 9px Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace",
			"sm-margin": "0px 0px 0px 0px",
			"children": "Views: 123"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex",
			"nout-width": "30%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"justify-content": "flex-end",
			"sm-justify-content": "center"
		}
	},
	"icon3": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdFace,
			"color": "--greyD1",
			"margin": "0px 10px 0px 0px",
			"size": "16px"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"font": "--desccomp",
			"margin": "0px 10px 0px 0px",
			"display": "inline-block",
			"color": "--greyD1",
			"nout-font": "normal 300 15px/1.5 --fontFamily-mono",
			"md-font": "300 10px Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace",
			"sm-font": "300 9px Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace",
			"sm-margin": "0px 3px 0px 0px",
			"children": "Author: Quarkly Team"
		}
	}
};

const InfoComp = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" max-width="none" width="100%" />
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				{"        "}
				<Icon {...override("icon")} />
				<Text {...override("text")} />
				<Icon {...override("icon1")} />
				<Text {...override("text1")} />
				<Icon {...override("icon2")} />
				<Text {...override("text2")} />
				{"    "}
			</StackItem>
			{"    "}
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				{"        "}
				<Icon {...override("icon3")} />
				<Text {...override("text3")} />
				{"    "}
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(InfoComp, { ...Section,
	defaultProps,
	overrides
});
export default InfoComp;