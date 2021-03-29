import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"multimedia/vimeovideo"} />
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
				Vimeo Video
			</Override>
			<Override slot="text1">
				В этом компоненте вы можете разместить ссылку на любое видео с Vimeo, после чего этот компонент установить в любом месте сайта для онлайн просмотра.В этом компоненте вы можете разместить ссылку на любое видео с Vimeo, после чего этот компонент установить в любом месте сайта для онлайн просмотра.
			</Override>
		</Components.HeroBlock>
		<Components.InfoComp>
			<Override slot="text1">
				Size: 4.5 kb |
			</Override>
		</Components.InfoComp>
		<Section padding="70px 0 50px 0">
			<Stack gap="--cmp-stack-gap-small">
				{"    "}{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Components.VimeoVideo />
					{"        "}{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					{"        "}
					<Components.Codes width="100%">
						<Override slot="Code Alert">
							Код скопирован в буфер обмена!
						</Override>
						<Override slot="Code Text" lg-font="13px/15px Consolas, &quot;Andale Mono WT&quot;, &quot;Andale Mono&quot;, &quot;Lucida Console&quot;, &quot;Lucida Sans Typewriter&quot;, &quot;DejaVu Sans Mono&quot;, &quot;Bitstream Vera Sans Mono&quot;, &quot;Liberation Mono&quot;, &quot;Nimbus Mono L&quot;, Monaco, &quot;Courier New&quot;, Courier, monospace">
							import React, &#123; useMemo, useState, useEffect &#125; from 'react';
import atomize from '@quarkly/atomize';
import &#123; Box &#125; from '@quarkly/widgets';
import Vimeo from '@u-wave/react-vimeo';

const StyledVimeo = atomize(Vimeo)()

const useDebounce = (value, timeout) =&gt; &#123;
  const [state, setState] = useState(value);
  useEffect(() =&gt; &#123;
    const handler = setTimeout(() =&gt; setState(value), timeout);
    return () =&gt; clearTimeout(handler);
  &#125;, [value, timeout]);
  return state;
&#125;;


const convertToVolume = (x) =&gt; &#123;
  const v = parseFloat(x)
  if (typeof v === 'undefined') return 1;
  if (v &lt; 0 || v &gt; 1) return 1;
  return v;
&#125;

const VimeoVideo = (props) =&gt; &#123;
  const &#123; start, 
  controls, video, playBackground, 
  volume, muted, showByline, showTitle, responsive,
  autoplay &#125; = props
  
  const dStart = useDebounce(parseFloat(start), 1000);
  
  const key = useMemo(() =&gt;
    'vimeo-'+ video + muted 
    + controls + playBackground + showByline
    + dStart + autoplay + showTitle + responsive
  , [
    muted, 
    controls, 
    playBackground, 
    showByline,
    dStart,
    autoplay,
    showTitle,
    responsive
  ])
  
  return 
  
    
&#125;

const propInfo = &#123;
  video: &#123;
    title: 'Video ID or URL',
    description: &#123;
      en: 'A Vimeo video ID or URL.'
    &#125;,
    control: 'input',
    category: 'Video'
  &#125;,
  start: &#123;
    title: 'Start',
    description: &#123;
      en: 'The time in seconds at which to start playing the video.'
    &#125;,
    control: 'input',
    category: 'Video'
  &#125;,
  autopause: &#123;
    title: 'Autopause',
    description: &#123;
      en: 'Pause this video automatically when another one plays.'
    &#125;,
    control: 'checkbox',
    category: 'Player',
  &#125;,
  autoplay: &#123;
    title: 'Autoplay',
    description: &#123;
      en: 'Automatically start playback of the video. Note that this won’t work on some devices.'
    &#125;,
    control: 'checkbox',
    category: 'Player',
  &#125;,
  color: &#123;
    title: 'Color',
    description: &#123;
      en: 'Specify the color of the video controls.'
    &#125;,
    control: 'color',
    category: 'Controls'
  &#125;,
  controls: &#123;
    title: 'Enable',
    description: &#123;
      en: 'Hide or enable all elements in the player (play bar, sharing buttons, etc).'
    &#125;,
    control: 'checkbox',
    category: 'Controls'
  &#125;,
  loop: &#123;
    title: 'Loop',
    description: &#123;
      en: 'Play the video again when it reaches the end.'
    &#125;,
    control: 'checkbox',
    category: 'Video'
  &#125;,
  showPortrait: &#123;
    title: 'Show portrait',
    description: &#123;
      en: 'Show the portrait on the video.'
    &#125;,
    control: 'checkbox',
    category: 'Player',
  &#125;,
  showTitle: &#123;
    title: 'Show title',
    description: &#123;
      en: 'Show the title on the video.'
    &#125;,
    control: 'checkbox',
    category: 'Player',
  &#125;,
    showByline: &#123;
    title: 'Show byline',
    description: &#123;
      en: 'Show the byline on the video.'
    &#125;,
    control: 'checkbox',
    category: 'Player',
  &#125;,
  muted: &#123;
    title: 'Muted',
    description: &#123;
      en: 'Starts in a muted state to help with autoplay'
    &#125;,
    control: 'checkbox',
    category: 'Video',
  &#125;,
  playBackground: &#123;
    title: 'Background',
    description: &#123;
      en:  'Starts in a background state with no controls to help with autoplay',
    &#125;,
    control: 'checkbox',
    category: 'Video',
  &#125;,
  volume: &#123;
    title: 'Volume',
    description: &#123;
      en:  'The playback volume as a number between 0 and 1.',
    &#125;,
    control: 'input',
    category: 'Video'
  &#125;,
  responsive: &#123;
    title: 'Responsive',
    description: &#123;
      en: 'Enable responsive mode and resize according to parent element (experimental)'
    &#125;,
    control: 'checkbox',
    category: 'Player',
  &#125;
&#125;

const defaultProps = &#123;
  video: 187987907,
  width: '100%',
  height: '100%',
  volume: 1,
  start: 0,
  autopause: true,
  autoplay: false,
  showByline: true,
  color: '#00ADEF',
  controls: true,
  loop: false,
  showPortrait: true,
  showTitle: true,
  muted: false,
  playBackground: false,
  responsive: true
&#125;


export default atomize(VimeoVideo)(&#123;
  name: "VimeoVideo",
  description: &#123;
    en:
      "Vimeo player component",
  &#125;,
  propInfo,
&#125;, defaultProps);{"\n"}
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
						data="Video ID or URL;Адрес видеоо с Vimeo которое будет отображаться;Input;URL-адрес на страницу видео,Loop;Активировать повторное воспроизведение;Checkbox,Muted;Отключить звук при проигрывании;Checkbox, Start;Задать время начала видео при проигрывание;Input,Volume;Уровень громкости видео;Input,Play Bakcground;Опция необходима для использования видео в качестве видеофона;Checkbox,Controls;Активировать\\Скрыть панель управления видео;Checkbox"
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