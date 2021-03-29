import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"integration/facebooklike"} />
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
				FaceBook like
			</Override>
			<Override slot="text1">
				Компонент «
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Нравится
				</Strong>
				» позволяет Вашим посетителям одним кликом выразить своё отношение к статье или моментально поделиться ссылкой на статью с друзьями.Компонент «
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Нравится
				</Strong>
				» позволяет Вашим посетителям одним кликом выразить своё отношение к статье или моментально поделиться ссылкой на статью с друзьями.
			</Override>
		</Components.HeroBlock>
		<Components.InfoComp>
			<Override slot="text1">
				Size: 5.73 kb |
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
					<Components.FaceBookLike />
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
							import React, &#123; useEffect, useState, useRef &#125; from 'react';
import atomize from "@quarkly/atomize";
import &#123; Box &#125; from '@quarkly/widgets'

const languageConverter = &#123;
  'English': 'en_US',
  'Русский': 'ru_RU'
&#125;

const useDebounce = (value, timeout = 1000) =&gt; &#123;
  const [state, setState] = useState(value);
  useEffect(() =&gt; &#123;
    const handler = setTimeout(() =&gt; setState(value), timeout);
    return () =&gt; clearTimeout(handler);
  &#125;, [value, timeout]);
  return state;
&#125;;

function usePrevious(value) &#123;
  const ref = useRef();
  useEffect(() =&gt; &#123;
    ref.current = value;
  &#125;, [value]); 
  return ref.current;
&#125;

const MyFB = &#123;
  create: (&#123; language, appId &#125;) =&gt; &#123;
    if (!canDOM()) return
    ((d, s, id) =&gt; &#123;
        const fjs = d.getElementsByTagName(s)[d.getElementsByTagName(s).length - 1];
        if (d.getElementById(id)) return;
        const js = d.createElement(s);
        js.id = id;
        js.src = `//connect.facebook.net/$&#123;language&#125;/sdk.js#xfbml=1&version=v2.12&appId=$&#123;appId&#125;`;
        console.log(js)
        fjs.parentNode.insertBefore(js, fjs);
      &#125;)(document, 'script', 'facebook-jssdk');
  &#125;,
  remove: () =&gt; &#123;
    let elm = document.getElementById('facebook-jssdk')
    if (elm) &#123;
      elm.outerHTML = ''
    &#125;
    elm = document.getElementById('fb-root')
    if (elm) &#123;
      elm.outerHTML = ''
    &#125;
    window.FB = undefined
  &#125;,
  parse: () =&gt; &#123;
    if (window.FB && typeof window.FB !== 'undefined') &#123;
      window.FB.XFBML.parse() 
    &#125;
  &#125;
&#125;

const canDOM = () =&gt; document && typeof document !== 'undefined'

const LikeButton = (&#123; language, appId, ...props &#125;) =&gt; &#123;
  const &#123; 
  href, layout, 
  action, size, share, 
  reference, width, 
  colorScheme, kidDirectedSite 
  &#125; = props;
  
  const oldLang = usePrevious(language)
  const oldAppId = usePrevious(appId)
  
  const didMountRef = useRef(false)
  useEffect(() =&gt; &#123;
    if (didMountRef.current) &#123;
      if (oldLang != language || oldAppId != appId && canDOM()) &#123;
        MyFB.remove();
        MyFB.create(&#123; language, appId &#125;);
      &#125;
      MyFB.parse();
    &#125; else &#123;
      MyFB.create(&#123; language, appId &#125;);
      MyFB.parse();
      didMountRef.current = true
    &#125;
  &#125;)
  
  return ({"\n      "}
							<br />
							<br />
							{"\n    "});
}

const FacebookLike = ({ 
  appId,
  language,
  children,
  "data-qid": qid,
  ...props 
}) => {
  const dAppID = useDebounce(appId)
  
  return 
  {
    dAppID ?  : 'Add your Facebook App ID in the props panel.'
  }

}

const propInfo = {
  appId: {
    title: 'Facebook App ID',
    description: {
        en: 'ID of Facebook App. You can create your app on this url: developers.facebook.com/apps'
    },
    control: 'input',
    category: 'System',
    weight: 1,
  },
  language: {
    title: 'Language',
    description: {
      en: 'Language of the Like Button. Page update required!'
    },
    category: 'System',
    control: 'select',
    variants: ['English', 'Русский']
  },
  colorScheme: {
    title: 'Color scheme',
    description: {
        en: 'The color scheme used by the plugin for any text outside of the button itself.'
    },
    category: 'Button',
    control: 'select',
    variants: ['light', 'dark']
  },
  share: {
    title: 'Share',
    description: {
        en: 'Specifies whether to include a share button beside the Like button.'
    },
    category: 'Button',
    control: 'checkbox'
  },
  href: {
    title: 'URL',
    description: {
      en: 'The URL of the webpage that will be liked (current url default).'
    },
    category: 'Button',
    control: 'input'
  },
  layout: {
    title: 'Layout',
    description: {
      en: 'Selects one of the different layouts that are available for the plugin.'
    },
    category: 'Button',
    control: 'select',
    variants: ['standard', 'box_count', 'button_count', 'button']
  },
  size: {
    title: 'Size',
    description: {
      en: 'Button size'
    },
    category: 'Button',
    control: 'select',
    variants: ['small', 'large']
  },
  action: {
    title: 'Action',
    description: {
      en: 'The verb to display on the button.'
    },
    category: 'Button',
    control: 'select',
    variants: ['like', 'recommend']
  },
  kidDirectedSite: {
    title: 'Kid directed site',
    description: {
        en: 'If your website or online service, or a portion of your service, is directed to children under 13 you must select this.'
    },
    category: 'Button',
    control: 'checkbox'
  },
  referral: {
    title: 'Referal',
    description: {
        en: 'A label for tracking referrals which must be less than 50 characters and can contain alphanumeric characters and some punctuation (currently +/=-.:_). Check developers.facebook.com/docs/plugins/faqs#ref for more details.' 
    },
    category: 'Advanced',
    control: 'Input',
  }
}

const defaultProps = {
  action: 'like',
  layout: 'standard',
  size: 'small',
  colorScheme: 'light',
  showFaces: false,
  share: false,
  kidDirectedSite: false,
  language: 'English'
}

export default atomize(FacebookLike)({
  name: "FacebookLike",
  description: {
    // past here description for your component
    en:
      "This enables FB users to like your materials without having to register on your site.",
  },
  propInfo
}, defaultProps);{"\n"}
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
						data="VK app ID ;Разместить ID вашего приложения;Input;,Attach;Отключить возможно прикрепление медиафайлов;Checkbox"
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