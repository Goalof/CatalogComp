import React from "react";
import { useOverrides, Override, StackItem, Stack, Section } from "@quarkly/components";
import { Text, Link, Icon, Box } from "@quarkly/widgets";
import VideoinYouTube from "./VideoinYouTube";
import Popup from "./Popup";
import { BsFillCircleFill } from "react-icons/bs";
const defaultProps = {
	"padding": "150px 0 190px 0",
	"quarkly-title": "Hero",
	"background": "#181C22 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/pricing.png?v=2020-10-09T02:39:28.037Z) 99% 100%/15% no-repeat",
	"fullhd-padding": "190px 0 190px 0",
	"fullhd-background": "#181C22,url(https://uploads.quarkly.io/5f6b1f4c0708a3001ea41643/images/5.png?v=2020-09-27T14:18:06.454Z) 98% 106%/15% no-repeat",
	"nout-padding": "140px 0 140px 0",
	"md-padding": "130px 0 130px 0"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {
			"gap": "--cmp-stack-gap-small",
			"width": "100%",
			"margin": "0px 0px 0px 0px",
			"nout-margin": "0px 0px 0px 0px"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "40%",
			"display": "flex",
			"fullhd-width": "46%",
			"md-width": "100%",
			"md-align-items": "center",
			"md-justify-content": "center"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"justify-content": "center",
			"padding": "0px 0px 0px 0px",
			"align-items": "flex-start",
			"fullhd-position": "relative",
			"fullhd-z-index": "2",
			"md-align-items": "center"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--headline1",
			"margin": "0px 0px 20px 0px",
			"display": "inline-block",
			"color": "--light",
			"width": "100%",
			"md-text-align": "center",
			"children": <>
				Price{"\n\n"}
			</>
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0px 0px 50px 0px",
			"display": "inline-block",
			"color": "--light",
			"width": "100%",
			"md-text-align": "center",
			"children": <>
				При помощи данного компонента, вы можете разместить список ваших товаров или услуг с кратким описанием и ценой{"\n\n"}
			</>
		}
	},
	"popup": {
		"kind": "Popup",
		"props": {}
	},
	"popupOverride": {
		"kind": "Override",
		"props": {
			"slot": "button",
			"background": "--color-dark",
			"font": "600 18px --fontFamily-googleSourceSansPro",
			"letter-spacing": "1px",
			"border-radius": "50px",
			"border-width": "5px",
			"border-color": "--color-indigo",
			"border-style": "solid",
			"padding": "16px 24px 16px 24px",
			"transition": "transform 0.2s ease-in-out 0s;",
			"transform": "translateY(0px)",
			"hover-transform": "translateY(-8px)",
			"children": "Installation FAQ"
		}
	},
	"section": {
		"kind": "Section",
		"props": {
			"padding": "40px 0 60px 0",
			"background": "--color-indigo"
		}
	},
	"stack1": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "55%",
			"display": "flex",
			"sm-width": "100%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"justify-content": "center",
			"align-items": "flex-start"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--headline2",
			"margin": "0px 0px 26px 0px",
			"display": "inline-block",
			"color": "--light",
			"nout-font": "normal 600 36px/1.2 Source Sans Pro, sans-serif",
			"lg-font": "normal 600 24px/1.2 Source Sans Pro, sans-serif",
			"md-font": "normal 600 18px/1.2 Source Sans Pro, sans-serif",
			"children": "Инструкции по добавлению кода"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"font": "--headline4",
			"margin": "0px 0px 30px 0px",
			"display": "inline-block",
			"color": "--light",
			"nout-font": "500 16px/1.5 Source Sans Pro, sans-serif",
			"lg-font": "500 14px/1.5 Source Sans Pro, sans-serif",
			"md-font": "500 13px/1.5 Source Sans Pro, sans-serif",
			"children": <>
				Чтобы установить компонент вам нужно во вкладке "Сomponents",{" "}
				<br />
				в разделе "Project" добавить свой компонент и установить код{" "}
				<br />
				необходимого компонента в открывшемся окне
			</>
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "#",
			"text-decoration-line": "initial",
			"color": "--dark",
			"padding": "10px 22px",
			"border-radius": "8px",
			"text-transform": "uppercase",
			"font": "--headline4",
			"letter-spacing": "1px",
			"transition": "transform 0.1s ease-in-out 0s;",
			"transform": "translateY(0px)",
			"hover-transform": "translateY(-2px)",
			"background": "--color-light",
			"text-align": "center",
			"nout-font": "normal 600 17px/1.5 --fontFamily-googleSourceSansPro",
			"lg-font": "500 15px/1.5 Source Sans Pro, sans-serif",
			"md-font": "500 13px/1.5 Source Sans Pro, sans-serif",
			"children": "Посмотреть инструкцию"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "45%",
			"display": "flex",
			"sm-width": "100%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"nout-justify-content": "center"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"font": "--headline3",
			"margin": "0px 0px 26px 0px",
			"display": "inline-block",
			"color": "--light",
			"lg-font": "normal 500 25px/1.2 Source Sans Pro, sans-serif",
			"md-font": "normal 500 18px/1.2 Source Sans Pro, sans-serif",
			"children": "Видео-инструкция"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"height": "15px",
			"background": "--color-light",
			"display": "flex",
			"align-items": "center",
			"padding": "0px 0px 0px 5px"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "bs",
			"icon": BsFillCircleFill,
			"color": "#fc605c",
			"size": "8px"
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "bs",
			"icon": BsFillCircleFill,
			"color": "#fdbc40",
			"size": "8px",
			"margin": "0px 0px 0px 2px"
		}
	},
	"icon2": {
		"kind": "Icon",
		"props": {
			"category": "bs",
			"icon": BsFillCircleFill,
			"color": "#34c749",
			"size": "8px",
			"margin": "0px 0px 0px 2px"
		}
	},
	"videoinYouTube": {
		"kind": "VideoinYouTube",
		"props": {
			"src": "https://www.youtube.com/watch?v=zR0CZ3PXmPo"
		}
	}
};

const HeroNew = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" flex-direction="row" align-items="center" />
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				{"        "}
				<Text {...override("text")} />
				<Text {...override("text1")} />
				<Popup {...override("popup")}>
					<Override {...override("popupOverride")} />
					<Section {...override("section")}>
						<Stack {...override("stack1")}>
							{"    "}
							<StackItem {...override("stackItem1")}>
								<Override {...override("stackItemOverride1")} />
								{"        "}
								<Text {...override("text2")} />
								<Text {...override("text3")} />
								<Link {...override("link")} />
								{"    "}
							</StackItem>
							{"    "}
							<StackItem {...override("stackItem2")}>
								<Override {...override("stackItemOverride2")} />
								{"        "}
								<Text {...override("text4")} />
								<Box {...override("box")}>
									<Icon {...override("icon")} />
									<Icon {...override("icon1")} />
									<Icon {...override("icon2")} />
								</Box>
								<VideoinYouTube {...override("videoinYouTube")} />
								{"    "}
							</StackItem>
						</Stack>
					</Section>
				</Popup>
				{"    "}
			</StackItem>
			{"    "}
		</Stack>
		{children}
	</Section>;
};

Object.assign(HeroNew, { ...Section,
	defaultProps,
	overrides
});
export default HeroNew;