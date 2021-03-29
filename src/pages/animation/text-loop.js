import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"animation/text-loop"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Shapka>
			<Override slot="link1" hover-opacity="0.8" />
		</Components.Shapka>
		<Components.HeroBlock background="#181C22 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/4.png?v=2020-10-08T09:53:06.470Z) 98% 93%/15% no-repeat">
			<Override slot="text1">
				Динамический текст донесет всю необходимую информацию до вашего посетителя сайта.
			</Override>
		</Components.HeroBlock>
		<Section background="#181C22" padding="0px 0 0px 0">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Components.InfoComp>
				<Override slot="text1">
					Size: 3.09 kb |{"\n\n"}
				</Override>
			</Components.InfoComp>
		</Section>
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
					<Components.Textloop width="80%" mask={false} font="600 42px/48px --fontFamily-googleSourceSansPro" />
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
							import React from 'react';
							<br />
							import Loop from 'react-text-loop';
							<br />
							import &#123; useOverrides &#125; from '@quarkly/components';
							<br />
							import &#123; Box, Text &#125; from '@quarkly/widgets';
							<br />
							<br />
							<br />
							const overrides = &#123;
							<br />
							'Before Text': &#123;
							<br />
							{" "}kind: 'Text',
							<br />
							{" "}props: &#123;
							<br />
							{" "}display: 'inline-block'
							<br />
							{"    "}&#125;
							<br />
							{"  "}&#125;,
							<br />
							<br />
							{"  "}'After Text': &#123;
							<br />
							{"    "}kind: 'Text',
							<br />
							{"    "}props: &#123;
							<br />
							{"      "}display: 'inline-block'
							<br />
							<br />
							{"    "}&#125;
							<br />
							<br />
							{"  "}&#125;,
							<br />
							<br />
							{"  "}'Looped Text': &#123;
							<br />
							<br />
							{"    "}kind: 'Text',
							<br />
							<br />
							{"    "}props: &#123;
							<br />
							<br />
							{"      "}display: 'inline-block'
							<br />
							<br />
							{"    "}&#125;
							<br />
							<br />
							{"  "}&#125;,
							<br />
							<br />
							&#125;;
							<br />
							<br />
							<br />
							const TextLoop = (&#123;
							<br />
							<br />
							{"  "}slides,
							<br />
							<br />
							{"  "}interval,
							<br />
							<br />
							{"  "}delay,
							<br />
							<br />
							{"  "}adjustingSpeed,
							<br />
							<br />
							{"  "}fade,
							<br />
							<br />
							{"  "}mask,
							<br />
							<br />
							{"  "}noWrap,
							<br />
							<br />
							{"  "}...props
							<br />
							<br />
							&#125;) =&gt; &#123;
							<br />
							<br />
							{"  "}const &#123; override, rest &#125; = useOverrides(props, overrides);
							<br />
							<br />
							{"  "}const list = slides.length &gt; 0 ? slides.split(',').reverse() : [];
							<br />
							<br />
							{"  "}
							<br />
							<br />
							{"  "}return (
							<br />
							<br />
							{"    "}&lt;Box
							<br />
							<br />
							{"      "}&#123;...rest&#125;
							<br />
							<br />
							{"      "}
							<br />
							<br />
							{"      "}margin="40px 0"
							<br />
							<br />
							{"      "}font="--headline2"
							<br />
							<br />
							{"    "}&gt;
							<br />
							<br />
							{"      "}&lt;Text
							<br />
							<br />
							{"        "}&#123;...override('Before Text')&#125;
							<br />
							<br />
							{"      "}&gt;
							<br />
							<br />
							{"        "}&#123;override('Before Text').children || 'The'&#125;
							<br />
							<br />
							{"      "}&lt;/Text&gt;
							<br />
							<br />
							{"      "}&#123;' '&#125;
							<br />
							<br />
							{"      "}&lt;Text
							<br />
							<br />
							{"        "}&#123;...override('Looped Text')&#125;
							<br />
							<br />
							{"        "}color="--primary"
							<br />
							<br />
							{"      "}&gt;
							<br />
							<br />
							{"        "}&lt;Loop
							<br />
							<br />
							{"          "}interval=&#123;+interval&#125;
							<br />
							<br />
							{"          "}delay=&#123;+delay&#125;
							<br />
							<br />
							{"          "}adjustingSpeed=&#123;+adjustingSpeed&#125;
							<br />
							<br />
							{"          "}fade=&#123;fade&#125;
							<br />
							<br />
							{"          "}mask=&#123;mask&#125;
							<br />
							<br />
							{"          "}noWrap=&#123;noWrap&#125;
							<br />
							<br />
							{"        "}&gt;
							<br />
							<br />
							{"          "}&#123; list.map(item =&gt; (&lt;span&gt;&#123;item&#125;&lt;/span&gt;)) &#125;
							<br />
							<br />
							{"        "}&lt;/Loop&gt;
							<br />
							<br />
							{"      "}&lt;/Text&gt;
							<br />
							<br />
							{"      "}&#123;' '&#125;
							<br />
							<br />
							{"      "}&lt;Text
							<br />
							<br />
							{"        "}&#123;...override('After Text')&#125;
							<br />
							<br />
							{"      "}&gt;
							<br />
							<br />
							{"        "}&#123;override('After Text').children || 'website builder!'&#125;
							<br />
							<br />
							{"      "}&lt;/Text&gt;
							<br />
							<br />
							{"    "}&lt;/Box&gt;
							<br />
							<br />
							{"  "});
							<br />
							<br />
							&#125;;
							<br />
							<br />
							<br />
							const propInfo = &#123;
							<br />
							<br />
							{"  "}slides: &#123;
							<br />
							<br />
							{"    "}title: 'Список слайдов:',
							<br />
							<br />
							{"    "}control: 'text',
							<br />
							<br />
							{"    "}type: 'string',
							<br />
							<br />
							{"    "}multiply: true,
							<br />
							<br />
							{"    "}category: 'Slides',
							<br />
							<br />
							{"    "}weight: 1,
							<br />
							<br />
							{"  "}&#125;,
							<br />
							<br />
							{"  "}interval: &#123;
							<br />
							<br />
							{"    "}title: 'Интервал смены слайдов:',
							<br />
							<br />
							{"    "}control: 'number',
							<br />
							<br />
							{"    "}type: 'number',
							<br />
							<br />
							{"    "}category: 'Params',
							<br />
							<br />
							{"    "}weight: 1,
							<br />
							<br />
							{"  "}&#125;,
							<br />
							<br />
							{"  "}delay: &#123;
							<br />
							<br />
							{"    "}title: 'Задержка перед началом анимации:',
							<br />
							<br />
							{"    "}control: 'number',
							<br />
							<br />
							{"    "}type: 'number',
							<br />
							<br />
							{"    "}category: 'Params',
							<br />
							<br />
							{"    "}weight: 1,
							<br />
							<br />
							{"  "}&#125;,
							<br />
							<br />
							{"  "}adjustingSpeed: &#123;
							<br />
							<br />
							{"    "}title: 'Скорость смены слайдов:',
							<br />
							<br />
							{"    "}control: 'number',
							<br />
							<br />
							{"    "}type: 'number',
							<br />
							<br />
							{"    "}category: 'Params',
							<br />
							<br />
							{"    "}weight: 1,
							<br />
							<br />
							{"  "}&#125;,
							<br />
							<br />
							{"  "}fade: &#123;
							<br />
							<br />
							{"    "}title: 'Анимация появления и скрытия:',
							<br />
							<br />
							{"    "}control: 'checkbox',
							<br />
							<br />
							{"    "}type: 'boolean',
							<br />
							<br />
							{"    "}category: 'Params',
							<br />
							<br />
							{"    "}weight: 1,
							<br />
							<br />
							{"  "}&#125;,
							<br />
							<br />
							{"  "}mask: &#123;
							<br />
							<br />
							{"    "}title: 'Скрытие анимации на границе:',
							<br />
							<br />
							{"    "}control: 'checkbox',
							<br />
							<br />
							{"    "}type: 'boolean',
							<br />
							<br />
							{"    "}category: 'Params',
							<br />
							<br />
							{"    "}weight: 1,
							<br />
							<br />
							{"  "}&#125;,
							<br />
							<br />
							{"  "}noWrap: &#123;
							<br />
							<br />
							{"    "}title: 'Запретить перенос текста:',
							<br />
							<br />
							{"    "}control: 'checkbox',
							<br />
							<br />
							{"    "}type: 'boolean',
							<br />
							<br />
							{"    "}category: 'Params',
							<br />
							<br />
							{"    "}weight: 1,
							<br />
							<br />
							{"  "}&#125;,
							<br />
							<br />
							&#125;;
							<br />
							<br />
							<br />
							const defaultProps = &#123;
							<br />
							<br />
							{"  "}slides: 'coolest,fastest,easiest',
							<br />
							<br />
							{"  "}interval: '1500',
							<br />
							<br />
							{"  "}delay: '0',
							<br />
							<br />
							{"  "}adjustingSpeed: '150',
							<br />
							<br />
							{"  "}fade: true,
							<br />
							<br />
							{"  "}mask: false,
							<br />
							<br />
							{"  "}noWrap: true,
							<br />
							<br />
							&#125;
							<br />
							<br />
							<br />
							export default Object.assign(TextLoop, &#123;
							<br />
							<br />
							{"  "}title: 'TextLoop',
							<br />
							<br />
							{"  "}description: &#123;
							<br />
							<br />
							{"    "}en: 'Awesome component!',
							<br />
							<br />
							{"    "}ru: 'Потрясающий компонент!',
							<br />
							<br />
							{"  "}&#125;,
							<br />
							<br />
							{"  "}overrides,
							<br />
							<br />
							{"  "}propInfo,
							<br />
							<br />
							{"  "}defaultProps,
							<br />
							<br />
							&#125;);
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
						data="Slides;Установить текст который будет отображаться в слайде;Input;"
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