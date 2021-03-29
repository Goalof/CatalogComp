import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { BsFillCircleFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"multimedia/slider"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Shapka />
		<Components.HeroBlock background="#181C22 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/sliderrrrr.png?v=2020-10-09T02:41:43.509Z) 98% 93%/15% no-repeat">
			<Override slot="text">
				Slider{"\n\n"}
			</Override>
			<Override slot="text1">
				Слайдер необходим для демонстрации ваших изображений, при помощи которых вы можете донести до ваших посетителей информацию визуально.{"\n\n"}
			</Override>
			<Override slot="popupOverride">
				Installation FAQ
			</Override>
		</Components.HeroBlock>
		<Components.InfoComp>
			<Override slot="text">
				Version: 1.0 |
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
					<Components.Slider width="100%" alphaPoints="0.5" colorPoints="#000000" height="38.5%" />
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
							import React, &#123; useState, useEffect &#125; from 'react';
							<br />
							<br />
							import atomize from '@quarkly/atomize';
							<br />
							import &#123; useOverrides &#125; from '@quarkly/components';
							<br />
							import &#123; Box, Icon &#125; from '@quarkly/widgets';
							<br />
							<br />
							const overrides = &#123;
							<br />
							{"    "}'Arrow prev icon': &#123;
							<br />
							{"    "}'kind': 'Icon',
							<br />
							{"    "}'props': &#123;
							<br />
							{"      "}'size': '52px',
							<br />
							{"      "}'category': 'md',
							<br />
							{"            "}'icon': 'MdKeyboardArrowLeft',
							<br />
							{"    "}&#125;
							<br />
							{"  "}&#125;,
							<br />
							{"    "}'Arrow next icon': &#123;
							<br />
							{"    "}'kind': 'Icon',
							<br />
							{"    "}'props': &#123;
							<br />
							{"      "}'size': '52px',
							<br />
							{"      "}'category': 'md',
							<br />
							{"            "}'icon': 'MdKeyboardArrowRight',
							<br />
							{"    "}&#125;
							<br />
							{"  "}&#125;,
							<br />
							&#125;;
							<br />
							<br />
							const Image = atomize.img();
							<br />
							<br />
							// Get slide position
							<br />
							const getSide = (numb, opts) =&gt; &#123;
							<br />
							{"    "}let side = 0;
							<br />
							{"    "}
							<br />
							{"    "}if (numb &gt; opts.active) &#123;
							<br />
							{"        "}side = 1;
							<br />
							{"    "}&#125;
							<br />
							{"    "}if (numb &lt; opts.active) &#123;
							<br />
							{"        "}side = -1;
							<br />
							{"    "}&#125;
							<br />
							{"    "}
							<br />
							{"    "}if (numb === 1 && opts.active === opts.length) &#123;
							<br />
							{"        "}side = 1;
							<br />
							{"    "}&#125;
							<br />
							{"    "}if (opts.active === 1 && numb === opts.length) &#123;
							<br />
							{"        "}side = -1;
							<br />
							{"    "}&#125;
							<br />
							{"    "}if (opts.length === 1) &#123;
							<br />
							{"        "}side = 0;
							<br />
							{"    "}&#125;
							<br />
							{"    "}
							<br />
							{"    "}return side;
							<br />
							&#125;
							<br />
							<br />
							const Slide = (&#123;src, numb, height, duration, opts&#125;) =&gt; &#123;
							<br />
							{"    "}const isTarget = numb === opts.target;
							<br />
							{"    "}const isActive = numb === opts.active;
							<br />
							{"    "}const side = getSide(numb, opts) * 100;
							<br />
							{"    "}
							<br />
							{"    "}let position = side;
							<br />
							{"    "}
							<br />
							{"    "}if (isTarget && !isActive) &#123;
							<br />
							{"        "}position = '0';
							<br />
							{"    "}&#125;
							<br />
							{"    "}if (isActive && !isTarget) &#123;
							<br />
							{"        "}position = -1 * getSide(opts.target, opts) * 100;
							<br />
							{"    "}&#125;
							<br />
							{"    "}
							<br />
							{"    "}return (
							<br />
							{"        "}&lt;Box
							<br />
							{"            "}left="0"
							<br />
							{"            "}padding-top=&#123;height&#125;
							<br />
							{"            "}width="100%"
							<br />
							{"            "}margin-right="-100%"
							<br />
							{"            "}box-sizing="border-box"
							<br />
							{"            "}user-select="none"
							<br />
							{"            "}position="relative"
							<br />
							{"            "}display="inline-block"
							<br />
							{"            "}overflow="hidden"
							<br />
							{"            "}
							<br />
							{"            "}transition=&#123;`all $&#123;isActive || isTarget ? duration : 0&#125;ms ease`&#125;
							<br />
							{"            "}
							<br />
							{"            "}transform=&#123;`translateX($&#123;position&#125;%)`&#125;
							<br />
							{"            "}z-index=&#123;isActive ? '3' : isTarget ? '2' : '1'&#125;
							<br />
							{"        "}&gt;
							<br />
							{"            "}&lt;Image
							<br />
							{"                "}src=&#123;src&#125;
							<br />
							{"                "}
							<br />
							{"                "}top="0"
							<br />
							{"                "}width="100%"
							<br />
							{"                "}min-heigh="100%"
							<br />
							{"                "}box-sizing="border-box"
							<br />
							{"                "}user-select="none"
							<br />
							{"                "}position="absolute"
							<br />
							{"                "}display="block"
							<br />
							{"            "}/&gt;
							<br />
							{"        "}&lt;/Box&gt;
							<br />
							{"    "});
							<br />
							&#125;
							<br />
							<br />
							const Arrow = (&#123;type, color, alpha, click, override&#125;) =&gt; &#123;
							<br />
							{"    "}return (
							<br />
							{"        "}&lt;Box
							<br />
							{"            "}top="0"
							<br />
							{"            "}left=&#123;type === 'prev' ? '0' : 'auto'&#125;
							<br />
							{"            "}right=&#123;type === 'next' ? '0' : 'auto'&#125;
							<br />
							{"            "}width="33%"
							<br />
							{"            "}min-width="5rem"
							<br />
							{"            "}height="100%"
							<br />
							{"            "}transition="opacity .3s ease"
							<br />
							{"            "}pointer-events="all"
							<br />
							{"            "}position="absolute"
							<br />
							{"            "}cursor="pointer"
							<br />
							{"            "}opacity=&#123;alpha&#125;
							<br />
							{"            "}z-index="5"
							<br />
							{"            "}
							<br />
							{"            "}background=&#123;`
							<br />
							{"                "}linear-gradient(
							<br />
							{"                    "}to $&#123;type === 'prev' ? 'right' : 'left'&#125;,
							<br />
							{"                    "}rgba(0,0,0,0.25) 0,
							<br />
							{"                    "}rgba(0,0,0,0) 100%)
							<br />
							{"                    "}rgba(0,0,0,0)
							<br />
							{"            "}`&#125;
							<br />
							{"            "}
							<br />
							{"            "}align-items="center"
							<br />
							{"            "}justify-content=&#123;type === 'prev' ? 'flex-start' : 'flex-end'&#125;
							<br />
							{"            "}display="flex"
							<br />
							{"            "}
							<br />
							{"            "}hover-opacity="1"
							<br />
							{"            "}
							<br />
							{"            "}onClick=&#123;click&#125;
							<br />
							{"            "}
							<br />
							{"            "}&#123;...override(`Arrow $&#123;type&#125;`)&#125;
							<br />
							{"        "}&gt;
							<br />
							{"            "}&lt;Icon
							<br />
							{"                "}color=&#123;color || '#EEEEEE'&#125;
							<br />
							{"                "}
							<br />
							{"                "}&#123;...override(`Arrow $&#123;type&#125; icon`)&#125;
							<br />
							{"            "}/&gt;
							<br />
							{"        "}&lt;/Box&gt;
							<br />
							{"    "})
							<br />
							&#125;
							<br />
							<br />
							const Point = (&#123;numb, color, alpha, opts, click, override&#125;) =&gt; &#123;
							<br />
							{"    "}const isTarget = numb === opts.target;
							<br />
							{"    "}
							<br />
							{"    "}return (
							<br />
							{"        "}&lt;Box
							<br />
							{"            "}margin="0"
							<br />
							{"            "}width="1rem"
							<br />
							{"            "}height="1rem"
							<br />
							{"            "}border="none"
							<br />
							{"            "}outline="0"
							<br />
							{"            "}transition="opacity .3s ease"
							<br />
							{"            "}pointer-events="all"
							<br />
							{"            "}box-sizing="border-box"
							<br />
							{"            "}user-select="none"
							<br />
							{"            "}position="relative"
							<br />
							{"            "}display="block"
							<br />
							{"            "}cursor="pointer"
							<br />
							{"            "}
							<br />
							{"            "}opacity=&#123;isTarget ? '1' : alpha&#125;
							<br />
							{"            "}hover-opacity="1"
							<br />
							{"            "}
							<br />
							{"            "}onClick=&#123;click&#125;
							<br />
							{"            "}
							<br />
							{"            "}&#123;...override(`Point $&#123;numb&#125;`)&#125;
							<br />
							{"        "}&gt;
							<br />
							{"            "}&lt;Box
							<br />
							{"                "}top="calc(50% - .5rem)"
							<br />
							{"                "}left="calc(50% - .5rem)"
							<br />
							{"                "}width=".75rem"
							<br />
							{"                "}height=".75rem"
							<br />
							{"                "}min-width="0"
							<br />
							{"                "}min-height="0"
							<br />
							{"                "}border-radius="50%"
							<br />
							{"                "}background=&#123;color || '#EEEEEE'&#125;
							<br />
							{"                "}transition="background .2s ease, transform .2s ease"
							<br />
							{"                "}transform=&#123;`scale($&#123;isTarget ? 1 : 0.625&#125;)`&#125;
							<br />
							{"                "}position="absolute"
							<br />
							{"                "}display="block"
							<br />
							{"                "}
							<br />
							{"                "}&#123;...override(`Point $&#123;numb&#125; dot`)&#125;
							<br />
							{"            "}/&gt;
							<br />
							{"        "}&lt;/Box&gt;
							<br />
							{"    "})
							<br />
							&#125;
							<br />
							<br />
							const Slider = (&#123;
							<br />
							{"    "}slides,
							<br />
							{"    "}height,
							<br />
							{"    "}duration,
							<br />
							{"    "}colorArrows,
							<br />
							{"    "}alphaArrows,
							<br />
							{"    "}colorPoints,
							<br />
							{"    "}alphaPoints,
							<br />
							{"    "}...props
							<br />
							&#125;) =&gt; &#123;
							<br />
							{"  "}const &#123; override, rest &#125; = useOverrides(props, overrides);
							<br />
							{"    "}
							<br />
							{"    "}const [srcs] = useState(slides.length &gt; 0 ? slides.split(',').reverse() : []);
							<br />
							{"    "}
							<br />
							{"    "}const [active, setActive] = useState(1);
							<br />
							{"    "}const [target, setTarget] = useState(1);
							<br />
							{"    "}const [length, setLength] = useState(srcs.length);
							<br />
							{"    "}const [isSwitch, setSwitch] = useState(false);
							<br />
							{"    "}
							<br />
							{"    "}// Switch active slide
							<br />
							{"    "}useEffect(() =&gt; &#123;
							<br />
							{"        "}if (!isSwitch) return;
							<br />
							{"        "}
							<br />
							{"        "}setTimeout(() =&gt; &#123;
							<br />
							{"            "}setActive(target);
							<br />
							{"            "}setSwitch(false);
							<br />
							{"        "}&#125;, duration);
							<br />
							{"    "}&#125;);
							<br />
							{"    "}
							<br />
							{"    "}// Click on 'prev' arrow
							<br />
							{"    "}const slidePrev = () =&gt; &#123;
							<br />
							{"        "}if (isSwitch) return;
							<br />
							{"        "}
							<br />
							{"        "}setTarget(target &lt;= 1 ? length : active - 1);
							<br />
							{"        "}setSwitch(true);
							<br />
							{"    "}&#125;;
							<br />
							<br />
							{"    "}// Click on 'next' arrow
							<br />
							{"    "}const slideNext = () =&gt; &#123;
							<br />
							{"        "}if (isSwitch) return;
							<br />
							{"        "}
							<br />
							{"        "}setTarget(target &gt;= length ? 1 : active + 1);
							<br />
							{"        "}setSwitch(true);
							<br />
							{"    "}&#125;;
							<br />
							{"    "}
							<br />
							{"    "}// Click on point
							<br />
							{"    "}const clickNumb = numb =&gt; &#123;
							<br />
							{"        "}if (isSwitch) return;
							<br />
							{"        "}
							<br />
							{"        "}setTarget(numb);
							<br />
							{"        "}setSwitch(true);
							<br />
							{"    "}&#125;
							<br />
							{"    "}
							<br />
							{"    "}let touchStartX, touchStartY;
							<br />
							{"    "}
							<br />
							{"    "}// Start swipe on mobile
							<br />
							{"    "}const touchStart = e =&gt; &#123;
							<br />
							{"        "}touchStartX = e.targetTouches[0].clientX;
							<br />
							{"        "}touchStartY = e.targetTouches[0].clientY;
							<br />
							{"    "}&#125;
							<br />
							{"    "}
							<br />
							{"    "}// Stop swipe and fire event
							<br />
							{"    "}const touchEnd = e =&gt; &#123;
							<br />
							{"        "}if (!touchStartX || !touchStartY) return;
							<br />
							{"        "}
							<br />
							{"        "}const
							<br />
							{"            "}touchEndX = e.changedTouches[0].clientX,
							<br />
							{"            "}touchEndY = e.changedTouches[0].clientY,
							<br />
							{"            "}
							<br />
							{"            "}diffX = Math.abs(touchEndX - touchStartX),
							<br />
							{"            "}diffY = Math.abs(touchEndY - touchStartY),
							<br />
							{"            "}
							<br />
							{"            "}diffP = diffX / e.target.offsetWidth;
							<br />
							{"        "}
							<br />
							{"        "}if (diffX &lt; diffY || diffP &lt; .1) return;
							<br />
							{"        "}
							<br />
							{"        "}if (touchStartX &gt; touchEndX) &#123;
							<br />
							{"          "}slideNext();
							<br />
							{"        "}&#125; else &#123;
							<br />
							{"            "}slidePrev();
							<br />
							{"        "}&#125;
							<br />
							{"    "}&#125;
							<br />
							{"    "}
							<br />
							{"    "}return (
							<br />
							{"        "}&lt;Box
							<br />
							{"            "}&#123;...rest&#125;
							<br />
							{"            "}
							<br />
							{"            "}position="relative"
							<br />
							{"        "}&gt;
							<br />
							{"            "}&lt;Box
							<br />
							{"                "}width="100%"
							<br />
							{"                "}position="relative"
							<br />
							{"                "}display="flex"
							<br />
							{"                "}overflow="hidden"
							<br />
							{"            "}&gt;
							<br />
							{"                "}&#123; srcs.map((src, i) =&gt; (
							<br />
							{"                    "}&lt;Slide
							<br />
							{"                        "}src=&#123;src&#125;
							<br />
							{"                        "}numb=&#123;i+1&#125;
							<br />
							{"                        "}height=&#123;height&#125;
							<br />
							{"                        "}duration=&#123;duration&#125;
							<br />
							{"                        "}opts=&#123;&#123;
							<br />
							{"                            "}active,
							<br />
							{"                            "}target,
							<br />
							{"                            "}length,
							<br />
							{"                        "}&#125;&#125;
							<br />
							{"                    "}/&gt;
							<br />
							{"                "}))&#125;
							<br />
							{"            "}&lt;/Box&gt;
							<br />
							{"            "}&lt;Box
							<br />
							{"              "}top="0"
							<br />
							{"                "}left="0"
							<br />
							{"                "}width="100%"
							<br />
							{"                "}height="100%"
							<br />
							{"                "}box-sizing="border-box"
							<br />
							{"                "}user-select="none"
							<br />
							{"                "}position="absolute"
							<br />
							{"                "}
							<br />
							{"                "}onTouchStart=&#123;e =&gt; touchStart(e)&#125;
							<br />
							{"                "}onTouchEnd=&#123;e =&gt; touchEnd(e)&#125;
							<br />
							{"            "}&gt;
							<br />
							{"                "}&lt;Arrow
							<br />
							{"                    "}type="prev"
							<br />
							{"                    "}click=&#123;() =&gt; slidePrev()&#125;
							<br />
							{"                    "}color=&#123;colorArrows&#125;
							<br />
							{"                    "}alpha=&#123;alphaArrows&#125;
							<br />
							{"                    "}override=&#123;override&#125;
							<br />
							{"                "}/&gt;
							<br />
							{"                "}&lt;Arrow
							<br />
							{"                    "}type="next"
							<br />
							{"                    "}click=&#123;() =&gt; slideNext()&#125;
							<br />
							{"                    "}color=&#123;colorArrows&#125;
							<br />
							{"                    "}alpha=&#123;alphaArrows&#125;
							<br />
							{"                    "}override=&#123;override&#125;
							<br />
							{"                "}/&gt;
							<br />
							{"            "}&lt;/Box&gt;
							<br />
							{"            "}&lt;Box
							<br />
							{"                "}bottom=".5rem"
							<br />
							{"                "}left="0"
							<br />
							{"                "}width="100%"
							<br />
							{"                "}height="1.5rem"
							<br />
							{"                "}align-content="center"
							<br />
							{"                "}justify-content="center"
							<br />
							{"                "}pointer-events="none"
							<br />
							{"                "}box-sizing="border-box"
							<br />
							{"                "}user-select="none"
							<br />
							{"                "}position="absolute"
							<br />
							{"                "}display="flex"
							<br />
							{"                "}z-index="6"
							<br />
							{"                "}
							<br />
							{"                "}&#123;...override('Points')&#125;
							<br />
							{"            "}&gt;
							<br />
							{"                "}&#123; srcs.map((src, i) =&gt; (
							<br />
							{"                    "}&lt;Point
							<br />
							{"                        "}numb=&#123;i+1&#125;
							<br />
							{"                        "}click=&#123;() =&gt; clickNumb(i+1)&#125;
							<br />
							{"                        "}color=&#123;colorPoints&#125;
							<br />
							{"                        "}alpha=&#123;alphaPoints&#125;
							<br />
							{"                        "}opts=&#123;&#123; target &#125;&#125;
							<br />
							{"                        "}override=&#123;override&#125;
							<br />
							{"                    "}/&gt;
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
							{"    "}slides: &#123;
							<br />
							{"        "}title: 'Image URLs',
							<br />
							{"    "}multiply: true,
							<br />
							{"        "}control: 'image',
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Slides',
							<br />
							{"        "}weight: 1,
							<br />
							{"    "}&#125;,
							<br />
							{"    "}height: &#123;
							<br />
							{"        "}title: 'Height of the slider',
							<br />
							{"        "}control: 'text',
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Slider',
							<br />
							{"        "}weight: 1,
							<br />
							{"    "}&#125;,
							<br />
							{"    "}duration: &#123;
							<br />
							{"        "}title: 'Animation duration',
							<br />
							{"        "}control: 'text',
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Slider',
							<br />
							{"        "}weight: 1,
							<br />
							{"    "}&#125;,
							<br />
							{"    "}colorArrows: &#123;
							<br />
							{"        "}title: 'Arrows color',
							<br />
							{"        "}control: 'color',
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Color',
							<br />
							{"        "}weight: .67,
							<br />
							{"    "}&#125;,
							<br />
							{"    "}alphaArrows: &#123;
							<br />
							{"        "}title: 'Opacity',
							<br />
							{"        "}control: 'text',
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Color',
							<br />
							{"        "}weight: .33,
							<br />
							{"    "}&#125;,
							<br />
							{"    "}colorPoints: &#123;
							<br />
							{"        "}title: 'Points color',
							<br />
							{"        "}control: 'color',
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Color',
							<br />
							{"        "}weight: .67,
							<br />
							{"    "}&#125;,
							<br />
							{"    "}alphaPoints: &#123;
							<br />
							{"        "}title: 'Opacity',
							<br />
							{"        "}control: 'text',
							<br />
							{"        "}type: 'string',
							<br />
							{"        "}category: 'Color',
							<br />
							{"        "}weight: .33,
							<br />
							{"    "}&#125;,
							<br />
							&#125;;
							<br />
							<br />
							const defaultProps = &#123;
							<br />
							{"    "}slides: `
							<br />
							https://images.pexels.com/photos/757183/pexels-photo-757183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260,
							<br />
							https://images.pexels.com/photos/803940/pexels-photo-803940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260,
							<br />
							https://images.pexels.com/photos/1045922/pexels-photo-1045922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260,
							<br />
							https://images.pexels.com/photos/1586154/pexels-photo-1586154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
							<br />
							{"    "}`,
							<br />
							{"    "}height: '62.5%',
							<br />
							{"    "}duration: 1000,
							<br />
							{"    "}colorArrows: '#EEEEEE',
							<br />
							{"    "}colorPoints: '#EEEEEE',
							<br />
							{"    "}alphaArrows: '.75',
							<br />
							{"    "}alphaPoints: '.5',
							<br />
							&#125;
							<br />
							<br />
							export default Object.assign(Slider, &#123;
							<br />
							{"    "}title: 'Slider',
							<br />
							{"    "}description: &#123;
							<br />
							{"        "}en: 'Awesome swipe slider!',
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
						data="Image URLs;URL-адрес изображений;Input;Принимает адреса изображений с расширением PNG\\JPG\\BMP и пр.,Animation duration;Скорость перелистывания изображений;Input,Height of the slider;Высота слайдера;Input"
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
		<Section padding="40px 0 60px 0" background="--color-indigo">
			<Stack>
				{"    "}
				<StackItem width="55%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" justify-content="center" align-items="flex-start" />
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 26px 0px"
						display="inline-block"
						color="--light"
						nout-font="normal 600 36px/1.2 Source Sans Pro, sans-serif"
						lg-font="normal 600 24px/1.2 Source Sans Pro, sans-serif"
						md-font="normal 600 18px/1.2 Source Sans Pro, sans-serif"
					>
						Инструкции по добавлению кода
					</Text>
					<Text
						font="--headline4"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="--light"
						nout-font="500 16px/1.5 Source Sans Pro, sans-serif"
						lg-font="500 14px/1.5 Source Sans Pro, sans-serif"
						md-font="500 13px/1.5 Source Sans Pro, sans-serif"
					>
						Чтобы установить компонент вам нужно во вкладке "Сomponents",{" "}
						<br />
						в разделе "Project" добавить свой компонент и установить код{" "}
						<br />
						необходимого компонента в открывшемся окне
					</Text>
					<Link
						text-decoration-line="initial"
						color="--dark"
						padding="10px 22px"
						border-radius="8px"
						text-transform="uppercase"
						font="--headline4"
						letter-spacing="1px"
						transition="transform 0.1s ease-in-out 0s;"
						transform="translateY(0px)"
						hover-transform="translateY(-2px)"
						background="--color-light"
						text-align="center"
						nout-font="normal 600 17px/1.5 --fontFamily-googleSourceSansPro"
						lg-font="500 15px/1.5 Source Sans Pro, sans-serif"
						md-font="500 13px/1.5 Source Sans Pro, sans-serif"
						href="/faq"
					>
						Посмотреть инструкцию
					</Link>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="45%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" nout-justify-content="center" />
					{"        "}
					<Text
						font="--headline3"
						margin="0px 0px 26px 0px"
						display="inline-block"
						color="--light"
						lg-font="normal 500 25px/1.2 Source Sans Pro, sans-serif"
						md-font="normal 500 18px/1.2 Source Sans Pro, sans-serif"
					>
						Видео-инструкция
					</Text>
					<Box
						height="15px"
						background="--color-light"
						display="flex"
						align-items="center"
						padding="0px 0px 0px 5px"
					>
						<Icon category="bs" icon={BsFillCircleFill} color="#fc605c" size="8px" />
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							color="#fdbc40"
							size="8px"
							margin="0px 0px 0px 2px"
						/>
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							color="#34c749"
							size="8px"
							margin="0px 0px 0px 2px"
						/>
					</Box>
					<Components.YouTubeVideo
						border-width="0px 8px 8px 8px"
						border-style="solid"
						border-color="--color-light"
						height="305px"
						nout-height="auto"
						nout-padding="0px 0px 0px 0px"
						nout-margin="0px 0px 0px 0px"
					/>
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