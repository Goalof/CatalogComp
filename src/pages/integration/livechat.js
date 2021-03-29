import React from "react";
import theme from "theme";
import { Theme, Link, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"integration/livechat"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Shapka />
		<Components.HeroBlock background="#181C22 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/chat.png?v=2020-10-09T02:40:21.606Z) 98% 98%/15% no-repeat">
			<Override slot="text">
				LiveChat{"\n\n"}
			</Override>
			<Override slot="text1">
				При интеграции данного сервиса, вы можете сделать на сайте онлайн консультацию при помощи чата, который будет доступен всем посетителям вашего сайта.{"\n\n"}
			</Override>
		</Components.HeroBlock>
		<Components.InfoComp />
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
					<Image width="60%" height="auto" src="https://uploads.quarkly.io/5f0eb776eaca2d001f2b6b19/images/4.png?v=2020-09-09T20:16:08.386Z" />
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
							import React from 'react';
							<br />
							import LiveChat from 'react-livechat';
							<br />
							import &#123; Box &#125; from '@quarkly/widgets';
							<br />
							<br />
							const LiveChatComp = (&#123;
							<br />
							{"  "}license,
							<br />
							{"  "}group,
							<br />
							{"  "}chatBetweenGroups,
							<br />
							{"  "}...props
							<br />
							&#125;) =&gt; &#123;
							<br />
							{"  "}return (
							<br />
							{"    "}&lt;Box
							<br />
							{"      "}&#123;...props&#125;
							<br />
							{"    "}&gt;
							<br />
							{"      "}&lt;LiveChat
							<br />
							{"        "}license=&#123;license&#125;
							<br />
							{"        "}group=&#123;group&#125;
							<br />
							{"        "}chatBetweenGroups=&#123;chatBetweenGroups==='enable'&#125;
							<br />
							{"      "}/&gt;
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
							{"  "}license: &#123;
							<br />
							{"    "}title: 'License ID:',
							<br />
							{"    "}control: 'number',
							<br />
							{"    "}type: 'number',
							<br />
							{"    "}category: 'Main',
							<br />
							{"    "}weight: 1,
							<br />
							{"  "}&#125;,
							<br />
							{"  "}group: &#123;
							<br />
							{"    "}title: 'Group number:',
							<br />
							{"    "}control: 'number',
							<br />
							{"    "}type: 'number',
							<br />
							{"    "}category: 'Main',
							<br />
							{"    "}weight: 1,
							<br />
							{"  "}&#125;,
							<br />
							{"  "}chatBetweenGroups: &#123;
							<br />
							{"    "}title: 'Chat sessions between groups:',
							<br />
							{"    "}control: 'radio-group',
							<br />
							{"    "}variants: ['enable', 'disable'],
							<br />
							{"    "}type: 'text',
							<br />
							{"    "}category: 'Main',
							<br />
							{"    "}weight: 1,
							<br />
							{"  "}&#125;
							<br />
							&#125;;
							<br />
							<br />
							const defaultProps = &#123;
							<br />
							{"  "}license: '',
							<br />
							{"  "}group: '',
							<br />
							{"  "}chatBetweenGroups: '',
							<br />
							&#125;
							<br />
							<br />
							export default Object.assign(LiveChatComp, &#123;
							<br />
							{"  "}title: 'LiveChat',
							<br />
							{"  "}description: &#123;
							<br />
							{"    "}en: 'LiveChat widget for your application',
							<br />
							{"  "}&#125;,
							<br />
							{"  "}propInfo,
							<br />
							{"  "}defaultProps,
							<br />
							&#125;);{"\n\n"}
						</Override>
					</Components.Codes>
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