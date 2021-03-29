import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"content/price"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Shapka />
		<Components.HeroNew>
			<Override slot="text1">
				При помощи данного компонента, вы можете разместить список ваших товаров или услуг с кратким описанием и ценой{"\n\n"}
			</Override>
		</Components.HeroNew>
		<Components.InfoComp>
			<Override slot="text1">
				Size: 11.3 kb |
			</Override>
		</Components.InfoComp>
		<Section padding="50px 0 50px 0">
			<Stack gap="--cmp-stack-gap-small">
				{"    "}
				<StackItem width="100%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						fullhd-align-items="center"
						fullhd-justify-content="center"
						align-items="center"
						justify-content="center"
					/>
					<Components.Price design="vertical" />
					{"            "}
				</StackItem>
				{"    "}
				<StackItem width="100%" display="flex" md-width="100%">
					{"        "}
					<Components.Codes width="100%">
						<Override slot="Code Alert">
							Код скопирован в буфер обмена!
						</Override>
						<Override slot="Code Text" lg-font="13px/15px Consolas, &quot;Andale Mono WT&quot;, &quot;Andale Mono&quot;, &quot;Lucida Console&quot;, &quot;Lucida Sans Typewriter&quot;, &quot;DejaVu Sans Mono&quot;, &quot;Bitstream Vera Sans Mono&quot;, &quot;Liberation Mono&quot;, &quot;Nimbus Mono L&quot;, Monaco, &quot;Courier New&quot;, Courier, monospace">
							import React from 'react';
							<br />
							import &#123; useOverrides &#125; from '@quarkly/components';
							<br />
							import &#123; Box, Text, Button &#125; from '@quarkly/widgets';
							<br />
							<br />
							const overrides = &#123;
							<br />
							{"    "}'Column': &#123; kind: 'Box' &#125;,
							<br />
							{"    "}'Column Title': &#123; kind: 'Text' &#125;,
							<br />
							{"    "}'Column Price': &#123; kind: 'Text' &#125;,
							<br />
							{"    "}'Column Descr': &#123; kind: 'Text' &#125;,
							<br />
							{"    "}'Column Button': &#123; kind: 'Button' &#125;,
							<br />
							&#125;;
							<br />
							<br />
							const PriceList = (&#123;
							<br />
							{"    "}size,
							<br />
							{"    "}show,
							<br />
							{"    "}height,
							<br />
							{"    "}design,
							<br />
							{"    "}active,
							<br />
							{"    "}...props
							<br />
							&#125;) =&gt; &#123;
							<br />
							{"    "}Array(+size || 1).fill().map((item, numb) =&gt; &#123;
							<br />
							{"        "}overrides[`Column $&#123;numb&#125;`] = &#123; 'kind': 'Box' &#125;
							<br />
							{"        "}overrides[`Column $&#123;numb&#125; Title`] = &#123; 'kind': 'Text' &#125;
							<br />
							{"        "}overrides[`Column $&#123;numb&#125; Price`] = &#123; 'kind': 'Text' &#125;
							<br />
							{"        "}overrides[`Column $&#123;numb&#125; Descr`] = &#123; 'kind': 'Text' &#125;
							<br />
							{"        "}overrides[`Column ${numb} Button`] = { 'kind': 'Button' }{" "}
							<br />
							{"    "}&#125;);
							<br />
							{"    "}
							<br />
							{"  "}const &#123; override, rest &#125; = useOverrides(props, overrides);
							<br />
							{"    "}
							<br />
							{"    "}size = +size;
							<br />
							{"    "}show = +show;
							<br />
							{"    "}active = +active;
							<br />
							{"    "}
							<br />
							{"    "}return (
							<br />
							{"        "}&lt;Box
							<br />
							{"      "}&#123;...rest&#125;
							<br />
							{"      "}
							<br />
							{"            "}width="100%"
							<br />
							{"            "}max-width="100%"
							<br />
							{"            "}box-sizing="border-box"
							<br />
							{"            "}position="relative"
							<br />
							{"          "}overflow="hidden"
							<br />
							{"    "}&gt;
							<br />
							{"            "}&lt;Box
							<br />
							{"                "}position="static"
							<br />
							{"               "}flex-direction=&#123;design === 'vertical' ? 'row' : 'column'&#125;
							<br />
							{"                "}display="flex"
							<br />
							{"                "}
							<br />
							{"                "}max-width=&#123;design === 'vertical' && show !== size ? '100vw' : 'initial'&#125;
							<br />
							{"                "}max-height=&#123;design === 'horizontal' && height ? `$&#123;height&#125;px` : 'initial'&#125;
							<br />
							{"                "}overflow-x="auto"
							<br />
							{"                "}overflow-y=&#123;design === 'horizontal' && height ? 'auto' : 'initial'&#125;
							<br />
							{"            "}&gt;
							<br />
							{"                "}&#123; Array(+size || 1).fill().map((item, numb) =&gt; (
							<br />
							{"                    "}&lt;Box
							<br />
							{"                        "}padding=&#123;design === 'vertical' ? '32px 40px 48px' : '24px 32px'&#125;
							<br />
							{"                        "}width=&#123;design === 'vertical' ? `calc($&#123;100 / show&#125;% - $&#123;1 / show&#125;px)` : 'fit-content'&#125;
							<br />
							{"                        "}border="1px solid --color-lightD2"
							<br />
							{"                        "}border-right=&#123;design === 'vertical' && numb !== size ? 'none' : ''&#125;
							<br />
							{"                        "}border-bottom=&#123;design === 'horizontal' && numb !== size ? 'none' : ''&#125;
							<br />
							{"                        "}flex="1 0 auto"
							<br />
							{"                        "}box-sizing="border-box"
							<br />
							{"                        "}text-align="center"
							<br />
							{"                        "}
							<br />
							{"                        "}background=&#123;numb === active ? '--color-primary' : 'none'&#125;
							<br />
							{"                        "}border-color=&#123;numb === active ? '--color-primary' : ''&#125;
							<br />
							{"                        "}
							<br />
							{"                        "}align-items=&#123;design === 'vertical' ? 'space-between' : 'center'&#125;
							<br />
							{"                        "}justify-content=&#123;design === 'vertical' ? 'space-between' : 'center'&#125;
							<br />
							{"                        "}flex-direction=&#123;design === 'vertical' ? 'column' : 'row'&#125;
							<br />
							{"                        "}display="flex"
							<br />
							{"                        "}
							<br />
							{"                        "}md-width=&#123;design === 'vertical' ? `$&#123;size === 2 ? 50 : 42.5&#125;%` : 'fit-content'&#125;
							<br />
							{"                        "}sm-width=&#123;design === 'vertical' ? `$&#123;size === 1 ? 100 : 75&#125;%` : 'fit-content'&#125;
							<br />
							{"                        "}
							<br />
							{"                        "}min-width=&#123;design === 'horizontal' ? '100%' : ''&#125;
							<br />
							{"                        "}
							<br />
							{"                        "}&#123;...override('Column', `Column $&#123;numb&#125;`)&#125;
							<br />
							{"                    "}&gt;
							<br />
							{"                        "}&lt;Text
							<br />
							{"                            "}font-size="20px"
							<br />
							{"                            "}line-height="1.5"
							<br />
							{"                            "}font-weight="500"
							<br />
							{"                            "}margin-right=&#123;design === 'horizontal' ? '36px' : '0'&#125;
							<br />
							{"                            "}margin-bottom=&#123;design === 'vertical' ? '16px' : '16px'&#125;
							<br />
							{"                            "}color=&#123;numb === active ? '--color-light' : '--color-dark'&#125;
							<br />
							{"                            "}flex="1 0 auto"
							<br />
							{"                            "}
							<br />
							{"                            "}&#123;...override('Column Title', `Column $&#123;numb&#125; Title`)&#125;
							<br />
							{"                        "}&gt;
							<br />
							{"                            "}&#123;override(`Column $&#123;numb&#125; Title`).children || 'Awesome product'&#125;
							<br />
							{"                        "}&lt;/Text&gt;
							<br />
							{"                        "}&lt;Text
							<br />
							{"                            "}font-size="48px"
							<br />
							{"                            "}line-height="1"
							<br />
							{"                            "}font-weight="700"
							<br />
							{"                            "}margin-right=&#123;design === 'horizontal' ? '36px' : '0'&#125;
							<br />
							{"                            "}margin-bottom=&#123;design === 'vertical' ? '36px' : '16px'&#125;
							<br />
							{"                            "}color=&#123;numb === active ? '--color-light' : '--color-dark'&#125;
							<br />
							{"                            "}flex="1 0 auto"
							<br />
							{"                            "}
							<br />
							{"                            "}&#123;...override('Column Price', `Column $&#123;numb&#125; Price`)&#125;
							<br />
							{"                        "}&gt;
							<br />
							{"                            "}&#123;override(`Column $&#123;numb&#125; Price`).children || `\$$&#123;numb&#125;0`&#125;
							<br />
							{"                        "}&lt;/Text&gt;
							<br />
							{"                        "}&lt;Text
							<br />
							{"                            "}font-size="14px"
							<br />
							{"                            "}line-height="1.5"
							<br />
							{"                            "}font-weight="300"
							<br />
							{"                            "}margin="0 auto"
							<br />
							{"                            "}margin-bottom=&#123;design === 'vertical' ? '48px' : '16px'&#125;
							<br />
							{"                            "}min-width=&#123;design === 'horizontal' ? '180px' : ''&#125;
							<br />
							{"                            "}max-width=&#123;design === 'vertical' ? '180px' : '100%'&#125;
							<br />
							{"                            "}color=&#123;numb === active ? '--color-light' : '--color-dark'&#125;
							<br />
							{"                            "}flex="1 1 auto"
							<br />
							{"                            "}opacity=".8"
							<br />
							{"                            "}
							<br />
							{"                            "}&#123;...override('Column Descr', `Column $&#123;numb&#125; Descr`)&#125;
							<br />
							{"                        "}&gt;
							<br />
							{"                            "}&#123;override(`Column $&#123;numb&#125; Descr`).children || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'&#125;
							<br />
							{"                        "}&lt;/Text&gt;
							<br />
							{"                        "}&lt;Button
							<br />
							{"                            "}width="100%"
							<br />
							{"                            "}max-width="180px"
							<br />
							{"                            "}font-weight="500"
							<br />
							{"                            "}border="1px solid --color-lightD2"
							<br />
							{"                            "}outline="none"
							<br />
							{"                            "}box-shadow="none"
							<br />
							{"                            "}flex="1 0 auto"
							<br />
							{"                            "}
							<br />
							{"                            "}color=&#123;numb === active ? '--color-dark' : '--color-primary'&#125;
							<br />
							{"                            "}background=&#123;numb === active ? '--color-secondary' : 'none'&#125;
							<br />
							{"                            "}border-color=&#123;numb === active ? '--color-secondary' : 'none'&#125;
							<br />
							{"                            "}
							<br />
							{"                            "}margin-top=&#123;design === 'vertical' ? '48px' : '0'&#125;
							<br />
							{"                            "}margin-left=&#123;design === 'horizontal' ? '48px' : 'auto'&#125;
							<br />
							{"                            "}margin-right=&#123;design === 'horizontal' ? '0' : 'auto'&#125;
							<br />
							{"                            "}transition="color .15s ease, opacity .15s ease"
							<br />
							{"                            "}
							<br />
							{"                            "}hover-color="--color-dark"
							<br />
							{"                            "}hover-opacity=".9"
							<br />
							{"                            "}
							<br />
							{"                            "}&#123;...override('Column Button', `Column $&#123;numb&#125; Button`)&#125;
							<br />
							{"                        "}&gt;
							<br />
							{"                            "}&#123;override(`Column $&#123;numb&#125; Button`).children || 'Buy'&#125;
							<br />
							{"                        "}&lt;/Button&gt;
							<br />
							{"                    "}&lt;/Box&gt;
							<br />
							{"                "}))&#125;
							<br />
							{"            "}&lt;/Box&gt;
							<br />
							{"        "}&lt;/Box&gt;
							<br />
							{"    "});
							<br />
							&#125;;
							<br />
							<br />
							const propInfo = &#123;
							<br />
							{"    "}size: &#123;
							<br />
							{"        "}title: 'Products',
							<br />
							{"        "}control: 'text',
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: '.Main',
							<br />
							{"        "}weight: 1,
							<br />
							{"    "}&#125;,
							<br />
							{"    "}active: &#123;
							<br />
							{"        "}title: 'Active column',
							<br />
							{"        "}control: 'text',
							<br />
							{"        "}type: 'number',
							<br />
							{"        "}category: '.Main',
							<br />
							{"        "}weight: 1,
							<br />
							{"    "}&#125;,
							<br />
							{"    "}design: &#123;
							<br />
							{"        "}title: 'Design',
							<br />
							{"        "}control: 'radio-group',
							<br />
							{"        "}variants: [
							<br />
							{"            "}'vertical',
							<br />
							{"            "}'horizontal'
							<br />
							{"        "}],
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: '.Main',
							<br />
							{"        "}weight: 1,
							<br />
							{"    "}&#125;,
							<br />
							{"    "}show: &#123;
							<br />
							{"        "}title: 'Show on screen (for vertical design)',
							<br />
							{"        "}control: 'text',
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Vertical',
							<br />
							{"        "}weight: 1,
							<br />
							{"    "}&#125;,
							<br />
							{"    "}height: &#123;
							<br />
							{"        "}title: 'Show on screen (for horizontal design)',
							<br />
							{"        "}control: 'text',
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Horizontal',
							<br />
							{"        "}weight: 1,
							<br />
							{"    "}&#125;,
							<br />
							&#125;;
							<br />
							<br />
							const defaultProps = &#123;
							<br />
							{"    "}size: 4,
							<br />
							{"    "}show: 4,
							<br />
							{"    "}height: 517,
							<br />
							{"    "}active: 2,
							<br />
							{"    "}design: 'vertical',
							<br />
							&#125;
							<br />
							<br />
							export default Object.assign(PriceList, &#123;
							<br />
							{"    "}title: 'Price List',
							<br />
							{"    "}description: &#123;
							<br />
							{"        "}en: 'Awesome price list!',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}overrides,
							<br />
							{"  "}propInfo,
							<br />
							{"  "}defaultProps,
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
						data="Products;Количество колонок в прайсе;Input, Active column;Выделить необходимую позицию в прайсе;Input,Desing;Включить горизонтальное или вертикальное отображение;Input;"
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