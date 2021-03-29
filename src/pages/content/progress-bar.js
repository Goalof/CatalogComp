import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"content/progress-bar"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Shapka />
		<Components.HeroBlock background="#181C22 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/progress-bar4ik.png?v=2020-10-09T02:42:51.024Z) 95% 100%/15% no-repeat">
			<Override slot="text">
				Progress-bar{"\n\n"}
			</Override>
			<Override slot="text1">
				Размещаем индикатор процесса, который представляет собой, как прямоугольную область, так и круг, который заполняется по мере выполнения какой-либо задачи, например, загрузки файла.{" "}
				<br />
				<br />
				Индикатор процесса заполняется слева направо и исходя из тех данных которые, вы в него установите
			</Override>
		</Components.HeroBlock>
		<Components.InfoComp>
			<Override slot="text1">
				Size: 3.52 kb |{"\n\n"}
			</Override>
		</Components.InfoComp>
		<Section padding="50px 0 50px 0">
			<Stack gap="--cmp-stack-gap-small">
				{"    "}
				<StackItem width="50%" display="flex" fullhd-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						fullhd-align-items="center"
						fullhd-justify-content="center"
						align-items="center"
						justify-content="center"
					/>
					<Components.Progressbar width="80%" />
					{"            "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					{"        "}
					<Components.Codes width="100%">
						<Override slot="Code Alert">
							Код скопирован в буфер обмена!
						</Override>
						<Override slot="Code Text" lg-font="13px/15px Consolas, &quot;Andale Mono WT&quot;, &quot;Andale Mono&quot;, &quot;Lucida Console&quot;, &quot;Lucida Sans Typewriter&quot;, &quot;DejaVu Sans Mono&quot;, &quot;Bitstream Vera Sans Mono&quot;, &quot;Liberation Mono&quot;, &quot;Nimbus Mono L&quot;, Monaco, &quot;Courier New&quot;, Courier, monospace">
							import React from "react";
							<br />
							import atomize from "@quarkly/atomize";
							<br />
							import &#123; Circle, Line &#125; from "rc-progress";
							<br />
							<br />
							// some component
							<br />
							<br />
							const CSSVarFix = (x) =&gt;
							<br />
							<br />
							{"  "}x.substring(0, 2) === "--" ? `var(--qtheme-color-$&#123;x.substring(2)&#125;)` : x;
							<br />
							<br />
							const Wrapper = atomize.div();
							<br />
							const Indicator = atomize.div();
							<br />
							const CircleProgress = (&#123;
							<br />
							{"  "}percent,
							<br />
							{"  "}font,
							<br />
							{"  "}width,
							<br />
							{"  "}height,
							<br />
							{"  "}"data-qid": dQid,
							<br />
							<br />
							{"  "}...props
							<br />
							<br />
							&#125;) =&gt; &#123;
							<br />
							<br />
							{"  "}return (
							<br />
							<br />
							{"    "}&lt;Wrapper pos="relative" w=&#123;width&#125; h=&#123;height&#125; data-qid=&#123;dQid&#125;&gt;
							<br />
							<br />
							{"      "}&lt;Circle
							<br />
							<br />
							{"        "}style=&#123;&#123; width: "100%", height: "100%" &#125;&#125;
							<br />
							<br />
							{"        "}percent=&#123;percent&#125;
							<br />
							<br />
							{"        "}&#123;...props&#125;
							<br />
							<br />
							{"      "}/&gt;
							<br />
							<br />
							{"      "}&lt;Indicator
							<br />
							<br />
							{"        "}d="flex"
							<br />
							<br />
							{"        "}h="100%"
							<br />
							<br />
							{"        "}w="100%"
							<br />
							<br />
							{"        "}pos="absolute"
							<br />
							<br />
							{"        "}t="0"
							<br />
							<br />
							{"        "}jc="center"
							<br />
							<br />
							{"        "}ai="center"
							<br />
							<br />
							{"        "}ta="center"
							<br />
							<br />
							{"        "}font=&#123;font&#125;
							<br />
							<br />
							{"      "}&gt;
							<br />
							<br />
							{"        "}&lt;div&gt;&#123;percent&#125;%&lt;/div&gt;
							<br />
							<br />
							{"      "}&lt;/Indicator&gt;
							<br />
							<br />
							{"    "}&lt;/Wrapper&gt;
							<br />
							<br />
							{"  "});
							<br />
							<br />
							&#125;;
							<br />
							<br />
							<br />
							const ComponentWithYourCustomLogic = (&#123;
							<br />
							<br />
							{"  "}type,
							<br />
							<br />
							{"  "}strokeColor,
							<br />
							<br />
							{"  "}trailColor,
							<br />
							<br />
							{"  "}...props
							<br />
							<br />
							&#125;) =&gt; &#123;
							<br />
							<br />
							{"  "}const Progress = type === "circle" ? CircleProgress : Line;
							<br />
							<br />
							<br />
							{"  "}return (
							<br />
							<br />
							{"    "}&lt;Progress
							<br />
							<br />
							{"      "}strokeColor=&#123;CSSVarFix(strokeColor)&#125;
							<br />
							<br />
							{"      "}trailColor=&#123;CSSVarFix(trailColor)&#125;
							<br />
							<br />
							{"      "}&#123;...props&#125;
							<br />
							<br />
							{"    "}/&gt;
							<br />
							<br />
							{"  "});
							<br />
							<br />
							&#125;;
							<br />
							<br />
							<br />
							export default atomize(ComponentWithYourCustomLogic)(
							<br />
							<br />
							{"  "}&#123;
							<br />
							<br />
							{"    "}title: "Progress",
							<br />
							<br />
							{"    "}description: &#123;
							<br />
							<br />
							{"      "}en: "Display the current progress"
							<br />
							<br />
							{"    "}&#125;,
							<br />
							<br />
							{"    "}propInfo: &#123;
							<br />
							<br />
							{"      "}// Stroke
							<br />
							<br />
							{"      "}strokeColor: &#123;
							<br />
							<br />
							{"        "}title: "Color",
							<br />
							<br />
							{"        "}control: "color",
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Stroke color"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Stroke"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}strokeWidth: &#123;
							<br />
							<br />
							{"        "}title: "Width",
							<br />
							<br />
							{"        "}type: "number",
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Width of stroke"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Stroke"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}strokeLinecap: &#123;
							<br />
							<br />
							{"        "}title: "Linecap",
							<br />
							<br />
							{"        "}control: "select",
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "The shape to be used at the end of the progress bar"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}variants: ["round", "butt", "square"],
							<br />
							<br />
							{"        "}category: "Stroke"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}// Trail
							<br />
							<br />
							{"      "}trailWidth: &#123;
							<br />
							<br />
							{"        "}title: "Width",
							<br />
							<br />
							{"        "}type: "number",
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Width of the trail stroke"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Trail"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}trailColor: &#123;
							<br />
							<br />
							{"        "}title: "Color",
							<br />
							<br />
							{"        "}control: "color",
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Color for lighter trail stroke"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Trail"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}// Gap
							<br />
							<br />
							{"      "}gapDegree: &#123;
							<br />
							<br />
							{"        "}title: "Degree",
							<br />
							<br />
							{"        "}type: "number",
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "The gap degree of half circle"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Gap"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}gapPosition: &#123;
							<br />
							<br />
							{"        "}title: "Position",
							<br />
							<br />
							{"        "}control: "select",
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "The gap position"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}variants: ["top", "bottom", "left", "right"],
							<br />
							<br />
							{"        "}category: "Gap"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}// Other
							<br />
							<br />
							{"      "}percent: &#123;
							<br />
							<br />
							{"        "}title: "Percent",
							<br />
							<br />
							{"        "}type: "number",
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "The percent of the progress"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Progress"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}type: &#123;
							<br />
							<br />
							{"        "}control: "select",
							<br />
							<br />
							{"        "}title: "Type",
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Type of progress"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}variants: ["circle", "line"],
							<br />
							<br />
							{"        "}category: "Progress"
							<br />
							<br />
							{"      "}&#125;
							<br />
							<br />
							{"    "}&#125;
							<br />
							<br />
							{"  "}&#125;,
							<br />
							<br />
							{"  "}&#123;
							<br />
							<br />
							{"    "}strokeWidth: 3,
							<br />
							<br />
							{"    "}strokeColor: "--primary",
							<br />
							<br />
							{"    "}trailWidth: 3,
							<br />
							<br />
							{"    "}trailColor: "--lightD2",
							<br />
							<br />
							{"    "}strokeLinecap: "round",
							<br />
							<br />
							{"    "}gapDegree: 0,
							<br />
							<br />
							{"    "}gapPosition: "top",
							<br />
							<br />
							{"    "}percent: 25,
							<br />
							<br />
							{"    "}//
							<br />
							<br />
							{"    "}width: "25%",
							<br />
							<br />
							{"    "}type: "line",
							<br />
							<br />
							{"    "}//
							<br />
							<br />
							{"    "}font: "3em --fontFamily-sans"
							<br />
							<br />
							{"  "}&#125;
							<br />
							<br />
							);
							<br />
							{"\n\n\n"}
						</Override>
					</Components.Codes>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="55px 0 65px 0" background="--color-lightD2">
			<Override slot="SectionContent" align-items="center" justify-content="center" />
			<Stack width="100%">
				{"        "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" justify-content="center" />
					{"        "}
					<Text font="--headline3" margin="0px 0px 20px 0px" display="inline-block" color="--dark">
						Props
					</Text>
					<Components.Table
						margin="0 0px 0 0px"
						columns="Name,Desription,Type,Value"
						data="Precent;Степень заполненности индикатора;Input;,Type;Вариации отображения индикатора;Checkbox,LineCap;Закругления полосы состояния;Checkbox"
						border-radius="0px"
						box-shadow="--l"
						font="--base"
						lg-font="normal 300 13px/1.5 Source Sans Pro, sans-serif"
						md-font="normal 300 12px/1.5 Source Sans Pro, sans-serif"
						sm-font="normal 300 12px/1.5 Source Sans Pro, sans-serif"
					/>
					<Components.EmbedHTML />
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Components.BlockPopular />
		<Section
			background-color="--dark"
			text-align="center"
			padding="23px 0px 23px 0px"
			background="#1A2029"
			quarkly-title="Footer"
		>
			<Stack>
				{"    "}
				<StackItem display="flex" quarkly-title="Logo" md-width="100%" width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Image width="28px" height="28px" src="http://artemzhigalin.ru/wp-content/uploads/2020/08/default-website-quarkly-logo-grey.svg" />
					<Link
						href="https://quarkly.io/"
						font="--base"
						color="--light"
						opacity="0.6"
						text-decoration-line="initial"
						text-align="left"
						margin="1px 0px 0px 10px"
						hover-text-decoration-line="underline"
					>
						Made on Quarkly
					</Link>
					{"        "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});