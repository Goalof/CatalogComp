import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"content/pop-up"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Shapka />
		<Components.HeroBlock background="#181C22 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/pop-uper.png?v=2020-10-09T02:45:14.495Z) 100% 100%/15% no-repeat">
			<Override slot="text">
				Pop-up{"\n\n"}
			</Override>
			<Override slot="text1">
				Всплывающее окно, активируется при клике на кнопку.
				<br />
				В окне же вы можете разместить любой свой контент.
			</Override>
		</Components.HeroBlock>
		<Components.InfoComp>
			<Override slot="text1">
				Size: 11.3 kb |
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
					<Components.Popup>
						<Override slot="wrapper" padding="0px 10px 0px 10px" max-width="30em" />
						<Override slot="button" disabled={false} />
						<Text font="--headline3" text-align="center">
							Здесть любая ваша информация
						</Text>
					</Components.Popup>
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
							import React, &#123; useState, useCallback &#125; from 'react';
import &#123; useOverrides &#125; from '@quarkly/components';
import &#123; Box, Icon, Button &#125; from '@quarkly/widgets';

const duration = '.15s';
const overrides = &#123;
  'button': &#123;
        'kind': 'Button',
    &#125;,
  'popup': &#123;
        'kind': 'Box',
        'props': &#123;
            'top': '0',
            'left': '0',
            'width': '100%',
            'height': '100%',
      'align-items': 'center',
      'justify-content': 'center',
      'display': 'flex',
            'position': 'fixed',
            'z-index': '105',
        &#125;,
    &#125;,
    'popup-open': &#123;
        'kind': 'Box',
        'props': &#123;
            'transition': `
                visibility 0s linear 0s,
                opacity $&#123;duration&#125; linear 0s
            `,
            'pointer-events': 'all',
            'visibility': 'visible',
            'opacity': '1',
        &#125;,
    &#125;,
    'popup-close': &#123;
        'kind': 'Box',
        'props': &#123;
            'transition': `
                visibility 0s linear $&#123;duration&#125;,
                opacity $&#123;duration&#125; linear 0s
            `,
            'pointer-events': 'none',
            'visibility': 'hidden',
            'opacity': '0',
        &#125;,
    &#125;,
  'wrapper': &#123;
        'kind': 'Box',
        'props': &#123;
            'width': '100%',
            'max-width': '1400px',
            'background': '#181C22',
            'box-shadow': `
                0 14px 28px rgba(0,0,0,0.25),
                0 10px 10px rgba(0,0,0,0.22)
            `,
            'border-radius': '.25rem',
            'position': 'relative',
            'z-index': '107',
        &#125;,
    &#125;,
    'wrapper-open': &#123;
        'kind': 'Box',
        'props': &#123;
            'transition': `
                transform $&#123;duration&#125; linear 0s
            `,
            'transform': 'scale(1)',
        &#125;,
    &#125;,
    'wrapper-close': &#123;
        'kind': 'Box',
        'props': &#123;
            'transition': `
                transform $&#123;duration&#125; linear 0s
            `,
            'transform': 'scale(.7)',
        &#125;,
    &#125;,
  'content': &#123;
        'kind': 'Box',
        'props': &#123;
            'margin-top': '2.5rem',
            'min-height': '5rem',
            'position': 'relative',
            'z-index': '108',
        &#125;,
    &#125;,
  'overlay': &#123;
    'kind': 'Box',
        'props': &#123;
            'top': '0',
            'left': '0',
            'width': '100%',
            'height': '100%',
            'background': 'rgba(0,0,0,.3)',
            'position': 'fixed',
            'z-index': '106',
        &#125;
    &#125;,
    'overlay-open': &#123;
        'kind': 'Box',
        'props': &#123;&#125;,
    &#125;,
    'overlay-close': &#123;
        'kind': 'Box',
        'props': &#123;&#125;,
  &#125;,
  'close': &#123;
        'kind': 'Icon',
        'props': &#123;
            'category': 'fi',
            'icon': 'FiX',
          'size': '24px',
      'color': '#fff',
            
            'top': '0',
            'right': '0',
            'padding': '.5rem',
            'background': 'none',
            'user-select': 'none',
            'cursor': 'pointer',
            'position': 'absolute',
            'z-index': '109',
        &#125;
    &#125;,
&#125;;

const defaultProps = &#123;
    
&#125;;

const BurgerMenu = props =&gt; &#123;
  const [isOpen, setOpen] = useState(false);
  const &#123;override, children, rest&#125; = useOverrides(props, overrides, &#123;&#125;);
  
  return (
        
             setOpen(true)&#125;
            &gt;
                &#123;override('button').children || 'Open popup'&#125;
            
            
                 setOpen(false)&#125;
                /&gt;
                
                     setOpen(false)&#125;
                    /&gt;
                    
                        &#123;children&#125;
                    
                
            
        
  )
&#125;;

Object.assign(BurgerMenu, &#123;
    overrides,
    defaultProps
&#125;);

export default BurgerMenu;{" \n"}
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
						data="Type;Не понял что делает;Input;,Disable;Включить\\Отключить активацию кнопки;Input"
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