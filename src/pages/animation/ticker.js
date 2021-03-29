import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { BsFillCircleFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"animation/ticker"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Shapka />
		<Components.HeroBlock background="#181C22 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/4.png?v=2020-10-08T09:53:06.470Z) 98% 98%/15% no-repeat">
			<Override slot="text">
				Ticker{"\n\n"}
			</Override>
			<Override slot="text1">
				Эта бегущая строка, в которой вы можете написать любой текст и выбрать скорость прокрутки и направление текста.{"\n\n"}
			</Override>
		</Components.HeroBlock>
		<Components.InfoComp>
			<Override slot="text1">
				Size: 1.6 kb |{"\n\n"}
			</Override>
		</Components.InfoComp>
		<Section padding="50px 0 50px 0">
			<Stack gap="--cmp-stack-gap-small">
				{"    "}
				<StackItem width="40%" display="flex" fullhd-width="40%" md-width="100%">
					<Override
						slot="StackItemContent"
						fullhd-align-items="center"
						fullhd-justify-content="center"
						align-items="center"
						justify-content="center"
					/>
					{"        "}
					<Components.Ticker width="80%" move="enable" mode="chain" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="60%" display="flex" md-width="100%">
					{"        "}
					<Components.Codes width="100%">
						<Override slot="Code Alert">
							Код скопирован в буфер обмена!
						</Override>
						<Override slot="Code Text" lg-font="13px/15px Consolas, &quot;Andale Mono WT&quot;, &quot;Andale Mono&quot;, &quot;Lucida Console&quot;, &quot;Lucida Sans Typewriter&quot;, &quot;DejaVu Sans Mono&quot;, &quot;Bitstream Vera Sans Mono&quot;, &quot;Liberation Mono&quot;, &quot;Nimbus Mono L&quot;, Monaco, &quot;Courier New&quot;, Courier, monospace">
							import React from "react";
							<br />
							import Ticker from "react-ticker";
							<br />
							import &#123; useOverrides &#125; from "@quarkly/components";
							<br />
							import &#123; Box, Text &#125; from "@quarkly/widgets";
							<br />
							<br />
							const overrides = &#123;
							<br />
							{"  "}Text: &#123; kind: "Text" &#125;
							<br />
							&#125;;
							<br />
							<br />
							const TickerText = (&#123; speed, direction, mode, move, ...props &#125;) =&gt; &#123;
							<br />
							{"  "}const &#123; override, rest &#125; = useOverrides(props, overrides);
							<br />
							<br />
							{"  "}return (
							<br />
							{"    "}&lt;Box &#123;...rest&#125;&gt;
							<br />
							{"      "}&lt;Ticker
							<br />
							{"        "}speed=&#123;speed&#125;
							<br />
							{"        "}direction=&#123;direction&#125;
							<br />
							{"        "}mode=&#123;mode&#125;
							<br />
							{"        "}move=&#123;move === "enable"&#125;
							<br />
							{"      "}&gt;
							<br />
							{"        "}&#123;(&#123; index &#125;) =&gt; (
							<br />
							{"          "}&lt;Text &#123;...override("Text")&#125;&gt;
							<br />
							{"            "}&#123;override("Text").children || "Hello World!!! "&#125;
							<br />
							{"          "}&lt;/Text&gt;
							<br />
							{"        "})&#125;
							<br />
							{"      "}&lt;/Ticker&gt;
							<br />
							{"    "}&lt;/Box&gt;
							<br />
							{"  "});
							<br />
							&#125;;
							<br />
							<br />
							const propInfo = &#123;
							<br />
							{"  "}speed: &#123;
							<br />
							{"    "}title: "Speed:",
							<br />
							{"    "}control: "number",
							<br />
							{"    "}type: "number",
							<br />
							{"    "}category: "Main",
							<br />
							{"    "}weight: 1
							<br />
							{"  "}&#125;,
							<br />
							{"  "}direction: &#123;
							<br />
							{"    "}title: "Direction:",
							<br />
							{"    "}control: "select",
							<br />
							{"    "}variants: ["toLeft", "toRight"],
							<br />
							{"    "}type: "string",
							<br />
							{"    "}category: "Main",
							<br />
							{"    "}weight: 1
							<br />
							{"  "}&#125;,
							<br />
							{"  "}mode: &#123;
							<br />
							{"    "}title: "Mode:",
							<br />
							{"    "}control: "select",
							<br />
							{"    "}variants: ["chain", "await", "smooth"],
							<br />
							{"    "}type: "string",
							<br />
							{"    "}category: "Main",
							<br />
							{"    "}weight: 1
							<br />
							{"  "}&#125;,
							<br />
							{"  "}move: &#123;
							<br />
							{"    "}title: "Move:",
							<br />
							{"    "}control: "radio-group",
							<br />
							{"    "}variants: ["enable", "disable"],
							<br />
							{"    "}type: "text",
							<br />
							{"    "}category: "Main",
							<br />
							{"    "}weight: 1
							<br />
							{"  "}&#125;
							<br />
							&#125;;
							<br />
							<br />
							const defaultProps = &#123;
							<br />
							{"  "}speed: "3",
							<br />
							{"  "}direction: "toLeft",
							<br />
							{"  "}mode: "chain",
							<br />
							{"  "}move: "enable"
							<br />
							&#125;;
							<br />
							<br />
							export default Object.assign(TickerText, &#123;
							<br />
							{"  "}title: "TickerText",
							<br />
							{"  "}description: &#123;
							<br />
							{"    "}en: "TickerText component!"
							<br />
							{"  "}&#125;,
							<br />
							{"  "}overrides,
							<br />
							{"  "}propInfo,
							<br />
							{"  "}defaultProps
							<br />
							&#125;);{" \n\n"}
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
						data="Speed;Задать скорость появления текста;Input;,Direction;Выбрать сторону появление текста;Radio,Mood;Не знаю что делает;Radio,Move;Включить\\Отключить анимацию;Radio"
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
		<Section padding="40px 0 60px 0" background="--color-indigo">
			<Stack>
				{"    "}
				<StackItem width="55%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" justify-content="center" align-items="flex-start" />
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 26px 0px"
						display="inline-block"
						color="--light"
						nout-font="normal 600 36px/1.2 Source Sans Pro, sans-serif"
						lg-font="normal 600 24px/1.2 Source Sans Pro, sans-serif"
						md-font="normal 600 18px/1.2 Source Sans Pro, sans-serif"
					>
						Инструкции по добавлению кода
					</Text>
					<Text
						font="--headline4"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="--light"
						nout-font="500 16px/1.5 Source Sans Pro, sans-serif"
						lg-font="500 14px/1.5 Source Sans Pro, sans-serif"
						md-font="500 13px/1.5 Source Sans Pro, sans-serif"
					>
						Чтобы установить компонент вам нужно во вкладке "Сomponents",{" "}
						<br />
						в разделе "Project" добавить свой компонент и установить код{" "}
						<br />
						необходимого компонента в открывшемся окне
					</Text>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--dark"
						padding="10px 22px"
						border-radius="8px"
						text-transform="uppercase"
						font="--headline4"
						letter-spacing="1px"
						transition="transform 0.1s ease-in-out 0s;"
						transform="translateY(0px)"
						hover-transform="translateY(-2px)"
						background="--color-light"
						text-align="center"
						nout-font="normal 600 17px/1.5 --fontFamily-googleSourceSansPro"
						lg-font="500 15px/1.5 Source Sans Pro, sans-serif"
						md-font="500 13px/1.5 Source Sans Pro, sans-serif"
					>
						Посмотреть инструкцию
					</Link>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="45%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" nout-justify-content="center" />
					{"        "}
					<Text
						font="--headline3"
						margin="0px 0px 26px 0px"
						display="inline-block"
						color="--light"
						lg-font="normal 500 25px/1.2 Source Sans Pro, sans-serif"
						md-font="normal 500 18px/1.2 Source Sans Pro, sans-serif"
					>
						Видео-инструкция
					</Text>
					<Box
						height="15px"
						background="--color-light"
						display="flex"
						align-items="center"
						padding="0px 0px 0px 5px"
					>
						<Icon category="bs" icon={BsFillCircleFill} color="#fc605c" size="8px" />
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							color="#fdbc40"
							size="8px"
							margin="0px 0px 0px 2px"
						/>
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							color="#34c749"
							size="8px"
							margin="0px 0px 0px 2px"
						/>
					</Box>
					<Components.YouTubeVideo
						border-width="0px 8px 8px 8px"
						border-style="solid"
						border-color="--color-light"
						height="305px"
						nout-height="auto"
						nout-padding="0px 0px 0px 0px"
						nout-margin="0px 0px 0px 0px"
					/>
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