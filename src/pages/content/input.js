import React from "react";
import theme from "theme";
import { Theme, Link, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"content/input"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Shapka>
			<Components.EmbedHTML />
		</Components.Shapka>
		<Components.HeroBlock background="#181C22 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/inputik.png?v=2020-10-09T02:43:22.816Z) 95% 100%/15% no-repeat">
			<Override slot="text">
				Input{"\n\n"}
			</Override>
			<Override slot="text1">
				Тег &lt;input&gt; является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом предназначен для создания текстовых полей, различных кнопок, переключателей и флажков{"\n\n"}
			</Override>
		</Components.HeroBlock>
		<Components.InfoComp>
			<Override slot="text1">
				Size: 1.12 kb |{"\n\n"}
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
					<Components.CustInput />
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
							import React, &#123; useState &#125; from 'react';
							<br />
							import atomize from '@quarkly/atomize';
							<br />
							import &#123; useOverrides &#125; from '@quarkly/components';
							<br />
							import &#123; Text, Input &#125; from '@quarkly/widgets';
							<br />
							<br />
							const overrides = &#123;
							<br />
							{"  "}'input': &#123;
							<br />
							{"        "}'kind': 'Input',
							<br />
							{"        "}'props': &#123;
							<br />
							{"            "}'padding': '12px 16px 0',
							<br />
							{"            "}'height': '40px'
							<br />
							{"        "}&#125;,
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'input-active': &#123;
							<br />
							{"        "}'kind': 'Input',
							<br />
							{"        "}'props': &#123;&#125;,
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'input-normal': &#123;
							<br />
							{"        "}'kind': 'Input',
							<br />
							{"        "}'props': &#123;&#125;,
							<br />
							{"    "}&#125;,
							<br />
							{"  "}'label': &#123;
							<br />
							{"        "}'kind': 'Text',
							<br />
							{"        "}'props': &#123;
							<br />
							{"            "}'top': '0',
							<br />
							{"            "}'left': '0',
							<br />
							{"            "}'margin': '0',
							<br />
							{"            "}'padding': '0 16px',
							<br />
							{"            "}'width': '100%',
							<br />
							{"            "}'line-height': '40px',
							<br />
							{"            "}'transition': 'transform .1s ease',
							<br />
							{"            "}'box-sizing': 'border-box',
							<br />
							{"            "}'position': 'absolute',
							<br />
							{"            "}'opacity': '.5',
							<br />
							{"        "}&#125;,
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'label-active': &#123;
							<br />
							{"        "}'kind': 'Text',
							<br />
							{"        "}'props': &#123;
							<br />
							{"            "}'transform': 'translate(-10%, -25%) scale(.75)',
							<br />
							{"        "}&#125;,
							<br />
							{"    "}&#125;,
							<br />
							{"    "}'label-normal': &#123;
							<br />
							{"        "}'kind': 'Text',
							<br />
							{"        "}'props': &#123;
							<br />
							{"            "}'transform': 'translate(0%, 0%) scale(1)',
							<br />
							{"        "}&#125;,
							<br />
							{"    "}&#125;,
							<br />
							&#125;;
							<br />
							<br />
							const Label = atomize.label(
							<br />
							{"    "}&#123;
							<br />
							{"    "}name: 'Label',
							<br />
							{"    "}effects: &#123;
							<br />
							{"      "}hover: ':hover',
							<br />
							{"      "}focus: ':focus',
							<br />
							{"    "}&#125;,
							<br />
							{"  "}&#125;,
							<br />
							{"  "}&#123;
							<br />
							{"        "}position: 'relative',
							<br />
							{"        "}display: 'inline-block',
							<br />
							{"        "}cursor: 'text',
							<br />
							{"  "}&#125;
							<br />
							);
							<br />
							<br />
							const CustomInput = props =&gt; &#123;
							<br />
							{"  "}const [isActive, setActive] = useState(false);
							<br />
							{"  "}const [value, setValue] = useState('');
							<br />
							{"    "}
							<br />
							{"    "}const handleActive = active =&gt; setActive(active || value.length &gt; 0);
							<br />
							{"    "}const handleChange = value =&gt; setValue(value);
							<br />
							{"    "}
							<br />
							{"  "}const &#123;override, children, rest&#125; = useOverrides(props, overrides, &#123;&#125;);
							<br />
							{"  "}
							<br />
							{"  "}return (
							<br />
							{"        "}&lt;Label
							<br />
							{"            "}&#123;...rest&#125;
							<br />
							{"        "}&gt;
							<br />
							{"            "}&lt;Input
							<br />
							{"                "}&#123;...override('input', `input-$&#123;isActive ? 'active' : 'normal'&#125;`)&#125;
							<br />
							{"                "}
							<br />
							{"                "}onFocus=&#123;() =&gt; handleActive(true)&#125;
							<br />
							{"                "}onBlur=&#123;() =&gt; handleActive(false)&#125;
							<br />
							{"                "}onChange=&#123;e =&gt; handleChange(e.target.value)&#125;
							<br />
							{"                "}
							<br />
							{"                "}value=&#123;value&#125;
							<br />
							{"            "}/&gt;
							<br />
							{"            "}&lt;Text
							<br />
							{"                "}&#123;...override('label', `label-$&#123;isActive ? 'active' : 'normal'&#125;`)&#125;
							<br />
							{"            "}&gt;
							<br />
							{"                "}Placeholder
							<br />
							{"            "}&lt;/Text&gt;
							<br />
							{"        "}&lt;/Label&gt;
							<br />
							{"  "})
							<br />
							&#125;;
							<br />
							<br />
							Object.assign(CustomInput, &#123;
							<br />
							{"    "}overrides
							<br />
							&#125;);
							<br />
							<br />
							export default CustomInput;{" \n\n"}
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