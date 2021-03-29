import React from "react";
import atomize from "@quarkly/atomize";
import { Circle, Line } from "rc-progress"; // some component

const CSSVarFix = x => x.substring(0, 2) === "--" ? `var(--qtheme-color-${x.substring(2)})` : x;

const Wrapper = atomize.div();
const Indicator = atomize.div();

const CircleProgress = ({
	percent,
	font,
	width,
	height,
	"data-qid": dQid,
	...props
}) => {
	return <Wrapper pos="relative" w={width} h={height} data-qid={dQid}>
		      
		<Circle style={{
			width: "100%",
			height: "100%"
		}} percent={percent} {...props} />
		      
		<Indicator
			d="flex"
			h="100%"
			w="100%"
			pos="absolute"
			t="0"
			jc="center"
			ai="center"
			ta="center"
			font={font}
		>
			        
			<div>
				{percent}
				%
			</div>
			      
		</Indicator>
		    
	</Wrapper>;
};

const ComponentWithYourCustomLogic = ({
	type,
	strokeColor,
	trailColor,
	...props
}) => {
	const Progress = type === "circle" ? CircleProgress : Line;
	return <Progress strokeColor={CSSVarFix(strokeColor)} trailColor={CSSVarFix(trailColor)} {...props} />;
};

export default atomize(ComponentWithYourCustomLogic)({
	title: "Progress",
	description: {
		en: "Display the current progress"
	},
	propInfo: {
		// Stroke
		strokeColor: {
			title: "Color",
			control: "color",
			description: {
				en: "Stroke color"
			},
			category: "Stroke"
		},
		strokeWidth: {
			title: "Width",
			type: "number",
			description: {
				en: "Width of stroke"
			},
			category: "Stroke"
		},
		strokeLinecap: {
			title: "Linecap",
			control: "select",
			description: {
				en: "The shape to be used at the end of the progress bar"
			},
			variants: ["round", "butt", "square"],
			category: "Stroke"
		},
		// Trail
		trailWidth: {
			title: "Width",
			type: "number",
			description: {
				en: "Width of the trail stroke"
			},
			category: "Trail"
		},
		trailColor: {
			title: "Color",
			control: "color",
			description: {
				en: "Color for lighter trail stroke"
			},
			category: "Trail"
		},
		// Gap
		gapDegree: {
			title: "Degree",
			type: "number",
			description: {
				en: "The gap degree of half circle"
			},
			category: "Gap"
		},
		gapPosition: {
			title: "Position",
			control: "select",
			description: {
				en: "The gap position"
			},
			variants: ["top", "bottom", "left", "right"],
			category: "Gap"
		},
		// Other
		percent: {
			title: "Percent",
			type: "number",
			description: {
				en: "The percent of the progress"
			},
			category: "Progress"
		},
		type: {
			control: "select",
			title: "Type",
			description: {
				en: "Type of progress"
			},
			variants: ["circle", "line"],
			category: "Progress"
		}
	}
}, {
	strokeWidth: 3,
	strokeColor: "--primary",
	trailWidth: 3,
	trailColor: "--lightD2",
	strokeLinecap: "round",
	gapDegree: 0,
	gapPosition: "top",
	percent: 25,
	//
	width: "25%",
	type: "line",
	//
	font: "3em --fontFamily-sans"
});