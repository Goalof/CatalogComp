import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"animation"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Shapka>
			<Override slot="link" color="--light" font="normal 600 14px/1.5 --fontFamily-googleSourceSansPro" />
			<Components.EmbedHTML />
		</Components.Shapka>
		<Section
			padding="150px 0 190px 0"
			quarkly-title="Hero"
			background="#181C22"
			fullhd-padding="190px 0 190px 0"
			fullhd-background="#181C22,url(https://uploads.quarkly.io/5f6b1f4c0708a3001ea41643/images/5.png?v=2020-09-27T14:18:06.454Z) 98% 106%/15% no-repeat"
			nout-padding="140px 0 140px 0"
			md-padding="130px 0 130px 0"
		>
			<Override slot="SectionContent" flex-direction="row" align-items="center" />
			<Stack gap="--cmp-stack-gap-small" width="100%" margin="0px 0px 0px 0px" nout-margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					width="40%"
					display="flex"
					fullhd-width="46%"
					md-width="100%"
					md-align-items="center"
					md-justify-content="center"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="center"
						padding="0px 0px 0px 0px"
						align-items="flex-start"
						fullhd-position="relative"
						fullhd-z-index="2"
						md-align-items="center"
					/>
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 20px 0px"
						display="inline-block"
						color="--light"
						width="100%"
						md-text-align="center"
					>
						Animation
					</Text>
					<Text
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="--light"
						width="100%"
						md-text-align="center"
					>
						В данной категории предоставлены компоненты, которые отвеч
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="30px 0 70px 0" background="--color-light">
			<Override slot="SectionContent" justify-content="center" align-items="center" />
			<Section>
				<Override slot="SectionContent" width="100%" flex-direction="row" />
				<Stack width="100%">
					{"    "}
					<StackItem width="100%" display="flex">
						<Override slot="StackItemContent" align-items="center" margin="0px 0px 0px 0px" />
						<Text font="--headline2" color="--dark" margin="0px 0px 0px 10px">
							Animation
						</Text>
						{"            "}
					</StackItem>
					{"    "}
				</Stack>
			</Section>
			<Stack width="100%" gap="--cmp-stack-gap-small" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					width="33.333%"
					display="flex"
					padding="0px 0px 0px 0px"
					border-radius="12px 0px 0px 12px"
					nout-width="50%"
					md-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						box-shadow="--xxl"
						background="--color-light"
						position="relative"
						align-items="flex-start"
					/>
					{"        "}
					<Stack margin="0px 0px 0px 0px" width="100%">
						{"    "}
						<StackItem width="30%" display="flex" padding="0px 0px 0px 0px">
							{"        "}
							<Image width="90px" src="https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/edit-text.svg?v=2020-10-07T23:07:38.020Z" margin="0px 0px 0px 0px" />
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="70%" display="flex" flex-direction="row">
							<Override slot="StackItemContent" flex-direction="column" position="relative" />
							{"        "}
							<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="0px 0px 5px 0px" display="inline-block" color="--primary">
								Text-Loop
							</Text>
							<Text font="--minitxt" margin="0px 0px 30px 0px" display="inline-block" color="--darkL2">
								Динамический текст донесет всю необходимую информацию до вашего посетителя сайта
							</Text>
							<Link
								href="/text-loop"
								text-decoration-line="initial"
								color="--light"
								padding="6px 20px"
								border-radius="0px"
								text-transform="uppercase"
								font="normal 500 14px/1.5 --fontFamily-googleSourceSansPro"
								letter-spacing="1px"
								transition="transform 0.1s ease-in-out 0s;"
								transform="translateY(0px)"
								hover-transform="translateY(-2px)"
								position="absolute"
								bottom="-15px"
								height="21px"
								left="auto"
								right="-15px"
								top="auto"
								width="74.5156px"
								text-align="center"
								background="--color-primary"
							>
								Перейти
							</Link>
							{"    "}
						</StackItem>
					</Stack>
					{"    "}
				</StackItem>
				<StackItem
					width="33.333%"
					display="flex"
					padding="0px 0px 0px 0px"
					border-radius="12px 0px 0px 12px"
					nout-width="50%"
					md-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						box-shadow="--xxl"
						background="--color-light"
						position="relative"
						align-items="flex-start"
					/>
					{"        "}
					<Stack margin="0px 0px 0px 0px" width="100%">
						{"    "}
						<StackItem width="30%" display="flex" padding="0px 0px 0px 0px">
							{"        "}
							<Image width="90px" src="https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/left.svg?v=2020-10-07T23:07:46.930Z" margin="0px 0px 0px 0px" />
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="70%" display="flex" flex-direction="row" padding="16px 16px 16px 16px">
							<Override slot="StackItemContent" flex-direction="column" position="relative" />
							{"        "}
							<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="0px 0px 5px 0px" display="inline-block" color="--primary">
								Ticker
							</Text>
							<Text font="--minitxt" margin="0px 0px 30px 0px" display="inline-block" color="--darkL2">
								Эта бегущая строка, в которой вы можете написать любой текст и выбрать скорость прокрутки и направление текста
							</Text>
							<Link
								href="/ticker"
								text-decoration-line="initial"
								color="--light"
								padding="6px 20px"
								border-radius="0px"
								text-transform="uppercase"
								font="normal 500 14px/1.5 --fontFamily-googleSourceSansPro"
								letter-spacing="1px"
								transition="transform 0.1s ease-in-out 0s;"
								transform="translateY(0px)"
								hover-transform="translateY(-2px)"
								position="absolute"
								bottom="-15px"
								height="21px"
								left="auto"
								right="-15px"
								top="auto"
								width="74.5156px"
								text-align="center"
								background="--color-primary"
							>
								Перейти
							</Link>
							{"    "}
						</StackItem>
					</Stack>
					{"    "}
				</StackItem>
				{"    "}
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