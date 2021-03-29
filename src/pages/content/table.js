import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"content/table"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Shapka />
		<Components.HeroBlock background="#181C22 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/table11111.png?v=2020-10-09T02:42:25.045Z) 98% 98%/15% no-repeat">
			<Override slot="text">
				Table{"\n\n"}
			</Override>
			<Override slot="text1">
				Создаем простую таблицу со своими данными и необходимым количеством строк и столбцов.
				<br />
				В разделе "Props" вы можете задавать цвета, шрифт, а также количество ячеек и столбцов.{"\n\n"}
			</Override>
			<Override slot="popupOverride">
				Installation FAQ
			</Override>
		</Components.HeroBlock>
		<Components.InfoComp>
			<Override slot="text1">
				Size: 6.07 kb |{"\n\n"}
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
					<Components.Table width="80%" fullhd-width="80%" />
					{"        "}{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					{"        "}
					<Components.Codes width="100%">
						<Override slot="Code Alert">
							Код скопирован в буфер обмена!
						</Override>
						<Override slot="Code Text" lg-font="13px/15px Consolas, &quot;Andale Mono WT&quot;, &quot;Andale Mono&quot;, &quot;Lucida Console&quot;, &quot;Lucida Sans Typewriter&quot;, &quot;DejaVu Sans Mono&quot;, &quot;Bitstream Vera Sans Mono&quot;, &quot;Liberation Mono&quot;, &quot;Nimbus Mono L&quot;, Monaco, &quot;Courier New&quot;, Courier, monospace">
							// Здесь использую multiinput
							<br />
							<br />
							import React from "react";
							<br />
							<br />
							import atomize from "@quarkly/atomize";
							<br />
							<br />
							import RCTable from "rc-table";
							<br />
							<br />
							<br />
							const Table = atomize(RCTable)();
							<br />
							<br />
							// some component
							<br />
							<br />
							const ComponentWithYourCustomLogic = (&#123;
							<br />
							<br />
							{"  "}padding,
							<br />
							<br />
							{"  "}columns,
							<br />
							<br />
							{"  "}data,
							<br />
							<br />
							{"  "}// Header
							<br />
							<br />
							{"  "}headerBgc,
							<br />
							<br />
							{"  "}headerColor,
							<br />
							<br />
							{"  "}headerPadding,
							<br />
							<br />
							{"  "}headerFont,
							<br />
							<br />
							{"  "}// Header Borders
							<br />
							<br />
							{"  "}headerBdw,
							<br />
							<br />
							{"  "}headerBdc,
							<br />
							<br />
							{"  "}headerBds,
							<br />
							<br />
							{"  "}// Body
							<br />
							<br />
							{"  "}bodyBgc,
							<br />
							<br />
							{"  "}bodyColor,
							<br />
							<br />
							{"  "}bodyPadding,
							<br />
							<br />
							{"  "}bodyFont,
							<br />
							<br />
							{"  "}// Body Borders
							<br />
							<br />
							{"  "}bodyBdw,
							<br />
							<br />
							{"  "}bodyBdc,
							<br />
							<br />
							{"  "}bodyBds,
							<br />
							<br />
							<br />
							{"  "}...props
							<br />
							<br />
							&#125;) =&gt; &#123;
							<br />
							<br />
							{"  "}const rColumns = columns.split(",").map((v, i) =&gt; (&#123;
							<br />
							<br />
							{"    "}key: i,
							<br />
							<br />
							{"    "}dataIndex: i,
							<br />
							<br />
							{"    "}title: v
							<br />
							<br />
							{"  "}&#125;));
							<br />
							<br />
							{"  "}const rData = data
							<br />
							<br />
							{"    "}.split(",")
							<br />
							<br />
							{"    "}.map((v, key) =&gt; Object.assign(&#123; key &#125;, v.split(";")));
							<br />
							<br />
							<br />
							{"  "}const components = &#123;
							<br />
							<br />
							{"    "}table: atomize.table(&#123;&#125;, &#123; width: "100%", bdcl: "collapse", ov: "hidden" &#125;),
							<br />
							<br />
							{"    "}header: &#123;
							<br />
							<br />
							{"      "}row: atomize.tr(),
							<br />
							<br />
							{"      "}cell: atomize.th(
							<br />
							<br />
							{"        "}&#123;&#125;,
							<br />
							<br />
							{"        "}&#123;
							<br />
							<br />
							{"          "}bgc: headerBgc,
							<br />
							<br />
							{"          "}c: headerColor,
							<br />
							<br />
							{"          "}p: headerPadding,
							<br />
							<br />
							{"          "}font: headerFont,
							<br />
							<br />
							<br />
							{"          "}bdw: headerBdw,
							<br />
							<br />
							{"          "}bdc: headerBdc,
							<br />
							<br />
							{"          "}bds: headerBds
							<br />
							<br />
							{"        "}&#125;
							<br />
							<br />
							{"      "})
							<br />
							<br />
							{"    "}&#125;,
							<br />
							<br />
							{"    "}body: &#123;
							<br />
							<br />
							{"      "}row: atomize.tr(),
							<br />
							<br />
							{"      "}cell: atomize.td(
							<br />
							<br />
							{"        "}&#123;&#125;,
							<br />
							<br />
							{"        "}&#123;
							<br />
							<br />
							{"          "}bgc: bodyBgc,
							<br />
							<br />
							{"          "}c: bodyColor,
							<br />
							<br />
							{"          "}p: bodyPadding,
							<br />
							<br />
							{"          "}font: bodyFont,
							<br />
							<br />
							<br />
							{"          "}bdw: bodyBdw,
							<br />
							<br />
							{"          "}bdc: bodyBdc,
							<br />
							<br />
							{"          "}bds: bodyBds
							<br />
							<br />
							{"        "}&#125;
							<br />
							<br />
							{"      "})
							<br />
							<br />
							{"    "}&#125;
							<br />
							<br />
							{"  "}&#125;;
							<br />
							<br />
							{"  "}return (
							<br />
							<br />
							{"    "}&lt;Table
							<br />
							<br />
							{"      "}components=&#123;components&#125;
							<br />
							<br />
							{"      "}columns=&#123;rColumns&#125;
							<br />
							<br />
							{"      "}data=&#123;rData&#125;
							<br />
							<br />
							{"      "}overflow="auto"
							<br />
							<br />
							{"      "}&#123;...props&#125;
							<br />
							<br />
							{"    "}/&gt;
							<br />
							<br />
							{"  "});
							<br />
							<br />
							&#125;;
							<br />
							<br />
							<br />
							export default atomize(ComponentWithYourCustomLogic)(
							<br />
							<br />
							{"  "}&#123;
							<br />
							<br />
							{"    "}description: &#123;
							<br />
							<br />
							{"      "}en: "Table"
							<br />
							<br />
							{"    "}&#125;,
							<br />
							<br />
							{"    "}propInfo: &#123;
							<br />
							<br />
							{"      "}data: &#123;
							<br />
							<br />
							{"        "}control: "input",
							<br />
							<br />
							{"        "}multiply: true,
							<br />
							<br />
							{"        "}title: "Data",
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Check rc-table"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Table"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}columns: &#123;
							<br />
							<br />
							{"        "}control: "input",
							<br />
							<br />
							{"        "}multiply: true,
							<br />
							<br />
							{"        "}title: "Columns",
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Check rc-table"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Table"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}headerBgc: &#123;
							<br />
							<br />
							{"        "}control: "background",
							<br />
							<br />
							{"        "}title: "Background",
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Header background"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Header"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}headerColor: &#123;
							<br />
							<br />
							{"        "}control: "color",
							<br />
							<br />
							{"        "}title: "Color",
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Header color"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Header"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}headerPadding: &#123;
							<br />
							<br />
							{"        "}control: "input",
							<br />
							<br />
							{"        "}title: "Padding",
							<br />
							<br />
							{"        "}weight: 1,
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Header padding"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Header"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}headerFont: &#123;
							<br />
							<br />
							{"        "}control: "font",
							<br />
							<br />
							{"        "}title: "Font",
							<br />
							<br />
							{"        "}weight: 1,
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Header font"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Header"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}headerBdw: &#123;
							<br />
							<br />
							{"        "}title: "Width",
							<br />
							<br />
							{"        "}control: "input",
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Border width"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Header Borders"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}headerBds: &#123;
							<br />
							<br />
							{"        "}title: "Style",
							<br />
							<br />
							{"        "}control: "select",
							<br />
							<br />
							{"        "}variants: [
							<br />
							<br />
							{"          "}"none",
							<br />
							<br />
							{"          "}"hidden",
							<br />
							<br />
							{"          "}"dotted",
							<br />
							<br />
							{"          "}"dashed",
							<br />
							<br />
							{"          "}"solid",
							<br />
							<br />
							{"          "}"double",
							<br />
							<br />
							{"          "}"groove",
							<br />
							<br />
							{"          "}"ridge",
							<br />
							<br />
							{"          "}"inset",
							<br />
							<br />
							{"          "}"outset"
							<br />
							<br />
							{"        "}],
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Border style"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Header Borders"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}headerBdc: &#123;
							<br />
							<br />
							{"        "}title: "Color",
							<br />
							<br />
							{"        "}control: "color",
							<br />
							<br />
							{"        "}weight: 1,
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Border color"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Header Borders"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}bodyBgc: &#123;
							<br />
							<br />
							{"        "}title: "Background",
							<br />
							<br />
							{"        "}control: "background",
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Body background"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Body"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}bodyColor: &#123;
							<br />
							<br />
							{"        "}title: "Body",
							<br />
							<br />
							{"        "}control: "color",
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Body color"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Body"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}bodyPadding: &#123;
							<br />
							<br />
							{"        "}title: "Padding",
							<br />
							<br />
							{"        "}control: "input",
							<br />
							<br />
							{"        "}weight: 1,
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Body padding"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Body"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}bodyFont: &#123;
							<br />
							<br />
							{"        "}control: "font",
							<br />
							<br />
							{"        "}title: "Font",
							<br />
							<br />
							{"        "}weight: 1,
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Body font"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Body"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}bodyBdw: &#123;
							<br />
							<br />
							{"        "}title: "Width",
							<br />
							<br />
							{"        "}control: "input",
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Border width"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Body Borders"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}bodyBds: &#123;
							<br />
							<br />
							{"        "}title: "Style",
							<br />
							<br />
							{"        "}control: "select",
							<br />
							<br />
							{"        "}variants: [
							<br />
							<br />
							{"          "}"none",
							<br />
							<br />
							{"          "}"hidden",
							<br />
							<br />
							{"          "}"dotted",
							<br />
							<br />
							{"          "}"dashed",
							<br />
							<br />
							{"          "}"solid",
							<br />
							<br />
							{"          "}"double",
							<br />
							<br />
							{"          "}"groove",
							<br />
							<br />
							{"          "}"ridge",
							<br />
							<br />
							{"          "}"inset",
							<br />
							<br />
							{"          "}"outset"
							<br />
							<br />
							{"        "}],
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Border style"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Body Borders"
							<br />
							<br />
							{"      "}&#125;,
							<br />
							<br />
							{"      "}bodyBdc: &#123;
							<br />
							<br />
							{"        "}title: "Color",
							<br />
							<br />
							{"        "}control: "color",
							<br />
							<br />
							{"        "}weight: 1,
							<br />
							<br />
							{"        "}description: &#123;
							<br />
							<br />
							{"          "}en: "Border color"
							<br />
							<br />
							{"        "}&#125;,
							<br />
							<br />
							{"        "}category: "Body Borders"
							<br />
							<br />
							{"      "}&#125;
							<br />
							<br />
							{"    "}&#125;
							<br />
							<br />
							{"  "}&#125;, // configuration
							<br />
							<br />
							{"  "}&#123;
							<br />
							<br />
							{"    "}margin: "0 10px",
							<br />
							<br />
							{"    "}headerPadding: 10,
							<br />
							<br />
							{"    "}headerColor: "--light",
							<br />
							<br />
							{"    "}headerBgc: "--indigo",
							<br />
							<br />
							{"    "}bodyPadding: 10,
							<br />
							<br />
							{"    "}bodyColor: "--dark",
							<br />
							<br />
							{"    "}bodyBgc: "--light",
							<br />
							<br />
							{"    "}bodyBdc: "--lightD2",
							<br />
							<br />
							{"    "}bodyBdw: "1px",
							<br />
							<br />
							{"    "}bodyBds: "solid",
							<br />
							<br />
							{"    "}bdrs: 20,
							<br />
							<br />
							{"    "}columns: "Name,Age,Address",
							<br />
							<br />
							{"    "}data: "Jack;28;some where1,Roose;36;some where2"
							<br />
							<br />
							{"  "}&#125;
							<br />
							<br />
							);
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
						data="Data;Заполнение ячеек таблицы;Input;,Colums;Заглавные ячейки таблицы;Input, Padding;Расстояние между ячейками;Input, Background;Цвет фона ячеек в таблице;Input, Body;Цвет шрифта;Input"
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