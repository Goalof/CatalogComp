import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"multimedia/audioplayer"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Shapka />
		<Components.HeroBlock background="#181C22 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/music-note.png?v=2020-10-09T02:40:37.420Z) 98% 98%/15% no-repeat">
			<Override slot="text">
				Audio Player{"\n\n"}
			</Override>
			<Override slot="text1">
				При помощи этого компонента, вы можете разместить на вашем проекте музыкальный плеер и добавить любую музыку или звуки.{"\n\n"}
			</Override>
		</Components.HeroBlock>
		<Components.InfoComp>
			<Override slot="text1">
				Size: 2.68 kb |{"\n\n"}
			</Override>
		</Components.InfoComp>
		<Section padding="50px 0 50px 0">
			<Stack>
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
					<Components.AudioPlayeer max-width="350px" width="100%" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="60%" display="flex" md-width="100%">
					{"        "}
					<Components.Codes>
						<Override slot="Code Alert">
							Код скопирован в буфер обмена!
						</Override>
						<Override slot="Code Text" lg-font="13px/15px Consolas, &quot;Andale Mono WT&quot;, &quot;Andale Mono&quot;, &quot;Lucida Console&quot;, &quot;Lucida Sans Typewriter&quot;, &quot;DejaVu Sans Mono&quot;, &quot;Bitstream Vera Sans Mono&quot;, &quot;Liberation Mono&quot;, &quot;Nimbus Mono L&quot;, Monaco, &quot;Courier New&quot;, Courier, monospace">
							import React from 'react';
import atomize from '@quarkly/atomize';

const Audio = (&#123;
    src,
    autoPlay,
    controls,
    muted,
    loop,
    children,
    ...props
&#125;) =&gt; &#123;
    return ({"\n        "}
							<br />
							<br />
							{"            \n                "}{React.Children.21map(children, child =>
                    React.isValidElement(child)
                        ? React.cloneElement(child, {
                            container: 'audio'
                        })
                        : child
                )}
            
        
    );
};

const propInfo = {
    src: {
        title: 'Src',
        description: {
            en: 'Audio file address',
            ru: 'Адрес аудио файла'
        },
        control: 'input',
        type: 'string',
        category: 'Main',
        weight: 1,
    },
    autoPlay: {
        title: 'Autoplay',
        description: {
            en: 'Audio autoplay when it’s available',
            ru: 'Автоматическое воспроизведение аудио, как только это будет возможно'
        },
        control: 'checkbox',
        type: 'boolean',
        category: 'Main',
        weight: .5,
    },
    controls: {
        title: 'Show controls',
        description: {
            en: 'Display audio playback controls',
            ru: 'Отображение элементов управления воспроизведения аудио'
        },
        control: 'checkbox',
        type: 'boolean',
        category: 'Main',
        weight: .5,
    },
    muted: {
        title: 'Mute',
        description: {
            en: 'Turn off playback track',
            ru: 'Отключение воспроизведения аудиодорожки'
        },
        control: 'checkbox',
        type: 'boolean',
        category: 'Main',
        weight: .5,
    },
    loop: {
        title: 'Loop',
        description: {
            en: 'Play audio from the beginning to the end',
            ru: 'Воспроизведение аудио с начала по окончании проигрывания'
        },
        control: 'checkbox',
        type: 'boolean',
        category: 'Main',
        weight: .5,
    },
};

const defaultProps = {
    src: 'https://uploads.quarkly.io/molecules/default-audio.mp3',
    controls: true,
}

export default atomize(Audio)(
    {
        name: 'Audio',
        description: {
            en: 'Container for embedding audio content',
            ru: 'Контейнер для встраивания аудио контента'
        },
        propInfo,
    },
    defaultProps
);{" \n"}
							<br />
							{"\n\n"}
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
						data="src;Адрес файла который будет проигрываться;Input;Принимает URL-адрес аудиофайла с расширением MP4,Autoplay; Активировать автовоспроизведение плеера; checkbox,Muted;Отключить звук при проигрывании;checkbox,Loop;Активировать повторное воспроизведение;checkbox"
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