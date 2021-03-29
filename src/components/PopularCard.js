import React from "react";
import { useOverrides, Override, StackItem } from "@quarkly/components";
import { Text, Link } from "@quarkly/widgets";
const defaultProps = {
	"width": "33.3333%",
	"display": "flex",
	"flex-direction": "column",
	"padding": "16px 0px 16px 16px",
	"md-width": "50%",
	"sm-width": "100%"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "--headline3",
			"color": "--light",
			"margin": "0px 0px 20px 0px",
			"nout-font": "normal 600 30px/1.2 --fontFamily-googleSourceSansPro",
			"lg-font": "normal 500 25px/1.2 Source Sans Pro, sans-serif",
			"children": "Video Playeer"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--desccomp",
			"color": "--light",
			"margin": "0px 0px 0px 0px",
			"nout-font": "--minitxt",
			"children": <Link
				color="--light"
				letter-spacing="1px"
				font="--desccomp"
				text-decoration-line="initial"
				hover-text-decoration-line="underline"
				transition="all 3s ease 0s"
				href="/youtubevideo"
			>
				Перейти
			</Link>
		}
	}
};

const PopularCard = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <StackItem {...rest}>
		<Override
			slot="StackItemContent"
			flex-direction="column"
			background="url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/video.svg?v=2020-09-24T19:38:47.784Z) 95% 100%/70px no-repeat,#1A2029"
			padding="25px 36px"
			border-radius="12px"
			box-shadow="--l"
			justify-content="center"
		/>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		{"            "}
		{children}
	</StackItem>;
};

Object.assign(PopularCard, { ...StackItem,
	defaultProps,
	overrides
});
export default PopularCard;