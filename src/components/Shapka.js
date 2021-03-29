import React from "react";
import { useOverrides, Override, StackItem, Stack, Section } from "@quarkly/components";
import { Image, Link } from "@quarkly/widgets";
import MyNav from "./MyNav";
import CategoriesMenu from "./CategoriesMenu";
const defaultProps = {
	"background": "#181C22",
	"padding": "0px 0 0px 0",
	"fullhd-padding": "0px 0 0px 0"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {
			"position": "relative",
			"z-index": "9",
			"quarkly-title": "Header",
			"width": "100%",
			"margin": "0px 20px 0px 20px",
			"fullhd-margin": "0px 20px 0px 20px"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex",
			"nout-width": "30%",
			"fullhd-width": "30%",
			"md-width": "50%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "200px",
			"src": "https://uploads.quarkly.io/landing/logo-on-dark.svg"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex",
			"nout-width": "70%",
			"fullhd-width": "70%",
			"md-display": "none"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"justify-content": "flex-end"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/",
			"transition": "transform 0.1s ease-in-out 0s;",
			"transform": "translateY(0px)",
			"text-decoration-line": "initial",
			"padding": "6px 16px 6px 16px",
			"color": "--indigo",
			"font": "normal 900 14px/1.5 --fontFamily-googleSourceSansPro",
			"letter-spacing": "2px",
			"border-radius": "100px",
			"fullhd-font": "normal 600 15px/1.5 --fontFamily-googleSourceSansPro",
			"lg-font": "normal 900 13px/1.5 --fontFamily-googleSourceSansPro",
			"margin": "0px 12px 0px 0px",
			"children": "HOME"
		}
	},
	"myNav": {
		"kind": "MyNav",
		"props": {}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "/faq",
			"transition": "transform 0.1s ease-in-out 0s;",
			"transform": "translateY(0px)",
			"text-decoration-line": "initial",
			"padding": "6px 16px 6px 16px",
			"color": "--light",
			"font": "normal 600 14px/1.5 --fontFamily-googleSourceSansPro",
			"letter-spacing": "2px",
			"border-radius": "100px",
			"fullhd-margin": "0px 0px 0px 12px",
			"margin": "0px 0px 0px 12px",
			"fullhd-font": "normal 600 15px/1.5 --fontFamily-googleSourceSansPro",
			"lg-margin": "0px 0px 0px 0px",
			"lg-font": "normal 600 13px/1.5 --fontFamily-googleSourceSansPro",
			"children": "FAQ"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "#",
			"transition": "transform 0.1s ease-in-out 0s;",
			"transform": "translateY(0px)",
			"text-decoration-line": "initial",
			"padding": "6px 22px 6px 22px",
			"color": "--lightD1",
			"font": "normal 600 16px/1.5 --fontFamily-googleSourceSansPro",
			"letter-spacing": "2px",
			"border-radius": "100px",
			"hover-transform": "translateY(-3px)",
			"border-color": "--color-indigo",
			"border-width": "3px",
			"border-style": "solid",
			"margin": "0px 0px 0px 24px",
			"fullhd-margin": "0px 0px 0px 24px",
			"lg-margin": "0px 0px 0px 0px",
			"lg-font": "normal 600 14px/1.5 --fontFamily-googleSourceSansPro",
			"children": "LOG IN"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"href": "#",
			"transition": "transform 0.1s ease-in-out 0s;",
			"transform": "translateY(0px)",
			"text-decoration-line": "initial",
			"padding": "8px 22px 8px 22px",
			"color": "--light",
			"font": "normal 600 16px/1.5 --fontFamily-googleSourceSansPro",
			"letter-spacing": "2px",
			"border-radius": "50px",
			"hover-transform": "translateY(-3px)",
			"margin": "0px 0px 0px 24px",
			"fullhd-margin": "0px 0px 0px 24px",
			"background": "--color-indigo",
			"lg-margin": "0px 0px 0px 12px",
			"lg-font": "normal 600 14px/1.5 --fontFamily-googleSourceSansPro",
			"children": "SIGN UP"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "none",
			"nout-width": "70%",
			"fullhd-width": "70%",
			"md-display": "block",
			"md-width": "50%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"justify-content": "flex-end"
		}
	},
	"categoriesMenu": {
		"kind": "CategoriesMenu",
		"props": {}
	},
	"categoriesMenuOverride": {
		"kind": "Override",
		"props": {
			"slot": "icon",
			"color": "#ffffff"
		}
	}
};

const Shapka = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			nout-max-width="none"
			nout-width="100%"
			max-width="none"
			width="100%"
			margin="0px 20px 0px 0px"
		/>
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				{"        "}
				<Image {...override("image")} />
				{"    "}
			</StackItem>
			{"    "}
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				{"        "}
				<Link {...override("link")} />
				<MyNav {...override("myNav")} />
				<Link {...override("link1")} />
				<Link {...override("link2")} />
				<Link {...override("link3")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem2")}>
				<Override {...override("stackItemOverride2")} />
				<CategoriesMenu {...override("categoriesMenu")}>
					<Override {...override("categoriesMenuOverride")} />
				</CategoriesMenu>
				{"            "}
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(Shapka, { ...Section,
	defaultProps,
	overrides
});
export default Shapka;