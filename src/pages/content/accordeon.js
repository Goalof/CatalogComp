import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Em, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"content/accordeon"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.EmbedHTML />
		<Components.Shapka />
		<Components.HeroBlock background="#181C22 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/menuacc.png?v=2020-10-09T02:44:41.992Z) 98% 100%/15% no-repeat">
			<Override slot="text">
				Accordion{"\n\n"}
			</Override>
			<Override slot="text1">
				Наверное это самый сложный элемент для установки, но при этом самый эффективный, так как  при помощи него возможно организовать максимальную информативность при небольшом занимаемом пространстве.{"\n\n"}
			</Override>
		</Components.HeroBlock>
		<Components.InfoComp>
			<Override slot="text1">
				Size: 7.99 kb |{"\n\n"}
			</Override>
			<Override slot="stackItemOverride" justify-content="space-between" />
		</Components.InfoComp>
		<Section padding="70px 0 50px 0">
			<Stack gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="100%" display="flex" md-width="100%" margin="0px 0px 50px 0px">
					<Override
						slot="StackItemContent"
						fullhd-align-items="center"
						fullhd-justify-content="center"
						align-items="center"
						justify-content="center"
						flex-direction="column"
					/>
					<Components.Accordeon width="100%">
						<Components.AccItem>
							<Components.AccSum>
								<Override slot="AccordionSummary" padding="0px 64px 0px 24px" />
								<Text>
									<Strong
										font="--headline4"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Заголовок аккордеона
									</Strong>
									{"\n\n"}
								</Text>
							</Components.AccSum>
							<Components.AccDetails>
								<Text>
									<Em
										font="italic 16px --fontFamily-googleSourceSansPro"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Здесь возможно разместить любые элементы (изображения, текст, видео и пр.)
									</Em>
								</Text>
							</Components.AccDetails>
						</Components.AccItem>
					</Components.Accordeon>
					{"            "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" align-items="center" />
					<Text font="500 23px/1.5 --fontFamily-googleSourceSansPro">
						1. Вам необходимо разместить компонент "accordion".{"\n\n"}
					</Text>
					{"        "}{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
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
							import &#123; Box, Text &#125; from '@quarkly/widgets';
							<br />
							<br />
							let overrides = &#123;
							<br />
							{"  "}'Timeline Line': &#123; kind: 'Box' &#125;,
							<br />
							{"  "}'Timeline Item': &#123; kind: 'Box' &#125;,
							<br />
							{"  "}'Timeline Point': &#123; kind: 'Box' &#125;,
							<br />
							{"  "}'Timeline Dates': &#123; kind: 'Text' &#125;,
							<br />
							{"  "}'Timeline Title': &#123; kind: 'Text' &#125;,
							<br />
							{"  "}'Timeline Descr': &#123; kind: 'Text' &#125;,
							<br />
							&#125;;
							<br />
							<br />
							const TimelineLine = (&#123;
							<br />
							{"  "}alignDesktop,
							<br />
							{"  "}alignMobile,
							<br />
							{"  "}media,
							<br />
							{"  "}override,
							<br />
							&#125;) =&gt; &#123;
							<br />
							{"  "}const styles = &#123;
							<br />
							{"    "}'from the left': &#123;
							<br />
							{"      "}lineLeft: '50%',
							<br />
							{"      "}lineRight: 'auto',
							<br />
							{"      "}lineTransform: 'translateX(-50%)',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'from the right': &#123;
							<br />
							{"      "}lineLeft: 'auto',
							<br />
							{"      "}lineRight: '50%',
							<br />
							{"      "}lineTransform: 'translateX(50%)',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'to the left': &#123;
							<br />
							{"      "}lineLeft: '2px',
							<br />
							{"      "}lineRight: 'auto',
							<br />
							{"      "}lineTransform: 'none',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'to the right': &#123;
							<br />
							{"      "}lineLeft: 'auto',
							<br />
							{"      "}lineRight: '2px',
							<br />
							{"      "}lineTransform: 'none',
							<br />
							{"    "}&#125;,
							<br />
							{"  "}&#125;;
							<br />
							{"  "}
							<br />
							{"  "}overrides[`Timeline Line`].props = &#123;
							<br />
							{"    "}[`$&#123;media&#125;-left`]: styles[alignMobile].lineLeft,
							<br />
							{"    "}[`$&#123;media&#125;-right`]: styles[alignMobile].lineRight,
							<br />
							{"    "}[`$&#123;media&#125;-transform`]: styles[alignMobile].lineTransform,
							<br />
							{"  "}&#125;;
							<br />
							{"  "}
							<br />
							{"  "}return (
							<br />
							{"    "}&lt;Box
							<br />
							{"      "}top="0"
							<br />
							{"      "}width="2px"
							<br />
							{"      "}min-width="auto"
							<br />
							{"      "}height="100%"
							<br />
							{"      "}background-color="--color-dark"
							<br />
							{"      "}position="absolute"
							<br />
							{"      "}opacity=".1"
							<br />
							{"      "}
							<br />
							{"      "}left=&#123;styles[alignDesktop].lineLeft&#125;
							<br />
							{"      "}right=&#123;styles[alignDesktop].lineRight&#125;
							<br />
							{"      "}transform=&#123;styles[alignDesktop].lineTransform&#125;
							<br />
							{"      "}
							<br />
							{"      "}&#123;...override('Timeline Line')&#125;
							<br />
							{"    "}/&gt;
							<br />
							{"  "});
							<br />
							&#125;
							<br />
							<br />
							const TimelineItem = (&#123;
							<br />
							{"  "}numb,
							<br />
							{"  "}alignDesktop,
							<br />
							{"  "}alignMobile,
							<br />
							{"  "}media,
							<br />
							{"  "}override,
							<br />
							&#125;) =&gt; &#123;
							<br />
							{"  "}const styles = &#123;
							<br />
							{"    "}'from the left': &#123;
							<br />
							{"      "}itemPaddingLeft: numb % 2 ? '30px' : '',
							<br />
							{"      "}itemPaddingRight: numb % 2 ? '' : '30px',
							<br />
							{"      "}itemPaddingBottom: '15px',
							<br />
							{"      "}itemWidth: '50%',
							<br />
							{"      "}itemAlignSelf: numb % 2 ? 'flex-end' : 'flex-start',
							<br />
							{"      "}itemTextAlign: numb % 2 ? 'left' : 'right',
							<br />
							{"      "}pointLeft: numb % 2 ? '-3px' : '',
							<br />
							{"      "}pointRight: numb % 2 ? '' : '-3px',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'from the right': &#123;
							<br />
							{"      "}itemPaddingLeft: numb % 2 ? '' : '30px',
							<br />
							{"      "}itemPaddingRight: numb % 2 ? '30px' : '',
							<br />
							{"      "}itemPaddingBottom: '15px',
							<br />
							{"      "}itemWidth: '50%',
							<br />
							{"      "}itemAlignSelf: numb % 2 ? 'flex-start' : 'flex-end',
							<br />
							{"      "}itemTextAlign: numb % 2 ? 'right' : 'left',
							<br />
							{"      "}pointLeft: numb % 2 ? '' : '-3px',
							<br />
							{"      "}pointRight: numb % 2 ? '-3px' : '',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'to the left': &#123;
							<br />
							{"      "}itemPaddingLeft: '30px',
							<br />
							{"      "}itemPaddingRight: '0px',
							<br />
							{"      "}itemPaddingBottom: '30px',
							<br />
							{"      "}itemWidth: '100%',
							<br />
							{"      "}itemAlignSelf: 'flex-start',
							<br />
							{"      "}itemTextAlign: 'left',
							<br />
							{"      "}pointLeft: '0',
							<br />
							{"      "}pointRight: 'auto',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'to the right': &#123;
							<br />
							{"      "}itemPaddingLeft: '0px',
							<br />
							{"      "}itemPaddingRight: '30px',
							<br />
							{"      "}itemPaddingBottom: '30px',
							<br />
							{"      "}itemWidth: '100%',
							<br />
							{"      "}itemAlignSelf: 'flex-end',
							<br />
							{"      "}itemTextAlign: 'right',
							<br />
							{"      "}pointLeft: 'auto',
							<br />
							{"      "}pointRight: '0',
							<br />
							{"    "}&#125;,
							<br />
							{"  "}&#125;;
							<br />
							{"  "}
							<br />
							{"  "}overrides['Timeline Item'].props = &#123;
							<br />
							{"    "}[`$&#123;media&#125;-padding-left`]: styles[alignMobile].itemPaddingLeft,
							<br />
							{"    "}[`$&#123;media&#125;-padding-right`]: styles[alignMobile].itemPaddingRight,
							<br />
							{"    "}[`$&#123;media&#125;-padding-bottom`]: styles[alignMobile].itemPaddingBottom,
							<br />
							{"    "}[`$&#123;media&#125;-width`]: styles[alignMobile].itemWidth,
							<br />
							{"    "}[`$&#123;media&#125;-align-self`]: styles[alignMobile].itemAlignSelf,
							<br />
							{"    "}[`$&#123;media&#125;-text-align`]: styles[alignMobile].itemTextAlign,
							<br />
							{"  "}&#125;;
							<br />
							{"  "}overrides['Timeline Point'].props = &#123;
							<br />
							{"    "}[`$&#123;media&#125;-left`]: styles[alignMobile].pointLeft,
							<br />
							{"    "}[`$&#123;media&#125;-right`]: styles[alignMobile].pointRight,
							<br />
							{"  "}&#125;;
							<br />
							{"  "}
							<br />
							{"  "}return (
							<br />
							{"    "}&lt;Box
							<br />
							{"      "}padding-left=&#123;styles[alignDesktop].itemPaddingLeft&#125;
							<br />
							{"      "}padding-right=&#123;styles[alignDesktop].itemPaddingRight&#125;
							<br />
							{"      "}padding-bottom=&#123;styles[alignDesktop].itemPaddingBottom&#125;
							<br />
							{"      "}width=&#123;styles[alignDesktop].itemWidth&#125;
							<br />
							{"      "}align-self=&#123;styles[alignDesktop].itemAlignSelf&#125;
							<br />
							{"      "}text-align=&#123;styles[alignDesktop].itemTextAlign&#125;
							<br />
							{"      "}box-sizing="border-box"
							<br />
							{"      "}position="relative"
							<br />
							{"      "}
							<br />
							{"      "}&#123;...override('Timeline Item', `Timeline $&#123;numb&#125; Item`)&#125;
							<br />
							{"    "}&gt;
							<br />
							{"      "}&lt;Box
							<br />
							{"        "}top="10px"
							<br />
							{"        "}left=&#123;styles[alignDesktop].pointLeft&#125;
							<br />
							{"        "}right=&#123;styles[alignDesktop].pointRight&#125;
							<br />
							{"        "}width="6px"
							<br />
							{"        "}min-width="auto"
							<br />
							{"        "}height="6px"
							<br />
							{"        "}min-height="auto"
							<br />
							{"        "}background-color="--color-dark"
							<br />
							{"        "}border-radius="50%"
							<br />
							{"        "}position="absolute"
							<br />
							{"        "}
							<br />
							{"        "}&#123;...override('Timeline Point', `Timeline $&#123;numb&#125; Point`)&#125;
							<br />
							{"      "}/&gt;
							<br />
							{"      "}&lt;Text
							<br />
							{"        "}margin="0 0 8px"
							<br />
							{"        "}font="--font-base"
							<br />
							{"        "}color="--color-darkL1"
							<br />
							{"        "}
							<br />
							{"        "}&#123;...override('Timeline Dates', `Timeline $&#123;numb&#125; Dates`)&#125;
							<br />
							{"      "}&gt;
							<br />
							{"        "}&#123;override(`Timeline $&#123;numb&#125; Dates`).children || '18:00 - 20:30'&#125;
							<br />
							{"      "}&lt;/Text&gt;
							<br />
							{"      "}&lt;Text
							<br />
							{"        "}margin="0 0 6px"
							<br />
							{"        "}font="--font-headline3"
							<br />
							{"        "}color="--color-dark"
							<br />
							{"        "}
							<br />
							{"        "}&#123;...override('Timeline Title', `Timeline $&#123;numb&#125; Title`)&#125;
							<br />
							{"      "}&gt;
							<br />
							{"        "}&#123;override(`Timeline $&#123;numb&#125; Title`).children || 'Desktop vs mobile'&#125;
							<br />
							{"      "}&lt;/Text&gt;
							<br />
							{"      "}&lt;Text
							<br />
							{"        "}margin="0"
							<br />
							{"        "}font="--font-base"
							<br />
							{"        "}color="--color-darkL2"
							<br />
							{"        "}
							<br />
							{"        "}&#123;...override('Timeline Descr', `Timeline $&#123;numb&#125; Descr`)&#125;
							<br />
							{"      "}&gt;
							<br />
							{"        "}&#123;override(`Timeline $&#123;numb&#125; Descr`).children || 'Fusce dapibus, tellus ac cursus commodo, tondor mauris condimentum fermentum.'&#125;
							<br />
							{"      "}&lt;/Text&gt;
							<br />
							{"    "}&lt;/Box&gt;
							<br />
							{"  "})
							<br />
							&#125;;
							<br />
							<br />
							const Timeline = (&#123;
							<br />
							{"    "}items,
							<br />
							{"  "}alignDesktop,
							<br />
							{"  "}alignMobile,
							<br />
							{"  "}media,
							<br />
							{"    "}...props
							<br />
							&#125;) =&gt; &#123;
							<br />
							{"  "}items = +items;
							<br />
							{"  "}
							<br />
							{"  "}Array(items || 0).fill().map((item, numb) =&gt; &#123;
							<br />
							{"        "}overrides[`Timeline $&#123;numb&#125; Item`] = &#123; kind: 'Box' &#125;
							<br />
							{"        "}overrides[`Timeline $&#123;numb&#125; Point`] = &#123; kind: 'Box' &#125;
							<br />
							{"        "}overrides[`Timeline $&#123;numb&#125; Dates`] = &#123; kind: 'Text' &#125;
							<br />
							{"        "}overrides[`Timeline $&#123;numb&#125; Title`] = &#123; kind: 'Text' &#125;
							<br />
							{"        "}overrides[`Timeline $&#123;numb&#125; Descr`] = &#123; kind: 'Text' &#125;
							<br />
							{"    "}&#125;);
							<br />
							{"  "}
							<br />
							{"  "}const &#123; override, rest &#125; = useOverrides(props, overrides);
							<br />
							{"    "}
							<br />
							{"    "}return (
							<br />
							{"        "}&lt;Box
							<br />
							{"            "}width="100%"
							<br />
							{"            "}max-width="100%"
							<br />
							{"      "}flex-direction="column"
							<br />
							{"            "}box-sizing="border-box"
							<br />
							{"            "}position="relative"
							<br />
							{"      "}display="flex"
							<br />
							{"          "}overflow-x="hidden"
							<br />
							{"      "}overflow-y="visible"
							<br />
							{"      "}
							<br />
							{"      "}&#123;...rest&#125;
							<br />
							{"    "}&gt;
							<br />
							{"      "}&lt;TimelineLine
							<br />
							{"        "}alignDesktop=&#123;alignDesktop&#125;
							<br />
							{"        "}alignMobile=&#123;alignMobile&#125;
							<br />
							{"        "}media=&#123;media&#125;
							<br />
							{"        "}override=&#123;override&#125;
							<br />
							{"      "}/&gt;
							<br />
							{"      "}&#123; Array(items || 1).fill().map((item, numb) =&gt; (
							<br />
							{"        "}&lt;TimelineItem
							<br />
							{"          "}numb=&#123;numb&#125;
							<br />
							{"          "}alignDesktop=&#123;alignDesktop&#125;
							<br />
							{"          "}alignMobile=&#123;alignMobile&#125;
							<br />
							{"          "}media=&#123;media&#125;
							<br />
							{"          "}override=&#123;override&#125;
							<br />
							{"        "}/&gt;
							<br />
							{"      "}))&#125;
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
							{"    "}items: &#123;
							<br />
							{"        "}title: 'Number of items',
							<br />
							{"        "}control: 'number',
							<br />
							{"        "}type: 'number',
							<br />
							{"        "}category: 'Main',
							<br />
							{"        "}weight: 1,
							<br />
							{"    "}&#125;,
							<br />
							{"  "}alignDesktop: &#123;
							<br />
							{"        "}title: 'Alignment of items on the desktop',
							<br />
							{"        "}control: 'select',
							<br />
							{"    "}variants: [
							<br />
							{"      "}'from the left',
							<br />
							{"      "}'from the right',
							<br />
							{"      "}'to the left',
							<br />
							{"      "}'to the right'
							<br />
							{"    "}],
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Main',
							<br />
							{"        "}weight: 1,
							<br />
							{"    "}&#125;,
							<br />
							{"  "}alignMobile: &#123;
							<br />
							{"    "}title: 'Alignment of items on the mobile',
							<br />
							{"        "}control: 'select',
							<br />
							{"    "}variants: [
							<br />
							{"      "}'to the left',
							<br />
							{"      "}'to the right'
							<br />
							{"    "}],
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Main',
							<br />
							{"        "}weight: 1,
							<br />
							{"  "}&#125;,
							<br />
							{"  "}media: &#123;
							<br />
							{"    "}title: 'Mobile starts with the breakpoint',
							<br />
							{"        "}control: 'text',
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Main',
							<br />
							{"        "}weight: 1,
							<br />
							{"  "}&#125;,
							<br />
							&#125;;
							<br />
							<br />
							const defaultProps = &#123;
							<br />
							{"    "}items: 8,
							<br />
							{"  "}alignDesktop: 'from the left',
							<br />
							{"  "}alignMobile: 'to the left',
							<br />
							{"  "}media: 'sm',
							<br />
							&#125;
							<br />
							<br />
							export default Object.assign(Timeline, &#123;
							<br />
							{"    "}title: 'Timeline',
							<br />
							{"    "}description: &#123;
							<br />
							{"        "}en: 'Awesome Timeline component!',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}overrides,
							<br />
							{"  "}propInfo,
							<br />
							{"  "}defaultProps,
							<br />
							&#125;);
						</Override>
					</Components.Codes>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
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
							import &#123; Box, Text &#125; from '@quarkly/widgets';
							<br />
							<br />
							let overrides = &#123;
							<br />
							{"  "}'Timeline Line': &#123; kind: 'Box' &#125;,
							<br />
							{"  "}'Timeline Item': &#123; kind: 'Box' &#125;,
							<br />
							{"  "}'Timeline Point': &#123; kind: 'Box' &#125;,
							<br />
							{"  "}'Timeline Dates': &#123; kind: 'Text' &#125;,
							<br />
							{"  "}'Timeline Title': &#123; kind: 'Text' &#125;,
							<br />
							{"  "}'Timeline Descr': &#123; kind: 'Text' &#125;,
							<br />
							&#125;;
							<br />
							<br />
							const TimelineLine = (&#123;
							<br />
							{"  "}alignDesktop,
							<br />
							{"  "}alignMobile,
							<br />
							{"  "}media,
							<br />
							{"  "}override,
							<br />
							&#125;) =&gt; &#123;
							<br />
							{"  "}const styles = &#123;
							<br />
							{"    "}'from the left': &#123;
							<br />
							{"      "}lineLeft: '50%',
							<br />
							{"      "}lineRight: 'auto',
							<br />
							{"      "}lineTransform: 'translateX(-50%)',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'from the right': &#123;
							<br />
							{"      "}lineLeft: 'auto',
							<br />
							{"      "}lineRight: '50%',
							<br />
							{"      "}lineTransform: 'translateX(50%)',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'to the left': &#123;
							<br />
							{"      "}lineLeft: '2px',
							<br />
							{"      "}lineRight: 'auto',
							<br />
							{"      "}lineTransform: 'none',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'to the right': &#123;
							<br />
							{"      "}lineLeft: 'auto',
							<br />
							{"      "}lineRight: '2px',
							<br />
							{"      "}lineTransform: 'none',
							<br />
							{"    "}&#125;,
							<br />
							{"  "}&#125;;
							<br />
							{"  "}
							<br />
							{"  "}overrides[`Timeline Line`].props = &#123;
							<br />
							{"    "}[`$&#123;media&#125;-left`]: styles[alignMobile].lineLeft,
							<br />
							{"    "}[`$&#123;media&#125;-right`]: styles[alignMobile].lineRight,
							<br />
							{"    "}[`$&#123;media&#125;-transform`]: styles[alignMobile].lineTransform,
							<br />
							{"  "}&#125;;
							<br />
							{"  "}
							<br />
							{"  "}return (
							<br />
							{"    "}&lt;Box
							<br />
							{"      "}top="0"
							<br />
							{"      "}width="2px"
							<br />
							{"      "}min-width="auto"
							<br />
							{"      "}height="100%"
							<br />
							{"      "}background-color="--color-dark"
							<br />
							{"      "}position="absolute"
							<br />
							{"      "}opacity=".1"
							<br />
							{"      "}
							<br />
							{"      "}left=&#123;styles[alignDesktop].lineLeft&#125;
							<br />
							{"      "}right=&#123;styles[alignDesktop].lineRight&#125;
							<br />
							{"      "}transform=&#123;styles[alignDesktop].lineTransform&#125;
							<br />
							{"      "}
							<br />
							{"      "}&#123;...override('Timeline Line')&#125;
							<br />
							{"    "}/&gt;
							<br />
							{"  "});
							<br />
							&#125;
							<br />
							<br />
							const TimelineItem = (&#123;
							<br />
							{"  "}numb,
							<br />
							{"  "}alignDesktop,
							<br />
							{"  "}alignMobile,
							<br />
							{"  "}media,
							<br />
							{"  "}override,
							<br />
							&#125;) =&gt; &#123;
							<br />
							{"  "}const styles = &#123;
							<br />
							{"    "}'from the left': &#123;
							<br />
							{"      "}itemPaddingLeft: numb % 2 ? '30px' : '',
							<br />
							{"      "}itemPaddingRight: numb % 2 ? '' : '30px',
							<br />
							{"      "}itemPaddingBottom: '15px',
							<br />
							{"      "}itemWidth: '50%',
							<br />
							{"      "}itemAlignSelf: numb % 2 ? 'flex-end' : 'flex-start',
							<br />
							{"      "}itemTextAlign: numb % 2 ? 'left' : 'right',
							<br />
							{"      "}pointLeft: numb % 2 ? '-3px' : '',
							<br />
							{"      "}pointRight: numb % 2 ? '' : '-3px',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'from the right': &#123;
							<br />
							{"      "}itemPaddingLeft: numb % 2 ? '' : '30px',
							<br />
							{"      "}itemPaddingRight: numb % 2 ? '30px' : '',
							<br />
							{"      "}itemPaddingBottom: '15px',
							<br />
							{"      "}itemWidth: '50%',
							<br />
							{"      "}itemAlignSelf: numb % 2 ? 'flex-start' : 'flex-end',
							<br />
							{"      "}itemTextAlign: numb % 2 ? 'right' : 'left',
							<br />
							{"      "}pointLeft: numb % 2 ? '' : '-3px',
							<br />
							{"      "}pointRight: numb % 2 ? '-3px' : '',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'to the left': &#123;
							<br />
							{"      "}itemPaddingLeft: '30px',
							<br />
							{"      "}itemPaddingRight: '0px',
							<br />
							{"      "}itemPaddingBottom: '30px',
							<br />
							{"      "}itemWidth: '100%',
							<br />
							{"      "}itemAlignSelf: 'flex-start',
							<br />
							{"      "}itemTextAlign: 'left',
							<br />
							{"      "}pointLeft: '0',
							<br />
							{"      "}pointRight: 'auto',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'to the right': &#123;
							<br />
							{"      "}itemPaddingLeft: '0px',
							<br />
							{"      "}itemPaddingRight: '30px',
							<br />
							{"      "}itemPaddingBottom: '30px',
							<br />
							{"      "}itemWidth: '100%',
							<br />
							{"      "}itemAlignSelf: 'flex-end',
							<br />
							{"      "}itemTextAlign: 'right',
							<br />
							{"      "}pointLeft: 'auto',
							<br />
							{"      "}pointRight: '0',
							<br />
							{"    "}&#125;,
							<br />
							{"  "}&#125;;
							<br />
							{"  "}
							<br />
							{"  "}overrides['Timeline Item'].props = &#123;
							<br />
							{"    "}[`$&#123;media&#125;-padding-left`]: styles[alignMobile].itemPaddingLeft,
							<br />
							{"    "}[`$&#123;media&#125;-padding-right`]: styles[alignMobile].itemPaddingRight,
							<br />
							{"    "}[`$&#123;media&#125;-padding-bottom`]: styles[alignMobile].itemPaddingBottom,
							<br />
							{"    "}[`$&#123;media&#125;-width`]: styles[alignMobile].itemWidth,
							<br />
							{"    "}[`$&#123;media&#125;-align-self`]: styles[alignMobile].itemAlignSelf,
							<br />
							{"    "}[`$&#123;media&#125;-text-align`]: styles[alignMobile].itemTextAlign,
							<br />
							{"  "}&#125;;
							<br />
							{"  "}overrides['Timeline Point'].props = &#123;
							<br />
							{"    "}[`$&#123;media&#125;-left`]: styles[alignMobile].pointLeft,
							<br />
							{"    "}[`$&#123;media&#125;-right`]: styles[alignMobile].pointRight,
							<br />
							{"  "}&#125;;
							<br />
							{"  "}
							<br />
							{"  "}return (
							<br />
							{"    "}&lt;Box
							<br />
							{"      "}padding-left=&#123;styles[alignDesktop].itemPaddingLeft&#125;
							<br />
							{"      "}padding-right=&#123;styles[alignDesktop].itemPaddingRight&#125;
							<br />
							{"      "}padding-bottom=&#123;styles[alignDesktop].itemPaddingBottom&#125;
							<br />
							{"      "}width=&#123;styles[alignDesktop].itemWidth&#125;
							<br />
							{"      "}align-self=&#123;styles[alignDesktop].itemAlignSelf&#125;
							<br />
							{"      "}text-align=&#123;styles[alignDesktop].itemTextAlign&#125;
							<br />
							{"      "}box-sizing="border-box"
							<br />
							{"      "}position="relative"
							<br />
							{"      "}
							<br />
							{"      "}&#123;...override('Timeline Item', `Timeline $&#123;numb&#125; Item`)&#125;
							<br />
							{"    "}&gt;
							<br />
							{"      "}&lt;Box
							<br />
							{"        "}top="10px"
							<br />
							{"        "}left=&#123;styles[alignDesktop].pointLeft&#125;
							<br />
							{"        "}right=&#123;styles[alignDesktop].pointRight&#125;
							<br />
							{"        "}width="6px"
							<br />
							{"        "}min-width="auto"
							<br />
							{"        "}height="6px"
							<br />
							{"        "}min-height="auto"
							<br />
							{"        "}background-color="--color-dark"
							<br />
							{"        "}border-radius="50%"
							<br />
							{"        "}position="absolute"
							<br />
							{"        "}
							<br />
							{"        "}&#123;...override('Timeline Point', `Timeline $&#123;numb&#125; Point`)&#125;
							<br />
							{"      "}/&gt;
							<br />
							{"      "}&lt;Text
							<br />
							{"        "}margin="0 0 8px"
							<br />
							{"        "}font="--font-base"
							<br />
							{"        "}color="--color-darkL1"
							<br />
							{"        "}
							<br />
							{"        "}&#123;...override('Timeline Dates', `Timeline $&#123;numb&#125; Dates`)&#125;
							<br />
							{"      "}&gt;
							<br />
							{"        "}&#123;override(`Timeline $&#123;numb&#125; Dates`).children || '18:00 - 20:30'&#125;
							<br />
							{"      "}&lt;/Text&gt;
							<br />
							{"      "}&lt;Text
							<br />
							{"        "}margin="0 0 6px"
							<br />
							{"        "}font="--font-headline3"
							<br />
							{"        "}color="--color-dark"
							<br />
							{"        "}
							<br />
							{"        "}&#123;...override('Timeline Title', `Timeline $&#123;numb&#125; Title`)&#125;
							<br />
							{"      "}&gt;
							<br />
							{"        "}&#123;override(`Timeline $&#123;numb&#125; Title`).children || 'Desktop vs mobile'&#125;
							<br />
							{"      "}&lt;/Text&gt;
							<br />
							{"      "}&lt;Text
							<br />
							{"        "}margin="0"
							<br />
							{"        "}font="--font-base"
							<br />
							{"        "}color="--color-darkL2"
							<br />
							{"        "}
							<br />
							{"        "}&#123;...override('Timeline Descr', `Timeline $&#123;numb&#125; Descr`)&#125;
							<br />
							{"      "}&gt;
							<br />
							{"        "}&#123;override(`Timeline $&#123;numb&#125; Descr`).children || 'Fusce dapibus, tellus ac cursus commodo, tondor mauris condimentum fermentum.'&#125;
							<br />
							{"      "}&lt;/Text&gt;
							<br />
							{"    "}&lt;/Box&gt;
							<br />
							{"  "})
							<br />
							&#125;;
							<br />
							<br />
							const Timeline = (&#123;
							<br />
							{"    "}items,
							<br />
							{"  "}alignDesktop,
							<br />
							{"  "}alignMobile,
							<br />
							{"  "}media,
							<br />
							{"    "}...props
							<br />
							&#125;) =&gt; &#123;
							<br />
							{"  "}items = +items;
							<br />
							{"  "}
							<br />
							{"  "}Array(items || 0).fill().map((item, numb) =&gt; &#123;
							<br />
							{"        "}overrides[`Timeline $&#123;numb&#125; Item`] = &#123; kind: 'Box' &#125;
							<br />
							{"        "}overrides[`Timeline $&#123;numb&#125; Point`] = &#123; kind: 'Box' &#125;
							<br />
							{"        "}overrides[`Timeline $&#123;numb&#125; Dates`] = &#123; kind: 'Text' &#125;
							<br />
							{"        "}overrides[`Timeline $&#123;numb&#125; Title`] = &#123; kind: 'Text' &#125;
							<br />
							{"        "}overrides[`Timeline $&#123;numb&#125; Descr`] = &#123; kind: 'Text' &#125;
							<br />
							{"    "}&#125;);
							<br />
							{"  "}
							<br />
							{"  "}const &#123; override, rest &#125; = useOverrides(props, overrides);
							<br />
							{"    "}
							<br />
							{"    "}return (
							<br />
							{"        "}&lt;Box
							<br />
							{"            "}width="100%"
							<br />
							{"            "}max-width="100%"
							<br />
							{"      "}flex-direction="column"
							<br />
							{"            "}box-sizing="border-box"
							<br />
							{"            "}position="relative"
							<br />
							{"      "}display="flex"
							<br />
							{"          "}overflow-x="hidden"
							<br />
							{"      "}overflow-y="visible"
							<br />
							{"      "}
							<br />
							{"      "}&#123;...rest&#125;
							<br />
							{"    "}&gt;
							<br />
							{"      "}&lt;TimelineLine
							<br />
							{"        "}alignDesktop=&#123;alignDesktop&#125;
							<br />
							{"        "}alignMobile=&#123;alignMobile&#125;
							<br />
							{"        "}media=&#123;media&#125;
							<br />
							{"        "}override=&#123;override&#125;
							<br />
							{"      "}/&gt;
							<br />
							{"      "}&#123; Array(items || 1).fill().map((item, numb) =&gt; (
							<br />
							{"        "}&lt;TimelineItem
							<br />
							{"          "}numb=&#123;numb&#125;
							<br />
							{"          "}alignDesktop=&#123;alignDesktop&#125;
							<br />
							{"          "}alignMobile=&#123;alignMobile&#125;
							<br />
							{"          "}media=&#123;media&#125;
							<br />
							{"          "}override=&#123;override&#125;
							<br />
							{"        "}/&gt;
							<br />
							{"      "}))&#125;
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
							{"    "}items: &#123;
							<br />
							{"        "}title: 'Number of items',
							<br />
							{"        "}control: 'number',
							<br />
							{"        "}type: 'number',
							<br />
							{"        "}category: 'Main',
							<br />
							{"        "}weight: 1,
							<br />
							{"    "}&#125;,
							<br />
							{"  "}alignDesktop: &#123;
							<br />
							{"        "}title: 'Alignment of items on the desktop',
							<br />
							{"        "}control: 'select',
							<br />
							{"    "}variants: [
							<br />
							{"      "}'from the left',
							<br />
							{"      "}'from the right',
							<br />
							{"      "}'to the left',
							<br />
							{"      "}'to the right'
							<br />
							{"    "}],
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Main',
							<br />
							{"        "}weight: 1,
							<br />
							{"    "}&#125;,
							<br />
							{"  "}alignMobile: &#123;
							<br />
							{"    "}title: 'Alignment of items on the mobile',
							<br />
							{"        "}control: 'select',
							<br />
							{"    "}variants: [
							<br />
							{"      "}'to the left',
							<br />
							{"      "}'to the right'
							<br />
							{"    "}],
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Main',
							<br />
							{"        "}weight: 1,
							<br />
							{"  "}&#125;,
							<br />
							{"  "}media: &#123;
							<br />
							{"    "}title: 'Mobile starts with the breakpoint',
							<br />
							{"        "}control: 'text',
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Main',
							<br />
							{"        "}weight: 1,
							<br />
							{"  "}&#125;,
							<br />
							&#125;;
							<br />
							<br />
							const defaultProps = &#123;
							<br />
							{"    "}items: 8,
							<br />
							{"  "}alignDesktop: 'from the left',
							<br />
							{"  "}alignMobile: 'to the left',
							<br />
							{"  "}media: 'sm',
							<br />
							&#125;
							<br />
							<br />
							export default Object.assign(Timeline, &#123;
							<br />
							{"    "}title: 'Timeline',
							<br />
							{"    "}description: &#123;
							<br />
							{"        "}en: 'Awesome Timeline component!',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}overrides,
							<br />
							{"  "}propInfo,
							<br />
							{"  "}defaultProps,
							<br />
							&#125;);
						</Override>
					</Components.Codes>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" align-items="center" />
					<Text font="500 23px/1.5 --fontFamily-googleSourceSansPro">
						2. Внутрь компонента "Accordion",  необходимо добавить компонент "Accordion-item".
						<br />
						<br />
						При необходимости несколько аккордеонов, вы можете дублировать этот компонент.{"\n\n\n\n"}
					</Text>
					{"        "}{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" align-items="center" />
					<Text font="500 23px/1.5 --fontFamily-googleSourceSansPro">
						3. Внутрь компонентов "Accordion" и "Accordion-item", вам нужно разместить "Accordion-summary", который будет являться заголовком аккордеона.{"\n\n\n\n\n\n"}
					</Text>
					{"        "}{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
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
							import &#123; Box, Text &#125; from '@quarkly/widgets';
							<br />
							<br />
							let overrides = &#123;
							<br />
							{"  "}'Timeline Line': &#123; kind: 'Box' &#125;,
							<br />
							{"  "}'Timeline Item': &#123; kind: 'Box' &#125;,
							<br />
							{"  "}'Timeline Point': &#123; kind: 'Box' &#125;,
							<br />
							{"  "}'Timeline Dates': &#123; kind: 'Text' &#125;,
							<br />
							{"  "}'Timeline Title': &#123; kind: 'Text' &#125;,
							<br />
							{"  "}'Timeline Descr': &#123; kind: 'Text' &#125;,
							<br />
							&#125;;
							<br />
							<br />
							const TimelineLine = (&#123;
							<br />
							{"  "}alignDesktop,
							<br />
							{"  "}alignMobile,
							<br />
							{"  "}media,
							<br />
							{"  "}override,
							<br />
							&#125;) =&gt; &#123;
							<br />
							{"  "}const styles = &#123;
							<br />
							{"    "}'from the left': &#123;
							<br />
							{"      "}lineLeft: '50%',
							<br />
							{"      "}lineRight: 'auto',
							<br />
							{"      "}lineTransform: 'translateX(-50%)',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'from the right': &#123;
							<br />
							{"      "}lineLeft: 'auto',
							<br />
							{"      "}lineRight: '50%',
							<br />
							{"      "}lineTransform: 'translateX(50%)',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'to the left': &#123;
							<br />
							{"      "}lineLeft: '2px',
							<br />
							{"      "}lineRight: 'auto',
							<br />
							{"      "}lineTransform: 'none',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'to the right': &#123;
							<br />
							{"      "}lineLeft: 'auto',
							<br />
							{"      "}lineRight: '2px',
							<br />
							{"      "}lineTransform: 'none',
							<br />
							{"    "}&#125;,
							<br />
							{"  "}&#125;;
							<br />
							{"  "}
							<br />
							{"  "}overrides[`Timeline Line`].props = &#123;
							<br />
							{"    "}[`$&#123;media&#125;-left`]: styles[alignMobile].lineLeft,
							<br />
							{"    "}[`$&#123;media&#125;-right`]: styles[alignMobile].lineRight,
							<br />
							{"    "}[`$&#123;media&#125;-transform`]: styles[alignMobile].lineTransform,
							<br />
							{"  "}&#125;;
							<br />
							{"  "}
							<br />
							{"  "}return (
							<br />
							{"    "}&lt;Box
							<br />
							{"      "}top="0"
							<br />
							{"      "}width="2px"
							<br />
							{"      "}min-width="auto"
							<br />
							{"      "}height="100%"
							<br />
							{"      "}background-color="--color-dark"
							<br />
							{"      "}position="absolute"
							<br />
							{"      "}opacity=".1"
							<br />
							{"      "}
							<br />
							{"      "}left=&#123;styles[alignDesktop].lineLeft&#125;
							<br />
							{"      "}right=&#123;styles[alignDesktop].lineRight&#125;
							<br />
							{"      "}transform=&#123;styles[alignDesktop].lineTransform&#125;
							<br />
							{"      "}
							<br />
							{"      "}&#123;...override('Timeline Line')&#125;
							<br />
							{"    "}/&gt;
							<br />
							{"  "});
							<br />
							&#125;
							<br />
							<br />
							const TimelineItem = (&#123;
							<br />
							{"  "}numb,
							<br />
							{"  "}alignDesktop,
							<br />
							{"  "}alignMobile,
							<br />
							{"  "}media,
							<br />
							{"  "}override,
							<br />
							&#125;) =&gt; &#123;
							<br />
							{"  "}const styles = &#123;
							<br />
							{"    "}'from the left': &#123;
							<br />
							{"      "}itemPaddingLeft: numb % 2 ? '30px' : '',
							<br />
							{"      "}itemPaddingRight: numb % 2 ? '' : '30px',
							<br />
							{"      "}itemPaddingBottom: '15px',
							<br />
							{"      "}itemWidth: '50%',
							<br />
							{"      "}itemAlignSelf: numb % 2 ? 'flex-end' : 'flex-start',
							<br />
							{"      "}itemTextAlign: numb % 2 ? 'left' : 'right',
							<br />
							{"      "}pointLeft: numb % 2 ? '-3px' : '',
							<br />
							{"      "}pointRight: numb % 2 ? '' : '-3px',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'from the right': &#123;
							<br />
							{"      "}itemPaddingLeft: numb % 2 ? '' : '30px',
							<br />
							{"      "}itemPaddingRight: numb % 2 ? '30px' : '',
							<br />
							{"      "}itemPaddingBottom: '15px',
							<br />
							{"      "}itemWidth: '50%',
							<br />
							{"      "}itemAlignSelf: numb % 2 ? 'flex-start' : 'flex-end',
							<br />
							{"      "}itemTextAlign: numb % 2 ? 'right' : 'left',
							<br />
							{"      "}pointLeft: numb % 2 ? '' : '-3px',
							<br />
							{"      "}pointRight: numb % 2 ? '-3px' : '',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'to the left': &#123;
							<br />
							{"      "}itemPaddingLeft: '30px',
							<br />
							{"      "}itemPaddingRight: '0px',
							<br />
							{"      "}itemPaddingBottom: '30px',
							<br />
							{"      "}itemWidth: '100%',
							<br />
							{"      "}itemAlignSelf: 'flex-start',
							<br />
							{"      "}itemTextAlign: 'left',
							<br />
							{"      "}pointLeft: '0',
							<br />
							{"      "}pointRight: 'auto',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'to the right': &#123;
							<br />
							{"      "}itemPaddingLeft: '0px',
							<br />
							{"      "}itemPaddingRight: '30px',
							<br />
							{"      "}itemPaddingBottom: '30px',
							<br />
							{"      "}itemWidth: '100%',
							<br />
							{"      "}itemAlignSelf: 'flex-end',
							<br />
							{"      "}itemTextAlign: 'right',
							<br />
							{"      "}pointLeft: 'auto',
							<br />
							{"      "}pointRight: '0',
							<br />
							{"    "}&#125;,
							<br />
							{"  "}&#125;;
							<br />
							{"  "}
							<br />
							{"  "}overrides['Timeline Item'].props = &#123;
							<br />
							{"    "}[`$&#123;media&#125;-padding-left`]: styles[alignMobile].itemPaddingLeft,
							<br />
							{"    "}[`$&#123;media&#125;-padding-right`]: styles[alignMobile].itemPaddingRight,
							<br />
							{"    "}[`$&#123;media&#125;-padding-bottom`]: styles[alignMobile].itemPaddingBottom,
							<br />
							{"    "}[`$&#123;media&#125;-width`]: styles[alignMobile].itemWidth,
							<br />
							{"    "}[`$&#123;media&#125;-align-self`]: styles[alignMobile].itemAlignSelf,
							<br />
							{"    "}[`$&#123;media&#125;-text-align`]: styles[alignMobile].itemTextAlign,
							<br />
							{"  "}&#125;;
							<br />
							{"  "}overrides['Timeline Point'].props = &#123;
							<br />
							{"    "}[`$&#123;media&#125;-left`]: styles[alignMobile].pointLeft,
							<br />
							{"    "}[`$&#123;media&#125;-right`]: styles[alignMobile].pointRight,
							<br />
							{"  "}&#125;;
							<br />
							{"  "}
							<br />
							{"  "}return (
							<br />
							{"    "}&lt;Box
							<br />
							{"      "}padding-left=&#123;styles[alignDesktop].itemPaddingLeft&#125;
							<br />
							{"      "}padding-right=&#123;styles[alignDesktop].itemPaddingRight&#125;
							<br />
							{"      "}padding-bottom=&#123;styles[alignDesktop].itemPaddingBottom&#125;
							<br />
							{"      "}width=&#123;styles[alignDesktop].itemWidth&#125;
							<br />
							{"      "}align-self=&#123;styles[alignDesktop].itemAlignSelf&#125;
							<br />
							{"      "}text-align=&#123;styles[alignDesktop].itemTextAlign&#125;
							<br />
							{"      "}box-sizing="border-box"
							<br />
							{"      "}position="relative"
							<br />
							{"      "}
							<br />
							{"      "}&#123;...override('Timeline Item', `Timeline $&#123;numb&#125; Item`)&#125;
							<br />
							{"    "}&gt;
							<br />
							{"      "}&lt;Box
							<br />
							{"        "}top="10px"
							<br />
							{"        "}left=&#123;styles[alignDesktop].pointLeft&#125;
							<br />
							{"        "}right=&#123;styles[alignDesktop].pointRight&#125;
							<br />
							{"        "}width="6px"
							<br />
							{"        "}min-width="auto"
							<br />
							{"        "}height="6px"
							<br />
							{"        "}min-height="auto"
							<br />
							{"        "}background-color="--color-dark"
							<br />
							{"        "}border-radius="50%"
							<br />
							{"        "}position="absolute"
							<br />
							{"        "}
							<br />
							{"        "}&#123;...override('Timeline Point', `Timeline $&#123;numb&#125; Point`)&#125;
							<br />
							{"      "}/&gt;
							<br />
							{"      "}&lt;Text
							<br />
							{"        "}margin="0 0 8px"
							<br />
							{"        "}font="--font-base"
							<br />
							{"        "}color="--color-darkL1"
							<br />
							{"        "}
							<br />
							{"        "}&#123;...override('Timeline Dates', `Timeline $&#123;numb&#125; Dates`)&#125;
							<br />
							{"      "}&gt;
							<br />
							{"        "}&#123;override(`Timeline $&#123;numb&#125; Dates`).children || '18:00 - 20:30'&#125;
							<br />
							{"      "}&lt;/Text&gt;
							<br />
							{"      "}&lt;Text
							<br />
							{"        "}margin="0 0 6px"
							<br />
							{"        "}font="--font-headline3"
							<br />
							{"        "}color="--color-dark"
							<br />
							{"        "}
							<br />
							{"        "}&#123;...override('Timeline Title', `Timeline $&#123;numb&#125; Title`)&#125;
							<br />
							{"      "}&gt;
							<br />
							{"        "}&#123;override(`Timeline $&#123;numb&#125; Title`).children || 'Desktop vs mobile'&#125;
							<br />
							{"      "}&lt;/Text&gt;
							<br />
							{"      "}&lt;Text
							<br />
							{"        "}margin="0"
							<br />
							{"        "}font="--font-base"
							<br />
							{"        "}color="--color-darkL2"
							<br />
							{"        "}
							<br />
							{"        "}&#123;...override('Timeline Descr', `Timeline $&#123;numb&#125; Descr`)&#125;
							<br />
							{"      "}&gt;
							<br />
							{"        "}&#123;override(`Timeline $&#123;numb&#125; Descr`).children || 'Fusce dapibus, tellus ac cursus commodo, tondor mauris condimentum fermentum.'&#125;
							<br />
							{"      "}&lt;/Text&gt;
							<br />
							{"    "}&lt;/Box&gt;
							<br />
							{"  "})
							<br />
							&#125;;
							<br />
							<br />
							const Timeline = (&#123;
							<br />
							{"    "}items,
							<br />
							{"  "}alignDesktop,
							<br />
							{"  "}alignMobile,
							<br />
							{"  "}media,
							<br />
							{"    "}...props
							<br />
							&#125;) =&gt; &#123;
							<br />
							{"  "}items = +items;
							<br />
							{"  "}
							<br />
							{"  "}Array(items || 0).fill().map((item, numb) =&gt; &#123;
							<br />
							{"        "}overrides[`Timeline $&#123;numb&#125; Item`] = &#123; kind: 'Box' &#125;
							<br />
							{"        "}overrides[`Timeline $&#123;numb&#125; Point`] = &#123; kind: 'Box' &#125;
							<br />
							{"        "}overrides[`Timeline $&#123;numb&#125; Dates`] = &#123; kind: 'Text' &#125;
							<br />
							{"        "}overrides[`Timeline $&#123;numb&#125; Title`] = &#123; kind: 'Text' &#125;
							<br />
							{"        "}overrides[`Timeline $&#123;numb&#125; Descr`] = &#123; kind: 'Text' &#125;
							<br />
							{"    "}&#125;);
							<br />
							{"  "}
							<br />
							{"  "}const &#123; override, rest &#125; = useOverrides(props, overrides);
							<br />
							{"    "}
							<br />
							{"    "}return (
							<br />
							{"        "}&lt;Box
							<br />
							{"            "}width="100%"
							<br />
							{"            "}max-width="100%"
							<br />
							{"      "}flex-direction="column"
							<br />
							{"            "}box-sizing="border-box"
							<br />
							{"            "}position="relative"
							<br />
							{"      "}display="flex"
							<br />
							{"          "}overflow-x="hidden"
							<br />
							{"      "}overflow-y="visible"
							<br />
							{"      "}
							<br />
							{"      "}&#123;...rest&#125;
							<br />
							{"    "}&gt;
							<br />
							{"      "}&lt;TimelineLine
							<br />
							{"        "}alignDesktop=&#123;alignDesktop&#125;
							<br />
							{"        "}alignMobile=&#123;alignMobile&#125;
							<br />
							{"        "}media=&#123;media&#125;
							<br />
							{"        "}override=&#123;override&#125;
							<br />
							{"      "}/&gt;
							<br />
							{"      "}&#123; Array(items || 1).fill().map((item, numb) =&gt; (
							<br />
							{"        "}&lt;TimelineItem
							<br />
							{"          "}numb=&#123;numb&#125;
							<br />
							{"          "}alignDesktop=&#123;alignDesktop&#125;
							<br />
							{"          "}alignMobile=&#123;alignMobile&#125;
							<br />
							{"          "}media=&#123;media&#125;
							<br />
							{"          "}override=&#123;override&#125;
							<br />
							{"        "}/&gt;
							<br />
							{"      "}))&#125;
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
							{"    "}items: &#123;
							<br />
							{"        "}title: 'Number of items',
							<br />
							{"        "}control: 'number',
							<br />
							{"        "}type: 'number',
							<br />
							{"        "}category: 'Main',
							<br />
							{"        "}weight: 1,
							<br />
							{"    "}&#125;,
							<br />
							{"  "}alignDesktop: &#123;
							<br />
							{"        "}title: 'Alignment of items on the desktop',
							<br />
							{"        "}control: 'select',
							<br />
							{"    "}variants: [
							<br />
							{"      "}'from the left',
							<br />
							{"      "}'from the right',
							<br />
							{"      "}'to the left',
							<br />
							{"      "}'to the right'
							<br />
							{"    "}],
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Main',
							<br />
							{"        "}weight: 1,
							<br />
							{"    "}&#125;,
							<br />
							{"  "}alignMobile: &#123;
							<br />
							{"    "}title: 'Alignment of items on the mobile',
							<br />
							{"        "}control: 'select',
							<br />
							{"    "}variants: [
							<br />
							{"      "}'to the left',
							<br />
							{"      "}'to the right'
							<br />
							{"    "}],
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Main',
							<br />
							{"        "}weight: 1,
							<br />
							{"  "}&#125;,
							<br />
							{"  "}media: &#123;
							<br />
							{"    "}title: 'Mobile starts with the breakpoint',
							<br />
							{"        "}control: 'text',
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Main',
							<br />
							{"        "}weight: 1,
							<br />
							{"  "}&#125;,
							<br />
							&#125;;
							<br />
							<br />
							const defaultProps = &#123;
							<br />
							{"    "}items: 8,
							<br />
							{"  "}alignDesktop: 'from the left',
							<br />
							{"  "}alignMobile: 'to the left',
							<br />
							{"  "}media: 'sm',
							<br />
							&#125;
							<br />
							<br />
							export default Object.assign(Timeline, &#123;
							<br />
							{"    "}title: 'Timeline',
							<br />
							{"    "}description: &#123;
							<br />
							{"        "}en: 'Awesome Timeline component!',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}overrides,
							<br />
							{"  "}propInfo,
							<br />
							{"  "}defaultProps,
							<br />
							&#125;);
						</Override>
					</Components.Codes>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
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
							import &#123; Box, Text &#125; from '@quarkly/widgets';
							<br />
							<br />
							let overrides = &#123;
							<br />
							{"  "}'Timeline Line': &#123; kind: 'Box' &#125;,
							<br />
							{"  "}'Timeline Item': &#123; kind: 'Box' &#125;,
							<br />
							{"  "}'Timeline Point': &#123; kind: 'Box' &#125;,
							<br />
							{"  "}'Timeline Dates': &#123; kind: 'Text' &#125;,
							<br />
							{"  "}'Timeline Title': &#123; kind: 'Text' &#125;,
							<br />
							{"  "}'Timeline Descr': &#123; kind: 'Text' &#125;,
							<br />
							&#125;;
							<br />
							<br />
							const TimelineLine = (&#123;
							<br />
							{"  "}alignDesktop,
							<br />
							{"  "}alignMobile,
							<br />
							{"  "}media,
							<br />
							{"  "}override,
							<br />
							&#125;) =&gt; &#123;
							<br />
							{"  "}const styles = &#123;
							<br />
							{"    "}'from the left': &#123;
							<br />
							{"      "}lineLeft: '50%',
							<br />
							{"      "}lineRight: 'auto',
							<br />
							{"      "}lineTransform: 'translateX(-50%)',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'from the right': &#123;
							<br />
							{"      "}lineLeft: 'auto',
							<br />
							{"      "}lineRight: '50%',
							<br />
							{"      "}lineTransform: 'translateX(50%)',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'to the left': &#123;
							<br />
							{"      "}lineLeft: '2px',
							<br />
							{"      "}lineRight: 'auto',
							<br />
							{"      "}lineTransform: 'none',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'to the right': &#123;
							<br />
							{"      "}lineLeft: 'auto',
							<br />
							{"      "}lineRight: '2px',
							<br />
							{"      "}lineTransform: 'none',
							<br />
							{"    "}&#125;,
							<br />
							{"  "}&#125;;
							<br />
							{"  "}
							<br />
							{"  "}overrides[`Timeline Line`].props = &#123;
							<br />
							{"    "}[`$&#123;media&#125;-left`]: styles[alignMobile].lineLeft,
							<br />
							{"    "}[`$&#123;media&#125;-right`]: styles[alignMobile].lineRight,
							<br />
							{"    "}[`$&#123;media&#125;-transform`]: styles[alignMobile].lineTransform,
							<br />
							{"  "}&#125;;
							<br />
							{"  "}
							<br />
							{"  "}return (
							<br />
							{"    "}&lt;Box
							<br />
							{"      "}top="0"
							<br />
							{"      "}width="2px"
							<br />
							{"      "}min-width="auto"
							<br />
							{"      "}height="100%"
							<br />
							{"      "}background-color="--color-dark"
							<br />
							{"      "}position="absolute"
							<br />
							{"      "}opacity=".1"
							<br />
							{"      "}
							<br />
							{"      "}left=&#123;styles[alignDesktop].lineLeft&#125;
							<br />
							{"      "}right=&#123;styles[alignDesktop].lineRight&#125;
							<br />
							{"      "}transform=&#123;styles[alignDesktop].lineTransform&#125;
							<br />
							{"      "}
							<br />
							{"      "}&#123;...override('Timeline Line')&#125;
							<br />
							{"    "}/&gt;
							<br />
							{"  "});
							<br />
							&#125;
							<br />
							<br />
							const TimelineItem = (&#123;
							<br />
							{"  "}numb,
							<br />
							{"  "}alignDesktop,
							<br />
							{"  "}alignMobile,
							<br />
							{"  "}media,
							<br />
							{"  "}override,
							<br />
							&#125;) =&gt; &#123;
							<br />
							{"  "}const styles = &#123;
							<br />
							{"    "}'from the left': &#123;
							<br />
							{"      "}itemPaddingLeft: numb % 2 ? '30px' : '',
							<br />
							{"      "}itemPaddingRight: numb % 2 ? '' : '30px',
							<br />
							{"      "}itemPaddingBottom: '15px',
							<br />
							{"      "}itemWidth: '50%',
							<br />
							{"      "}itemAlignSelf: numb % 2 ? 'flex-end' : 'flex-start',
							<br />
							{"      "}itemTextAlign: numb % 2 ? 'left' : 'right',
							<br />
							{"      "}pointLeft: numb % 2 ? '-3px' : '',
							<br />
							{"      "}pointRight: numb % 2 ? '' : '-3px',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'from the right': &#123;
							<br />
							{"      "}itemPaddingLeft: numb % 2 ? '' : '30px',
							<br />
							{"      "}itemPaddingRight: numb % 2 ? '30px' : '',
							<br />
							{"      "}itemPaddingBottom: '15px',
							<br />
							{"      "}itemWidth: '50%',
							<br />
							{"      "}itemAlignSelf: numb % 2 ? 'flex-start' : 'flex-end',
							<br />
							{"      "}itemTextAlign: numb % 2 ? 'right' : 'left',
							<br />
							{"      "}pointLeft: numb % 2 ? '' : '-3px',
							<br />
							{"      "}pointRight: numb % 2 ? '-3px' : '',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'to the left': &#123;
							<br />
							{"      "}itemPaddingLeft: '30px',
							<br />
							{"      "}itemPaddingRight: '0px',
							<br />
							{"      "}itemPaddingBottom: '30px',
							<br />
							{"      "}itemWidth: '100%',
							<br />
							{"      "}itemAlignSelf: 'flex-start',
							<br />
							{"      "}itemTextAlign: 'left',
							<br />
							{"      "}pointLeft: '0',
							<br />
							{"      "}pointRight: 'auto',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'to the right': &#123;
							<br />
							{"      "}itemPaddingLeft: '0px',
							<br />
							{"      "}itemPaddingRight: '30px',
							<br />
							{"      "}itemPaddingBottom: '30px',
							<br />
							{"      "}itemWidth: '100%',
							<br />
							{"      "}itemAlignSelf: 'flex-end',
							<br />
							{"      "}itemTextAlign: 'right',
							<br />
							{"      "}pointLeft: 'auto',
							<br />
							{"      "}pointRight: '0',
							<br />
							{"    "}&#125;,
							<br />
							{"  "}&#125;;
							<br />
							{"  "}
							<br />
							{"  "}overrides['Timeline Item'].props = &#123;
							<br />
							{"    "}[`$&#123;media&#125;-padding-left`]: styles[alignMobile].itemPaddingLeft,
							<br />
							{"    "}[`$&#123;media&#125;-padding-right`]: styles[alignMobile].itemPaddingRight,
							<br />
							{"    "}[`$&#123;media&#125;-padding-bottom`]: styles[alignMobile].itemPaddingBottom,
							<br />
							{"    "}[`$&#123;media&#125;-width`]: styles[alignMobile].itemWidth,
							<br />
							{"    "}[`$&#123;media&#125;-align-self`]: styles[alignMobile].itemAlignSelf,
							<br />
							{"    "}[`$&#123;media&#125;-text-align`]: styles[alignMobile].itemTextAlign,
							<br />
							{"  "}&#125;;
							<br />
							{"  "}overrides['Timeline Point'].props = &#123;
							<br />
							{"    "}[`$&#123;media&#125;-left`]: styles[alignMobile].pointLeft,
							<br />
							{"    "}[`$&#123;media&#125;-right`]: styles[alignMobile].pointRight,
							<br />
							{"  "}&#125;;
							<br />
							{"  "}
							<br />
							{"  "}return (
							<br />
							{"    "}&lt;Box
							<br />
							{"      "}padding-left=&#123;styles[alignDesktop].itemPaddingLeft&#125;
							<br />
							{"      "}padding-right=&#123;styles[alignDesktop].itemPaddingRight&#125;
							<br />
							{"      "}padding-bottom=&#123;styles[alignDesktop].itemPaddingBottom&#125;
							<br />
							{"      "}width=&#123;styles[alignDesktop].itemWidth&#125;
							<br />
							{"      "}align-self=&#123;styles[alignDesktop].itemAlignSelf&#125;
							<br />
							{"      "}text-align=&#123;styles[alignDesktop].itemTextAlign&#125;
							<br />
							{"      "}box-sizing="border-box"
							<br />
							{"      "}position="relative"
							<br />
							{"      "}
							<br />
							{"      "}&#123;...override('Timeline Item', `Timeline $&#123;numb&#125; Item`)&#125;
							<br />
							{"    "}&gt;
							<br />
							{"      "}&lt;Box
							<br />
							{"        "}top="10px"
							<br />
							{"        "}left=&#123;styles[alignDesktop].pointLeft&#125;
							<br />
							{"        "}right=&#123;styles[alignDesktop].pointRight&#125;
							<br />
							{"        "}width="6px"
							<br />
							{"        "}min-width="auto"
							<br />
							{"        "}height="6px"
							<br />
							{"        "}min-height="auto"
							<br />
							{"        "}background-color="--color-dark"
							<br />
							{"        "}border-radius="50%"
							<br />
							{"        "}position="absolute"
							<br />
							{"        "}
							<br />
							{"        "}&#123;...override('Timeline Point', `Timeline $&#123;numb&#125; Point`)&#125;
							<br />
							{"      "}/&gt;
							<br />
							{"      "}&lt;Text
							<br />
							{"        "}margin="0 0 8px"
							<br />
							{"        "}font="--font-base"
							<br />
							{"        "}color="--color-darkL1"
							<br />
							{"        "}
							<br />
							{"        "}&#123;...override('Timeline Dates', `Timeline $&#123;numb&#125; Dates`)&#125;
							<br />
							{"      "}&gt;
							<br />
							{"        "}&#123;override(`Timeline $&#123;numb&#125; Dates`).children || '18:00 - 20:30'&#125;
							<br />
							{"      "}&lt;/Text&gt;
							<br />
							{"      "}&lt;Text
							<br />
							{"        "}margin="0 0 6px"
							<br />
							{"        "}font="--font-headline3"
							<br />
							{"        "}color="--color-dark"
							<br />
							{"        "}
							<br />
							{"        "}&#123;...override('Timeline Title', `Timeline $&#123;numb&#125; Title`)&#125;
							<br />
							{"      "}&gt;
							<br />
							{"        "}&#123;override(`Timeline $&#123;numb&#125; Title`).children || 'Desktop vs mobile'&#125;
							<br />
							{"      "}&lt;/Text&gt;
							<br />
							{"      "}&lt;Text
							<br />
							{"        "}margin="0"
							<br />
							{"        "}font="--font-base"
							<br />
							{"        "}color="--color-darkL2"
							<br />
							{"        "}
							<br />
							{"        "}&#123;...override('Timeline Descr', `Timeline $&#123;numb&#125; Descr`)&#125;
							<br />
							{"      "}&gt;
							<br />
							{"        "}&#123;override(`Timeline $&#123;numb&#125; Descr`).children || 'Fusce dapibus, tellus ac cursus commodo, tondor mauris condimentum fermentum.'&#125;
							<br />
							{"      "}&lt;/Text&gt;
							<br />
							{"    "}&lt;/Box&gt;
							<br />
							{"  "})
							<br />
							&#125;;
							<br />
							<br />
							const Timeline = (&#123;
							<br />
							{"    "}items,
							<br />
							{"  "}alignDesktop,
							<br />
							{"  "}alignMobile,
							<br />
							{"  "}media,
							<br />
							{"    "}...props
							<br />
							&#125;) =&gt; &#123;
							<br />
							{"  "}items = +items;
							<br />
							{"  "}
							<br />
							{"  "}Array(items || 0).fill().map((item, numb) =&gt; &#123;
							<br />
							{"        "}overrides[`Timeline $&#123;numb&#125; Item`] = &#123; kind: 'Box' &#125;
							<br />
							{"        "}overrides[`Timeline $&#123;numb&#125; Point`] = &#123; kind: 'Box' &#125;
							<br />
							{"        "}overrides[`Timeline $&#123;numb&#125; Dates`] = &#123; kind: 'Text' &#125;
							<br />
							{"        "}overrides[`Timeline $&#123;numb&#125; Title`] = &#123; kind: 'Text' &#125;
							<br />
							{"        "}overrides[`Timeline $&#123;numb&#125; Descr`] = &#123; kind: 'Text' &#125;
							<br />
							{"    "}&#125;);
							<br />
							{"  "}
							<br />
							{"  "}const &#123; override, rest &#125; = useOverrides(props, overrides);
							<br />
							{"    "}
							<br />
							{"    "}return (
							<br />
							{"        "}&lt;Box
							<br />
							{"            "}width="100%"
							<br />
							{"            "}max-width="100%"
							<br />
							{"      "}flex-direction="column"
							<br />
							{"            "}box-sizing="border-box"
							<br />
							{"            "}position="relative"
							<br />
							{"      "}display="flex"
							<br />
							{"          "}overflow-x="hidden"
							<br />
							{"      "}overflow-y="visible"
							<br />
							{"      "}
							<br />
							{"      "}&#123;...rest&#125;
							<br />
							{"    "}&gt;
							<br />
							{"      "}&lt;TimelineLine
							<br />
							{"        "}alignDesktop=&#123;alignDesktop&#125;
							<br />
							{"        "}alignMobile=&#123;alignMobile&#125;
							<br />
							{"        "}media=&#123;media&#125;
							<br />
							{"        "}override=&#123;override&#125;
							<br />
							{"      "}/&gt;
							<br />
							{"      "}&#123; Array(items || 1).fill().map((item, numb) =&gt; (
							<br />
							{"        "}&lt;TimelineItem
							<br />
							{"          "}numb=&#123;numb&#125;
							<br />
							{"          "}alignDesktop=&#123;alignDesktop&#125;
							<br />
							{"          "}alignMobile=&#123;alignMobile&#125;
							<br />
							{"          "}media=&#123;media&#125;
							<br />
							{"          "}override=&#123;override&#125;
							<br />
							{"        "}/&gt;
							<br />
							{"      "}))&#125;
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
							{"    "}items: &#123;
							<br />
							{"        "}title: 'Number of items',
							<br />
							{"        "}control: 'number',
							<br />
							{"        "}type: 'number',
							<br />
							{"        "}category: 'Main',
							<br />
							{"        "}weight: 1,
							<br />
							{"    "}&#125;,
							<br />
							{"  "}alignDesktop: &#123;
							<br />
							{"        "}title: 'Alignment of items on the desktop',
							<br />
							{"        "}control: 'select',
							<br />
							{"    "}variants: [
							<br />
							{"      "}'from the left',
							<br />
							{"      "}'from the right',
							<br />
							{"      "}'to the left',
							<br />
							{"      "}'to the right'
							<br />
							{"    "}],
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Main',
							<br />
							{"        "}weight: 1,
							<br />
							{"    "}&#125;,
							<br />
							{"  "}alignMobile: &#123;
							<br />
							{"    "}title: 'Alignment of items on the mobile',
							<br />
							{"        "}control: 'select',
							<br />
							{"    "}variants: [
							<br />
							{"      "}'to the left',
							<br />
							{"      "}'to the right'
							<br />
							{"    "}],
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Main',
							<br />
							{"        "}weight: 1,
							<br />
							{"  "}&#125;,
							<br />
							{"  "}media: &#123;
							<br />
							{"    "}title: 'Mobile starts with the breakpoint',
							<br />
							{"        "}control: 'text',
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Main',
							<br />
							{"        "}weight: 1,
							<br />
							{"  "}&#125;,
							<br />
							&#125;;
							<br />
							<br />
							const defaultProps = &#123;
							<br />
							{"    "}items: 8,
							<br />
							{"  "}alignDesktop: 'from the left',
							<br />
							{"  "}alignMobile: 'to the left',
							<br />
							{"  "}media: 'sm',
							<br />
							&#125;
							<br />
							<br />
							export default Object.assign(Timeline, &#123;
							<br />
							{"    "}title: 'Timeline',
							<br />
							{"    "}description: &#123;
							<br />
							{"        "}en: 'Awesome Timeline component!',
							<br />
							{"    "}&#125;,
							<br />
							{"    "}overrides,
							<br />
							{"  "}propInfo,
							<br />
							{"  "}defaultProps,
							<br />
							&#125;);
						</Override>
					</Components.Codes>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" align-items="center" />
					<Text font="400 23px/1.5 --fontFamily-googleSourceSansPro">
						4. Внутрь компонентов "Accordion" и "Accordion-item", вы также размещаете "Accordion-details", в который вы уже размещаете необходимый контент (текста, картинки, ссылки и пр.){"\n\n"}
					</Text>
					{"        "}{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" align-items="center" />
					<Text font="400 23px/1.5 --fontFamily-googleSourceSansPro">
						Пример установленного аккордена{"\n\n"}
					</Text>
					{"        "}{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" align-items="center" />
					<Image width="100%" height="290px" src="https://screenshot.ukit.com/src/goalov/18/2020-09-16-00-47-32.png" />
					{"        "}{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Components.BlockPopular>
			<Override slot="popularCardOverride19" />
			<Override slot="popularCardOverride22" />
		</Components.BlockPopular>
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