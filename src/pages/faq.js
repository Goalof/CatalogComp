import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"faq"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.EmbedHTML />
		<Components.Shapka />
		<Section
			padding="190px 0 190px 0"
			quarkly-title="Hero"
			background="#181C22 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/atom.png?v=2020-10-09T02:45:54.175Z) 98% 97%/15% no-repeat"
			fullhd-padding="190px 0 190px 0"
			fullhd-background="#181C22,url(https://uploads.quarkly.io/5f6b1f4c0708a3001ea41643/images/5.png?v=2020-09-27T14:18:06.454Z) 98% 106%/15% no-repeat"
			nout-padding="140px 0 140px 0"
			md-padding="130px 0 130px 0"
		>
			<Override slot="SectionContent" flex-direction="row" align-items="center" />
			<Stack gap="--cmp-stack-gap-small" width="70%" margin="0px 0px 0px 0px" nout-margin="0px 0px 0px 0px">
				{"    "}
				<StackItem display="flex" md-width="100%" md-align-items="center" md-justify-content="center">
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
						FAQ - Инструкция по установке компонентов
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="80px 0 80px 0" quarkly-title="Main">
			<Stack gap="--cmp-stack-gap-small">
				{"        "}
				<StackItem
					width="30%"
					display="flex"
					flex-direction="column"
					lg-display="none"
					padding="8px 8px 8px 8px"
				>
					<Override slot="StackItemContent" margin="5px 0px 0px 0px" flex-direction="column" />
					{"       \n\t\t\t\t\t\t \n\t\t\t\t\t\t "}
					<Text font="--headline4">
						All Components:
					</Text>
					<Box>
						<Link
							id="gobot"
							href="#audioplayer"
							color="--darkL1"
							text-decoration-line="initial"
							padding="2px 24px 3px 18px"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="flex"
							lg-font="normal 400 24px/1.5 --fontFamily-sans"
							sm-width="auto"
							sm-text-align="center"
							border-radius="0px"
							text-align="center"
							transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
							cursor="pointer"
							align-items="center"
							height="2em"
							border-color="#22262E"
						>
							Audio Player
						</Link>
						<Link
							id="gobot"
							href="#ticker"
							color="--darkL1"
							text-decoration-line="initial"
							padding="2px 24px 3px 18px"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="flex"
							lg-font="normal 400 24px/1.5 --fontFamily-sans"
							sm-width="auto"
							sm-text-align="center"
							border-radius="0px"
							text-align="center"
							transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
							cursor="pointer"
							align-items="center"
							height="2em"
							border-color="#22262E"
						>
							Ticker
						</Link>
						<Link
							id="gobot"
							href="#videoplayer"
							color="--darkL1"
							text-decoration-line="initial"
							padding="2px 24px 3px 18px"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="flex"
							lg-font="normal 400 24px/1.5 --fontFamily-sans"
							sm-width="auto"
							sm-text-align="center"
							border-radius="0px"
							text-align="center"
							transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
							cursor="pointer"
							align-items="center"
							height="2em"
							border-color="#22262E"
							border-width="0px 0px 1px"
						>
							Video Player
						</Link>
						<Link
							id="gobot"
							href="#table"
							color="--darkL1"
							text-decoration-line="initial"
							padding="2px 24px 3px 18px"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="flex"
							lg-font="normal 400 24px/1.5 --fontFamily-sans"
							sm-width="auto"
							sm-text-align="center"
							border-radius="0px 0px 4px 4px"
							text-align="center"
							transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
							cursor="pointer"
							align-items="center"
							height="2em"
							border-color="#22262E"
						>
							Table
						</Link>
						<Link
							id="gobot"
							href="#progress"
							color="--darkL1"
							text-decoration-line="initial"
							padding="2px 24px 3px 18px"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="flex"
							lg-font="normal 400 24px/1.5 --fontFamily-sans"
							sm-width="auto"
							sm-text-align="center"
							border-radius="0px"
							text-align="center"
							transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
							cursor="pointer"
							align-items="center"
							height="2em"
							border-color="#22262E"
						>
							Progress-bar
						</Link>
						<Link
							id="gobot"
							href="#livechat"
							color="--darkL1"
							text-decoration-line="initial"
							padding="2px 24px 3px 18px"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="flex"
							lg-font="normal 400 24px/1.5 --fontFamily-sans"
							sm-width="auto"
							sm-text-align="center"
							border-radius="0px"
							text-align="center"
							transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
							cursor="pointer"
							align-items="center"
							height="2em"
							border-color="#22262E"
						>
							LiveChat
						</Link>
						<Link
							id="gobot"
							href="#accordeon"
							color="--darkL1"
							text-decoration-line="initial"
							padding="2px 24px 3px 18px"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="flex"
							lg-font="normal 400 24px/1.5 --fontFamily-sans"
							sm-width="auto"
							sm-text-align="center"
							border-radius="0px"
							text-align="center"
							transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
							cursor="pointer"
							align-items="center"
							height="2em"
							border-color="#22262E"
						>
							Accordeon
						</Link>
						<Link
							id="gobot"
							href="#popup"
							color="--darkL1"
							text-decoration-line="initial"
							padding="2px 24px 3px 18px"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="flex"
							lg-font="normal 400 24px/1.5 --fontFamily-sans"
							sm-width="auto"
							sm-text-align="center"
							border-radius="0px"
							text-align="center"
							transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
							cursor="pointer"
							align-items="center"
							height="2em"
							border-color="#22262E"
						>
							Pop-up
						</Link>
						<Link
							id="gobot"
							href="#picture"
							color="--darkL1"
							text-decoration-line="initial"
							padding="2px 24px 3px 18px"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="flex"
							lg-font="normal 400 24px/1.5 --fontFamily-sans"
							sm-width="auto"
							sm-text-align="center"
							border-radius="0px"
							text-align="center"
							transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
							cursor="pointer"
							align-items="center"
							height="2em"
							border-color="#22262E"
						>
							Picture
						</Link>
						<Link
							id="gobot"
							href="#source"
							color="--darkL1"
							text-decoration-line="initial"
							padding="2px 24px 3px 18px"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="flex"
							lg-font="normal 400 24px/1.5 --fontFamily-sans"
							sm-width="auto"
							sm-text-align="center"
							border-radius="0px"
							text-align="center"
							transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
							cursor="pointer"
							align-items="center"
							height="2em"
							border-color="#22262E"
						>
							Source
						</Link>
						<Link
							id="gobot"
							href="#track"
							color="--darkL1"
							text-decoration-line="initial"
							padding="2px 24px 3px 18px"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="flex"
							lg-font="normal 400 24px/1.5 --fontFamily-sans"
							sm-width="auto"
							sm-text-align="center"
							border-radius="0px"
							text-align="center"
							transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
							cursor="pointer"
							align-items="center"
							height="2em"
							border-color="#22262E"
						>
							Track
						</Link>
						<Link
							id="gobot"
							href="#input"
							color="--darkL1"
							text-decoration-line="initial"
							padding="2px 24px 3px 18px"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="flex"
							lg-font="normal 400 24px/1.5 --fontFamily-sans"
							sm-width="auto"
							sm-text-align="center"
							border-radius="0px"
							text-align="center"
							transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
							cursor="pointer"
							align-items="center"
							height="2em"
							border-color="#22262E"
						>
							Input
						</Link>
						<Link
							id="gobot"
							href="#price"
							color="--darkL1"
							text-decoration-line="initial"
							padding="2px 24px 3px 18px"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="flex"
							lg-font="normal 400 24px/1.5 --fontFamily-sans"
							sm-width="auto"
							sm-text-align="center"
							border-radius="0px"
							text-align="center"
							transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
							cursor="pointer"
							align-items="center"
							height="2em"
							border-color="#22262E"
						>
							Price
						</Link>
						<Link
							id="gobot"
							href="#slider"
							color="--darkL1"
							text-decoration-line="initial"
							padding="2px 24px 3px 18px"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="flex"
							lg-font="normal 400 24px/1.5 --fontFamily-sans"
							sm-width="auto"
							sm-text-align="center"
							border-radius="0px"
							text-align="center"
							transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
							cursor="pointer"
							align-items="center"
							height="2em"
							border-color="#22262E"
						>
							Slider
						</Link>
						<Link
							id="gobot"
							href="#textloop  "
							color="--darkL1"
							text-decoration-line="initial"
							padding="2px 24px 3px 18px"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="flex"
							lg-font="normal 400 24px/1.5 --fontFamily-sans"
							sm-width="auto"
							sm-text-align="center"
							border-radius="0px"
							text-align="center"
							transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
							cursor="pointer"
							align-items="center"
							height="2em"
							border-color="#22262E"
						>
							Text-loop
						</Link>
						<Link
							id="gobot"
							href="#timeline"
							color="--darkL1"
							text-decoration-line="initial"
							padding="2px 24px 3px 18px"
							font="--lead"
							margin="0px 0px 0px 0px"
							display="flex"
							lg-font="normal 400 24px/1.5 --fontFamily-sans"
							sm-width="auto"
							sm-text-align="center"
							border-radius="0px"
							text-align="center"
							transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
							cursor="pointer"
							align-items="center"
							height="2em"
							border-color="#22262E"
						>
							Timeline
						</Link>
					</Box>
					{"      "}
				</StackItem>
				<StackItem
					width="65%"
					display="flex"
					flex-direction="column"
					sm-width="100%"
					md-width="100%"
					lg-width="100%"
					margin="0px 0px 0px 5%"
					padding="0px 0px 0px 0px"
				>
					{"        "}
					<Box width="100%" border-radius="4px">
						<Text font="46px --fontFamily-googleSourceSansPro" margin="0px 0px 0px 0px" display="inline-block">
							<Link
								href="#"
								color="--dark"
								text-decoration-line="initial"
								sm-white-space="normal"
								sm-font="61px &quot;Source Sans Pro&quot;, sans-serif"
								sm-padding="0px 0px 0px 0px"
							>
								Как разместить свой компонент
							</Link>
						</Text>
						<Box height="16px" />
						<Text font="18px --fontFamily-googleSourceSansPro" color="--dark">
							Чтобы установить компонент вам нужно во вкладке "Сomponents", в разделе "Project" добавить свой компонент
						</Text>
						<Box
							padding="0px 0px 44.4% 0px"
							background="rgba(0, 0, 0, 0) url(https://screenshot.ukit.com/src/goalov/18/2020-09-08-19-20-54.png) 0% 0% /cover no-repeat scroll padding-box"
							hover-background="rgba(0, 0, 0, 0) url(https://screenshot.ukit.com/src/goalov/18/2020-09-08-19-20-54.png) 0% 100%/150% no-repeat scroll padding-box"
							cursor="zoom-in"
							transition="all 0s ease 3s"
						/>
						<Text font="18px --fontFamily-googleSourceSansPro" margin="32px 0px 16px 0px" color="--dark">
							Придумать название компоненту
						</Text>
						<Box padding="0px 0px 44.3% 0px" background="rgba(0, 0, 0, 0) url(https://screenshot.ukit.com/src/goalov/18/2020-09-08-19-15-35.png) 0% 0% /contain no-repeat scroll padding-box" hover-background="rgba(0, 0, 0, 0) url(https://screenshot.ukit.com/src/goalov/18/2020-09-08-19-15-35.png) 50% 50%/150% no-repeat scroll padding-box" />
						<Text font="18px --fontFamily-googleSourceSansPro" margin="32px 0px 16px 0px" color="--dark">
							И заменить весь скопированный код компонента, который вы выберете на этой странице
						</Text>
						<Box padding="0px 0px 43.9% 0px" background="rgba(0, 0, 0, 0) url(https://screenshot.ukit.com/src/goalov/18/2020-09-08-19-18-25.png) 0% 0% /contain no-repeat scroll padding-box" hover-background="rgba(0, 0, 0, 0) url(https://screenshot.ukit.com/src/goalov/18/2020-09-08-19-18-25.png) 0% 0%/150% no-repeat scroll padding-box" />
						<Text font="18px --fontFamily-googleSourceSansPro" margin="32px 0px 16px 0px" color="--dark">
							После чего, вы можете добавить компонент на холст, а редактирование компонента происходит в разделе "Props"
						</Text>
						<Box padding="0px 0px 43.6% 0px" background="rgba(0, 0, 0, 0) url(https://screenshot.ukit.com/src/goalov/18/2020-09-08-19-27-33.png) 0% 0% /contain no-repeat scroll padding-box" hover-background="rgba(0, 0, 0, 0) url(https://screenshot.ukit.com/src/goalov/18/2020-09-08-19-27-33.png) 100% 0%/150% no-repeat scroll padding-box" />
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Components.BlockPopular>
			<Override slot="popularCardOverride21">
				<Link
					color="--light"
					letter-spacing="1px"
					font="--desccomp"
					text-decoration-line="initial"
					hover-text-decoration-line="underline"
					transition="all 3s ease 0s"
					href="/slider"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Перейти
				</Link>
			</Override>
		</Components.BlockPopular>
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