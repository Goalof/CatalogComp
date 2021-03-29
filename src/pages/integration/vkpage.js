import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"integration/vkpage"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Shapka />
		<Components.HeroBlock>
			<Override slot="text">
				VK Groups
			</Override>
			<Override slot="text1">
				Компонент для сообществ тесно свяжет ваш сайт с соответствующей группой или официальной страницей{" "}
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					ВКонтакте
				</Strong>
				. Этот компонент позволяет подписаться на новости сообщества, не покидая страницы.

Компонент для сообществ тесно свяжет ваш сайт с соответствующей группой или официальной страницей{" "}
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					ВКонтакте
				</Strong>
				. Этот компонент позволяет подписаться на новости сообщества, не покидая страницы.{"\n\n"}
			</Override>
		</Components.HeroBlock>
		<Components.InfoComp>
			<Override slot="text1">
				Size: 4.2 kb |
			</Override>
		</Components.InfoComp>
		<Section padding="70px 0 50px 0">
			<Stack gap="--cmp-stack-gap-small">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						fullhd-align-items="center"
						fullhd-justify-content="center"
						align-items="center"
						justify-content="center"
					/>
					<Components.VkPage width="100%" wide />
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
							import React, &#123; useState, useEffect, useMemo &#125; from 'react';
import atomize from '@quarkly/atomize';
import &#123; Box, Text &#125; from '@quarkly/widgets';
import &#123; useTheme &#125; from "styled-components";
import VK, &#123; Group &#125; from 'react-vk';
import useDeepCompareEffect from 'use-deep-compare-effect';
// import parse from 'parse-color';

const useDebounce = (value, timeout, deep) =&gt; &#123;
  const [state, setState] = useState(value);
  const comp = deep ? useDeepCompareEffect : useEffect;
  comp(() =&gt; &#123;
    const handler = setTimeout(() =&gt; setState(value), timeout);
    return () =&gt; clearTimeout(handler);
  &#125;, [value, timeout]);

  return state;
&#125;;

const isCssVar = (x) =&gt; x.substring(0, 2) === '--';
const hexColor = new RegExp(/^#[0-9A-F]&#123;6&#125;$/, 'i')

const modeConverter = &#123;
  'Only name': 1,
  'Members': 3,
  'News': 4,
&#125;;

const useColor = (theme) =&gt; (rawColor, defaultColor) =&gt; useMemo(() =&gt; &#123;  
  let color = rawColor;
  if (isCssVar(rawColor)) &#123;
    color = theme.color[rawColor.substring(2)]
  &#125;
  // return parse(color)?.hex?.substring(1) || defaultColor
  return hexColor.test(color) ? color.substring(1) : defaultColor;
&#125;, [theme, rawColor, defaultColor])

const Page = (&#123;
  background, viewMode, bgc, color, buttonColor,
  elementId, groupId, width, height, noCover, wide, 
  ...props
&#125;) =&gt; &#123;
  const theme = useTheme();
  const getColor = useColor(theme);
  
  const color1 = getColor(bgc, 'FFF')
  const color2 = getColor(color, '000')
  const color3 = getColor(buttonColor, '5181B8')
  const mode = modeConverter[viewMode]
  
  const dOpt = useDebounce(&#123;
    height, 
    width,
    wide,
    no_cover: noCover,
    color1,
    color2,
    color3,
    mode,
  &#125;, 1000, true);
  const dGroupId = useDebounce(parseInt(groupId, 10), 1000);
  const dElementId = useDebounce(elementId, 1000);
  
  const [key, setKey] = useState('');
  

  useEffect(() =&gt; &#123;
    setKey(dGroupId + JSON.stringify(dOpt) + dElementId)
  &#125;, [
    dGroupId,
    dOpt,
    dElementId
  ]);
  
  return (
    
      &#123;
        dGroupId ?
        
          
        
        : Insert correct group id in props panel
      &#125;
    
  );
&#125;;

const propInfo = &#123;
  elementId: &#123;
    title: 'Element ID',
    control: 'input',
    category: 'System',
    description: &#123;
      en: 'Unique id of html element.',
    &#125;,
  &#125;,
  groupId: &#123;
    title: 'Group ID',
    type: 'number',
    control: 'input',
    category: 'Widget',
    description: &#123;
      en: 'Numeric group ID. Сheck vk.com/dev/Community for more information',
    &#125;,
  &#125;,
  bgc: &#123;
    title: 'Background color',
    control: 'color',
    category: 'Widget',
    description: &#123;
      en: 'Background color of widget',
    &#125;,
  &#125;,
  color: &#123;
    title: 'Color',
    control: 'color',
    category: 'Widget',
    description: &#123;
      en: 'Text color',
    &#125;,
  &#125;,
  buttonColor: &#123;
    title: 'Color',
    control: 'color',
    category: 'Button',
    description: &#123;
      en: 'Color of subscribe button and some other links',
    &#125;,
  &#125;,
  viewMode: &#123;
    title: 'View',
    control: 'select',
    category: 'Widget',
    variants: ['Members', 'News', 'Only name'],
    description: &#123;
      en: 'View mode of widget (what information will be displayed).',
    &#125;,
  &#125;,
  noCover: &#123;
    title: "Don't use cover",
    control: 'checkbox',
    category: 'Widget',
    description: &#123;
      en: 'Disable cover-image of group.',
    &#125;,
  &#125;,
  wide: &#123;
    title: 'Extended mode',
    control: 'checkbox',
    category: 'Widget',
    description: &#123;
      en: 'Extended display mode of widget (only for news).',
    &#125;,
  &#125;,
&#125;;

const defaultProps = &#123;
  width: 'auto',
  groupId: 175635117,
  elementId: 'vk_groups',
  bgc: '#fff',
  color: '#000',
  buttonColor: '#5181B8',
  viewMode: 'Members',
  noCover: false,
  wide: false,
&#125;;


export default atomize(Page)(
  &#123;
    description: &#123;
      en: 'A Community widget links your site with your VK community. Your users will be able to subscribe to your VK feed without leaving the page.',
    &#125;,
    propInfo
  &#125;,
  defaultProps,
);{"\n\n"}
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
						data="Video ID or URL;Адрес видеоо с Vimeo которое будет отображаться;Input;URL-адрес на страницу видео,Loop;Активировать повторное воспроизведение;Checkbox,Muted;Отключить звук при проигрывании;Checkbox, Start;Задать время начала видео при проигрывание;Input,Volume;Уровень громкости видео;Input,Play Bakcground;Опция необходима для использования видео в качестве видеофона;Checkbox,Controls;Активировать\\\\\\\\Скрыть панель управления видео;Checkbox"
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