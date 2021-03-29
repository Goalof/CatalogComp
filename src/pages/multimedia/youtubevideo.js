import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"multimedia/youtubevideo"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Shapka />
		<Components.HeroBlock background="#181C22 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/youtubcheg.png?v=2020-10-09T02:41:12.571Z) 98% 100%/15% no-repeat">
			<Override slot="text">
				YouTube Video{"\n\n"}
			</Override>
			<Override slot="text1">
				В этом компоненте вы можете разместить ссылку на любое видео с YouTube, после чего этот компонент установить в любом месте сайта для онлайн просмотра.{"\n\n"}
			</Override>
		</Components.HeroBlock>
		<Components.InfoComp>
			<Override slot="text1" margin="0px 10px 0px 0px">
				Size: 11.7 kb |
			</Override>
			<Override slot="text3" font="300 20px " />
		</Components.InfoComp>
		<Section padding="50px 0 50px 0">
			<Stack gap="--cmp-stack-gap-small">
				{"    "}
				<StackItem width="50%" display="flex" fullhd-width="40%" md-width="100%">
					<Override
						slot="StackItemContent"
						fullhd-align-items="center"
						fullhd-justify-content="center"
						align-items="center"
						justify-content="center"
					/>
					{"        "}
					<Components.VideoinYouTube width="90%" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					{"        "}
					<Components.Codes width="100%">
						<Override slot="Code Alert">
							Код скопирован в буфер обмена!
						</Override>
						<Override slot="Code Text" lg-font="13px/15px Consolas, &quot;Andale Mono WT&quot;, &quot;Andale Mono&quot;, &quot;Lucida Console&quot;, &quot;Lucida Sans Typewriter&quot;, &quot;DejaVu Sans Mono&quot;, &quot;Bitstream Vera Sans Mono&quot;, &quot;Liberation Mono&quot;, &quot;Nimbus Mono L&quot;, Monaco, &quot;Courier New&quot;, Courier, monospace">
							/**
							<br />
							{" "}*  YTVideo
							<br />
							{" "}*  Компонент, для воспроизведения видео с Youtube.
							<br />
							{" "}*  Два варианта работы:
							<br />
							{" "}*  1 - "Fast and low traffic" - сначала отображается только превью, а затем подгружается видео (iframe)
							<br />
							{" "}*  ютуба
							<br />
							{" "}*  Плюсы и минусы:
							<br />
							{" "}*  + При большом колличестве видео быстрее грузиться и тратиться меньше трафика
							<br />
							{" "}*    Каждое видео через стандартный iframe подгружает ≈500kb, даже если пользователь не будет смотреть все эти видео.
							<br />
							{" "}*    В этом же способе, видео подгружается только при старте.
							<br />
							{" "}*  - Нет дополнительных клавиш, пока не запустил видео (смотреть позже, поделиться и т.д)
							<br />
							{" "}*  2 - "Standard" - стандартный iframe
							<br />
							{" "}*/
							<br />
							import React, &#123; useState &#125; from "react";
							<br />
							import atomize from "@quarkly/atomize";
							<br />
							<br />
							const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
							<br />
							<br />
							const youtubeParser = url =&gt; &#123;
							<br />
							{"  "}var match = url.match(regExp);
							<br />
							{"  "}return match && match[7].length === 11 ? match[7] : false;
							<br />
							&#125;;
							<br />
							<br />
							const generateUrl = (id, params) =&gt; &#123;
							<br />
							{"  "}const defaultParams = &#123;
							<br />
							{"    "}rel: 0,
							<br />
							{"    "}showinfo: 0,
							<br />
							{"    "}start: 0,
							<br />
							{"    "}autoplay: true,
							<br />
							{"    "}loop: false,
							<br />
							{"    "}playlist: ""
							<br />
							{"  "}&#125;;
							<br />
							{"  "}const p = Object.assign(defaultParams, params);
							<br />
							{"  "}if (p.loop) &#123;
							<br />
							{"    "}p.playlist = id;
							<br />
							{"  "}&#125;
							<br />
							{"  "}const q = new URLSearchParams(p).toString();
							<br />
							{"  "}return `https://www.youtube.com/embed/$&#123;id&#125;/?$&#123;q&#125;`;
							<br />
							&#125;;
							<br />
							<br />
							const Wrapper = atomize.div();
							<br />
							const Container = atomize.div(&#123;
							<br />
							{"  "}effects: &#123;
							<br />
							{"    "}YThover: ":hover &gt; button &gt; svg:first-child"
							<br />
							{"  "}&#125;
							<br />
							&#125;);
							<br />
							const Button = atomize.button();
							<br />
							const Image = atomize.img();
							<br />
							const VideoIframe = atomize.iframe();
							<br />
							<br />
							const YoutubeButton = atomize(() =&gt; &#123;
							<br />
							{"  "}return (
							<br />
							{"    "}&lt;Button
							<br />
							{"      "}bgc="transparent"
							<br />
							{"      "}pos="absolute"
							<br />
							{"      "}t="50%"
							<br />
							{"      "}l="50%"
							<br />
							{"      "}w="68"
							<br />
							{"      "}h="48"
							<br />
							{"      "}bd="none"
							<br />
							{"      "}p="0"
							<br />
							{"      "}trf="translate(-50%, -50%)"
							<br />
							{"      "}aria-label="Start video"
							<br />
							{"      "}ol="none"
							<br />
							{"    "}&gt;
							<br />
							{"      "}&lt;svg width="68" height="48" viewBox="0 0 68 48"&gt;
							<br />
							{"        "}&lt;path
							<br />
							{"          "}fillOpacity="0.8"
							<br />
							{"          "}d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
							<br />
							{"        "}/&gt;
							<br />
							{"        "}&lt;path fill="#fff" d="M 45,24 27,14 27,34" /&gt;
							<br />
							{"      "}&lt;/svg&gt;
							<br />
							{"    "}&lt;/Button&gt;
							<br />
							{"  "});
							<br />
							&#125;)(&#123;
							<br />
							{"  "}effects: &#123; hover: ":hover" &#125;
							<br />
							&#125;);
							<br />
							<br />
							const YTVideo = (&#123;
							<br />
							{"  "}src,
							<br />
							{"  "}alt,
							<br />
							{"  "}variant,
							<br />
							{"  "}autoplay,
							<br />
							{"  "}loop,
							<br />
							{"  "}start,
							<br />
							{"  "}end,
							<br />
							{"  "}...props
							<br />
							&#125;) =&gt; &#123;
							<br />
							{"  "}const id = youtubeParser(src);
							<br />
							{"  "}const [enabled, setEnabled] = useState(variant === "Standard" || autoplay);
							<br />
							<br />
							{"  "}if (!id) return &lt;div &#123;...props&#125;&gt;Error: Youtube link is not correct&lt;/div&gt;;
							<br />
							<br />
							{"  "}const videomedia = &#123;
							<br />
							{"    "}pos: "absolute",
							<br />
							{"    "}h: "100%",
							<br />
							{"    "}w: "100%",
							<br />
							{"    "}t: 0,
							<br />
							{"    "}l: 0,
							<br />
							{"    "}border: "none"
							<br />
							{"  "}&#125;;
							<br />
							<br />
							{"  "}return (
							<br />
							{"    "}&lt;Wrapper &#123;...props&#125;&gt;
							<br />
							{"      "}&lt;Container
							<br />
							{"        "}pos="relative"
							<br />
							{"        "}w="100%"
							<br />
							{"        "}h="0"
							<br />
							{"        "}pb="56.25%"
							<br />
							{"        "}onClick=&#123;() =&gt; setEnabled(true)&#125;
							<br />
							{"        "}// ATTENTION!
							<br />
							{"        "}// В quarkly это не работает, возможно на сайте не обновлена версия @quarkly/atomize до 1.0.6
							<br />
							{"        "}YThover-fil="#f00"
							<br />
							{"      "}&gt;
							<br />
							{"        "}&#123;enabled ? (
							<br />
							{"          "}&lt;VideoIframe
							<br />
							{"            "}&#123;...videomedia&#125;
							<br />
							{"            "}src=&#123;generateUrl(id, &#123;
							<br />
							{"              "}autoplay: variant !== "Standard" || autoplay,
							<br />
							{"              "}start,
							<br />
							{"              "}end,
							<br />
							{"              "}loop
							<br />
							{"            "}&#125;)&#125;
							<br />
							{"            "}allowFullScreen
							<br />
							{"          "}/&gt;
							<br />
							{"        "}) : (
							<br />
							{"          "}&lt;&gt;
							<br />
							{"            "}&lt;picture&gt;
							<br />
							{"              "}&lt;source
							<br />
							{"                "}type="image/webp"
							<br />
							{"                "}srcSet=&#123;`https://i.ytimg.com/vi_webp/$&#123;id&#125;/maxresdefault.webp`&#125;
							<br />
							{"              "}/&gt;
							<br />
							{"              "}&lt;Image
							<br />
							{"                "}&#123;...videomedia&#125;
							<br />
							{"                "}src=&#123;`https://i.ytimg.com/vi/$&#123;id&#125;/maxresdefault.jpg`&#125;
							<br />
							{"                "}alt=&#123;alt&#125;
							<br />
							{"              "}/&gt;
							<br />
							{"            "}&lt;/picture&gt;
							<br />
							{"            "}&lt;YoutubeButton /&gt;
							<br />
							{"          "}&lt;/&gt;
							<br />
							{"        "})&#125;
							<br />
							{"      "}&lt;/Container&gt;
							<br />
							{"    "}&lt;/Wrapper&gt;
							<br />
							{"  "});
							<br />
							&#125;;
							<br />
							<br />
							export default atomize(YTVideo)(
							<br />
							{"  "}&#123;
							<br />
							{"    "}effects: &#123; hover: ":hover" &#125;,
							<br />
							{"    "}description: &#123;
							<br />
							{"      "}en: "Display video from youtube"
							<br />
							{"    "}&#125;,
							<br />
							{"    "}propInfo: &#123;
							<br />
							{"      "}src: &#123;
							<br />
							{"        "}description: &#123;
							<br />
							{"          "}en: "Youtube video source"
							<br />
							{"        "}&#125;,
							<br />
							{"        "}control: "input",
							<br />
							{"        "}category: "Video",
							<br />
							{"        "}weight: 1
							<br />
							{"      "}&#125;,
							<br />
							{"      "}alt: &#123;
							<br />
							{"        "}description: &#123;
							<br />
							{"          "}en: "Alternative name"
							<br />
							{"        "}&#125;,
							<br />
							{"        "}control: "input",
							<br />
							{"        "}category: "Video",
							<br />
							{"        "}weight: 1
							<br />
							{"      "}&#125;,
							<br />
							{"      "}variant: &#123;
							<br />
							{"        "}description: &#123;
							<br />
							{"          "}en: "Variant of player"
							<br />
							{"        "}&#125;,
							<br />
							{"        "}control: "select",
							<br />
							{"        "}category: "Player",
							<br />
							{"        "}variants: ["Fast and low traffic (recomended)", "Standard"],
							<br />
							{"        "}weight: 1
							<br />
							{"      "}&#125;,
							<br />
							{"      "}loop: &#123;
							<br />
							{"        "}description: &#123;
							<br />
							{"          "}en: "Loop"
							<br />
							{"        "}&#125;,
							<br />
							{"        "}category: "Video",
							<br />
							{"        "}control: "checkbox"
							<br />
							{"      "}&#125;,
							<br />
							{"      "}autoplay: &#123;
							<br />
							{"        "}description: &#123;
							<br />
							{"          "}en: "Autoplay"
							<br />
							{"        "}&#125;,
							<br />
							{"        "}category: "Video",
							<br />
							{"        "}control: "checkbox"
							<br />
							{"      "}&#125;,
							<br />
							{"      "}start: &#123;
							<br />
							{"        "}description: &#123;
							<br />
							{"          "}en: "Start from"
							<br />
							{"        "}&#125;,
							<br />
							{"        "}category: "Video",
							<br />
							{"        "}control: "input"
							<br />
							{"      "}&#125;,
							<br />
							{"      "}end: &#123;
							<br />
							{"        "}description: &#123;
							<br />
							{"          "}en: "End"
							<br />
							{"        "}&#125;,
							<br />
							{"        "}category: "Video",
							<br />
							{"        "}control: "input"
							<br />
							{"      "}&#125;
							<br />
							{"    "}&#125;
							<br />
							{"  "}&#125;, // configuration
							<br />
							{"  "}&#123;
							<br />
							{"    "}// default props
							<br />
							{"    "}src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
							<br />
							{"    "}alt: "My video",
							<br />
							{"    "}variant: "Fast and low traffic (recomended)",
							<br />
							{"    "}start: "0",
							<br />
							{"    "}loop: false,
							<br />
							{"    "}autoplay: false
							<br />
							{"  "}&#125;
							<br />
							);/**
							<br />
							{" "}*  YTVideo
							<br />
							{" "}*  Компонент, для воспроизведения видео с Youtube.
							<br />
							{" "}*  Два варианта работы:
							<br />
							{" "}*  1 - "Fast and low traffic" - сначала отображается только превью, а затем подгружается видео (iframe)
							<br />
							{" "}*  ютуба
							<br />
							{" "}*  Плюсы и минусы:
							<br />
							{" "}*  + При большом колличестве видео быстрее грузиться и тратиться меньше трафика
							<br />
							{" "}*    Каждое видео через стандартный iframe подгружает ≈500kb, даже если пользователь не будет смотреть все эти видео.
							<br />
							{" "}*    В этом же способе, видео подгружается только при старте.
							<br />
							{" "}*  - Нет дополнительных клавиш, пока не запустил видео (смотреть позже, поделиться и т.д)
							<br />
							{" "}*  2 - "Standard" - стандартный iframe
							<br />
							{" "}*/
							<br />
							import React, &#123; useState &#125; from "react";
							<br />
							import atomize from "@quarkly/atomize";
							<br />
							<br />
							const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
							<br />
							<br />
							const youtubeParser = url =&gt; &#123;
							<br />
							{"  "}var match = url.match(regExp);
							<br />
							{"  "}return match && match[7].length === 11 ? match[7] : false;
							<br />
							&#125;;
							<br />
							<br />
							const generateUrl = (id, params) =&gt; &#123;
							<br />
							{"  "}const defaultParams = &#123;
							<br />
							{"    "}rel: 0,
							<br />
							{"    "}showinfo: 0,
							<br />
							{"    "}start: 0,
							<br />
							{"    "}autoplay: true,
							<br />
							{"    "}loop: false,
							<br />
							{"    "}playlist: ""
							<br />
							{"  "}&#125;;
							<br />
							{"  "}const p = Object.assign(defaultParams, params);
							<br />
							{"  "}if (p.loop) &#123;
							<br />
							{"    "}p.playlist = id;
							<br />
							{"  "}&#125;
							<br />
							{"  "}const q = new URLSearchParams(p).toString();
							<br />
							{"  "}return `https://www.youtube.com/embed/$&#123;id&#125;/?$&#123;q&#125;`;
							<br />
							&#125;;
							<br />
							<br />
							const Wrapper = atomize.div();
							<br />
							const Container = atomize.div(&#123;
							<br />
							{"  "}effects: &#123;
							<br />
							{"    "}YThover: ":hover &gt; button &gt; svg:first-child"
							<br />
							{"  "}&#125;
							<br />
							&#125;);
							<br />
							const Button = atomize.button();
							<br />
							const Image = atomize.img();
							<br />
							const VideoIframe = atomize.iframe();
							<br />
							<br />
							const YoutubeButton = atomize(() =&gt; &#123;
							<br />
							{"  "}return (
							<br />
							{"    "}&lt;Button
							<br />
							{"      "}bgc="transparent"
							<br />
							{"      "}pos="absolute"
							<br />
							{"      "}t="50%"
							<br />
							{"      "}l="50%"
							<br />
							{"      "}w="68"
							<br />
							{"      "}h="48"
							<br />
							{"      "}bd="none"
							<br />
							{"      "}p="0"
							<br />
							{"      "}trf="translate(-50%, -50%)"
							<br />
							{"      "}aria-label="Start video"
							<br />
							{"      "}ol="none"
							<br />
							{"    "}&gt;
							<br />
							{"      "}&lt;svg width="68" height="48" viewBox="0 0 68 48"&gt;
							<br />
							{"        "}&lt;path
							<br />
							{"          "}fillOpacity="0.8"
							<br />
							{"          "}d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
							<br />
							{"        "}/&gt;
							<br />
							{"        "}&lt;path fill="#fff" d="M 45,24 27,14 27,34" /&gt;
							<br />
							{"      "}&lt;/svg&gt;
							<br />
							{"    "}&lt;/Button&gt;
							<br />
							{"  "});
							<br />
							&#125;)(&#123;
							<br />
							{"  "}effects: &#123; hover: ":hover" &#125;
							<br />
							&#125;);
							<br />
							<br />
							const YTVideo = (&#123;
							<br />
							{"  "}src,
							<br />
							{"  "}alt,
							<br />
							{"  "}variant,
							<br />
							{"  "}autoplay,
							<br />
							{"  "}loop,
							<br />
							{"  "}start,
							<br />
							{"  "}end,
							<br />
							{"  "}...props
							<br />
							&#125;) =&gt; &#123;
							<br />
							{"  "}const id = youtubeParser(src);
							<br />
							{"  "}const [enabled, setEnabled] = useState(variant === "Standard" || autoplay);
							<br />
							<br />
							{"  "}if (!id) return &lt;div &#123;...props&#125;&gt;Error: Youtube link is not correct&lt;/div&gt;;
							<br />
							<br />
							{"  "}const videomedia = &#123;
							<br />
							{"    "}pos: "absolute",
							<br />
							{"    "}h: "100%",
							<br />
							{"    "}w: "100%",
							<br />
							{"    "}t: 0,
							<br />
							{"    "}l: 0,
							<br />
							{"    "}border: "none"
							<br />
							{"  "}&#125;;
							<br />
							<br />
							{"  "}return (
							<br />
							{"    "}&lt;Wrapper &#123;...props&#125;&gt;
							<br />
							{"      "}&lt;Container
							<br />
							{"        "}pos="relative"
							<br />
							{"        "}w="100%"
							<br />
							{"        "}h="0"
							<br />
							{"        "}pb="56.25%"
							<br />
							{"        "}onClick=&#123;() =&gt; setEnabled(true)&#125;
							<br />
							{"        "}// ATTENTION!
							<br />
							{"        "}// В quarkly это не работает, возможно на сайте не обновлена версия @quarkly/atomize до 1.0.6
							<br />
							{"        "}YThover-fil="#f00"
							<br />
							{"      "}&gt;
							<br />
							{"        "}&#123;enabled ? (
							<br />
							{"          "}&lt;VideoIframe
							<br />
							{"            "}&#123;...videomedia&#125;
							<br />
							{"            "}src=&#123;generateUrl(id, &#123;
							<br />
							{"              "}autoplay: variant !== "Standard" || autoplay,
							<br />
							{"              "}start,
							<br />
							{"              "}end,
							<br />
							{"              "}loop
							<br />
							{"            "}&#125;)&#125;
							<br />
							{"            "}allowFullScreen
							<br />
							{"          "}/&gt;
							<br />
							{"        "}) : (
							<br />
							{"          "}&lt;&gt;
							<br />
							{"            "}&lt;picture&gt;
							<br />
							{"              "}&lt;source
							<br />
							{"                "}type="image/webp"
							<br />
							{"                "}srcSet=&#123;`https://i.ytimg.com/vi_webp/$&#123;id&#125;/maxresdefault.webp`&#125;
							<br />
							{"              "}/&gt;
							<br />
							{"              "}&lt;Image
							<br />
							{"                "}&#123;...videomedia&#125;
							<br />
							{"                "}src=&#123;`https://i.ytimg.com/vi/$&#123;id&#125;/maxresdefault.jpg`&#125;
							<br />
							{"                "}alt=&#123;alt&#125;
							<br />
							{"              "}/&gt;
							<br />
							{"            "}&lt;/picture&gt;
							<br />
							{"            "}&lt;YoutubeButton /&gt;
							<br />
							{"          "}&lt;/&gt;
							<br />
							{"        "})&#125;
							<br />
							{"      "}&lt;/Container&gt;
							<br />
							{"    "}&lt;/Wrapper&gt;
							<br />
							{"  "});
							<br />
							&#125;;
							<br />
							<br />
							export default atomize(YTVideo)(
							<br />
							{"  "}&#123;
							<br />
							{"    "}effects: &#123; hover: ":hover" &#125;,
							<br />
							{"    "}description: &#123;
							<br />
							{"      "}en: "Display video from youtube"
							<br />
							{"    "}&#125;,
							<br />
							{"    "}propInfo: &#123;
							<br />
							{"      "}src: &#123;
							<br />
							{"        "}description: &#123;
							<br />
							{"          "}en: "Youtube video source"
							<br />
							{"        "}&#125;,
							<br />
							{"        "}control: "input",
							<br />
							{"        "}category: "Video",
							<br />
							{"        "}weight: 1
							<br />
							{"      "}&#125;,
							<br />
							{"      "}alt: &#123;
							<br />
							{"        "}description: &#123;
							<br />
							{"          "}en: "Alternative name"
							<br />
							{"        "}&#125;,
							<br />
							{"        "}control: "input",
							<br />
							{"        "}category: "Video",
							<br />
							{"        "}weight: 1
							<br />
							{"      "}&#125;,
							<br />
							{"      "}variant: &#123;
							<br />
							{"        "}description: &#123;
							<br />
							{"          "}en: "Variant of player"
							<br />
							{"        "}&#125;,
							<br />
							{"        "}control: "select",
							<br />
							{"        "}category: "Player",
							<br />
							{"        "}variants: ["Fast and low traffic (recomended)", "Standard"],
							<br />
							{"        "}weight: 1
							<br />
							{"      "}&#125;,
							<br />
							{"      "}loop: &#123;
							<br />
							{"        "}description: &#123;
							<br />
							{"          "}en: "Loop"
							<br />
							{"        "}&#125;,
							<br />
							{"        "}category: "Video",
							<br />
							{"        "}control: "checkbox"
							<br />
							{"      "}&#125;,
							<br />
							{"      "}autoplay: &#123;
							<br />
							{"        "}description: &#123;
							<br />
							{"          "}en: "Autoplay"
							<br />
							{"        "}&#125;,
							<br />
							{"        "}category: "Video",
							<br />
							{"        "}control: "checkbox"
							<br />
							{"      "}&#125;,
							<br />
							{"      "}start: &#123;
							<br />
							{"        "}description: &#123;
							<br />
							{"          "}en: "Start from"
							<br />
							{"        "}&#125;,
							<br />
							{"        "}category: "Video",
							<br />
							{"        "}control: "input"
							<br />
							{"      "}&#125;,
							<br />
							{"      "}end: &#123;
							<br />
							{"        "}description: &#123;
							<br />
							{"          "}en: "End"
							<br />
							{"        "}&#125;,
							<br />
							{"        "}category: "Video",
							<br />
							{"        "}control: "input"
							<br />
							{"      "}&#125;
							<br />
							{"    "}&#125;
							<br />
							{"  "}&#125;, // configuration
							<br />
							{"  "}&#123;
							<br />
							{"    "}// default props
							<br />
							{"    "}src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
							<br />
							{"    "}alt: "My video",
							<br />
							{"    "}variant: "Fast and low traffic (recomended)",
							<br />
							{"    "}start: "0",
							<br />
							{"    "}loop: false,
							<br />
							{"    "}autoplay: false
							<br />
							{"  "}&#125;
							<br />
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
						data="Src;Адрес видеоо с YouTube которое будет отображаться;Input;URL-адрес на страницу видео,Alt;Альтернативное название видео;Input,Loop;Активировать повторное воспроизведение;Checkbox,Muted;Отключить звук при проигрывании;Checkbox, Start;Задать время начала видео при проигрывание;Input, End;Время для концовки видео;Input"
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