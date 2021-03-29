import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Strong, Icon, Box, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section, Formspree, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { TiVideo } from "react-icons/ti";
import { GiPlayButton } from "react-icons/gi";
import { MdSystemUpdateAlt, MdContentCopy } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Stack
			position="relative"
			z-index="9"
			quarkly-title="Header"
			width=" "
			margin="6px 20px -93px 20px"
			fullhd-margin="7px 20px -93px 20px"
		>
			{"    "}
			<StackItem width="50%" display="flex" nout-width="30%">
				<Override slot="StackItemContent" align-items="center" />
				{"        "}
				<Image width="200px" src="https://uploads.quarkly.io/landing/logo-on-dark.svg" />
				{"    "}
			</StackItem>
			{"    "}
			<StackItem width="50%" display="flex" nout-width="70%">
				<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
				{"        "}
				<Link
					href="#"
					transition="transform 0.1s ease-in-out 0s;"
					transform="translateY(0px)"
					text-decoration-line="initial"
					padding="6px 16px 6px 16px"
					color="--indigo"
					font="normal 900 14px/1.5 --fontFamily-googleSourceSansPro"
					letter-spacing="2px"
					border-radius="100px"
					fullhd-font="normal 600 15px/1.5 --fontFamily-googleSourceSansPro"
					margin="0px 12px 0px 0px"
				>
					HOME
				</Link>
				<Components.MyNav />
				<Link
					href="#"
					transition="transform 0.1s ease-in-out 0s;"
					transform="translateY(0px)"
					text-decoration-line="initial"
					padding="6px 16px 6px 16px"
					color="--light"
					font="normal 600 14px/1.5 --fontFamily-googleSourceSansPro"
					letter-spacing="2px"
					border-radius="100px"
					fullhd-margin="0px 0px 0px 12px"
					margin="0px 0px 0px 12px"
					fullhd-font="normal 600 15px/1.5 --fontFamily-googleSourceSansPro"
					nout-margin="0px 0px 0px 6px"
				>
					FAQ
				</Link>
				<Link
					href="#"
					transition="transform 0.1s ease-in-out 0s;"
					transform="translateY(0px)"
					text-decoration-line="initial"
					padding="6px 22px 6px 22px"
					color="--lightD1"
					font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro"
					letter-spacing="2px"
					border-radius="100px"
					hover-transform="translateY(-3px)"
					border-color="--color-indigo"
					border-width="3px"
					border-style="solid"
					margin="0px 0px 0px 24px"
					fullhd-margin="0px 0px 0px 24px"
					nout-margin="0px 0px 0px 12px"
				>
					LOG IN
				</Link>
				<Link
					href="#"
					transition="transform 0.1s ease-in-out 0s;"
					transform="translateY(0px)"
					text-decoration-line="initial"
					padding="8px 22px 8px 22px"
					color="--light"
					font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro"
					letter-spacing="2px"
					border-radius="50px"
					hover-transform="translateY(-3px)"
					margin="0px 0px 0px 24px"
					fullhd-margin="0px 0px 0px 24px"
					background="--color-indigo"
					nout-margin="0px 0px 0px 12px"
				>
					SIGN UP
				</Link>
				{"    "}
			</StackItem>
		</Stack>
		<Components.EmbedHTML />
		<Section
			padding="6px 0 130px 0"
			quarkly-title="Hero"
			background="#181C22"
			fullhd-padding="6px 0 190px 0"
			nout-padding="6px 0 90px 0"
		>
			<Override slot="SectionContent" flex-direction="row" align-items="center" />
			<Stack gap="--cmp-stack-gap-small" width="100%" margin="180px 0px 0px 0px">
				{"    "}
				<StackItem width="40%" display="flex" fullhd-width="46%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="center"
						padding="0px 0px 0px 0px"
						align-items="flex-start"
						fullhd-position="relative"
						fullhd-z-index="2"
					/>
					{"        "}
					<Text
						font="--headline1"
						color="--light"
						margin="0px 0px 16px 0px"
						text-align="left"
						nout-font="normal 700 64px/1.2 Source Sans Pro, sans-serif"
						nout-margin="-20px 0px 16px 0px"
					>
						Component Marketplace
					</Text>
					<Text
						font="--base"
						margin="0px 0px 40px 0px"
						display="inline-block"
						color="--light"
						nout-font="normal 300 14px/1.5 Source Sans Pro, sans-serif"
					>
						Проект, который вы создаете, можно дополнить функционалом, анимацией и любыми другими виджета, которые изначально недоступны на холсте.{" "}
						<br />
						На данной странице мы разместили официальные компоненты от Quarkly
						<br />
						<br />
						Все компоненты созданы на{" "}
						<Strong
							color="--indigo"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							React
						</Strong>
						{" \n\t\t\t\t"}с использованием{" "}
						<Link
							href="https://atomize.quarkly.io/"
							color="#5ADAFD"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--indigo"
								text-decoration-line="underline"
							>
								Atomize
							</Strong>
						</Link>
					</Text>
					<Link
						href="#catblock"
						background="#0E1317"
						padding="16px 40px 16px 40px"
						text-decoration-line="initial"
						color="--light"
						font="600 18px --fontFamily-googleSourceSansPro"
						letter-spacing="2px"
						border-color="--color-indigo"
						border-width="5px"
						border-style="solid"
						border-radius="50px"
						transition="transform 0.2s ease-in-out 0s;"
						transform="translateY(0px)"
						hover-transform="translateY(-8px)"
					>
						CATALOG
					</Link>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="60%" display="flex" padding="0px 0px 0px 0px">
					<Override slot="StackItemContent" position="relative" />
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Image
			width="1033.8px"
			src="https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/React%202.svg?v=2020-09-28T18:26:33.807Z"
			padding="0px 00px 2px 0px"
			object-position="0%"
			position="absolute"
			bottom="2758.11px"
			height="670.891px"
			left="auto"
			right="-34px"
			top="-18px"
			fullhd-z-index="1"
			fullhd-bottom="auto"
			fullhd-height="722.891px"
			fullhd-left="auto"
			fullhd-right="-48px"
			fullhd-top="-63px"
			fullhd-width="1073.8px"
			nout-bottom="3893.11px"
			nout-height="985.5576666666666px"
			nout-left="auto"
			nout-right="-30px"
			nout-top="-229.66666666666663px"
			nout-width="818.656px"
		/>
		<Section id="catblock" padding="30px 0 80px 0" color="--light" background="--color-light">
			<Override slot="SectionContent" justify-content="center" align-items="center" />
			<Section>
				<Override slot="SectionContent" width="100%" flex-direction="row" />
				<Stack width="100%" gap="--cmp-stack-gap-small">
					{"    "}
					<StackItem width="70%" display="flex">
						<Override slot="StackItemContent" align-items="center" />
						<Text font="--headline2" color="--dark" margin="0px 0px 0px 0px" lg-font="normal 700 30px/1.2 Source Sans Pro, sans-serif">
							Categories
						</Text>
						{"            "}
					</StackItem>
					{"    "}
					<StackItem width="30%" display="flex">
						<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
						<Link
							href="#"
							transition="transform 0.1s ease-in-out 0s;"
							transform="translateY(0px)"
							text-decoration-line="initial"
							padding="10px 22px 10px 22px"
							color="--light"
							font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro"
							letter-spacing="2px"
							border-radius="50px"
							hover-transform="translateY(-3px)"
							margin="3px 0px 0px 0px"
							text-align="center"
							background="--color-indigo"
							lg-font="normal 600 15px/1.5 --fontFamily-googleSourceSansPro"
						>
							All Components
						</Link>
						{"            "}
					</StackItem>
				</Stack>
			</Section>
			<Stack
				width="100%"
				gap="--cmp-stack-gap-small"
				margin="20px 0px 0px 0px"
				border-radius="12px"
				box-shadow="0 10px 30px -12px rgba(0, 0, 0, 0.25)"
			>
				{"    "}
				<StackItem
					width="25%"
					display="flex"
					padding="0px 0px 0px 0px"
					border-radius="12px 0px 0px 12px"
					border-width="0px 0.3px 0px 0px"
					border-color="rgba(111, 131, 159, 0.15)"
					border-style="solid"
					transition="border 0.1s ease-in-out 0s;"
					hover-padding="0px 0px 0px 0px"
					hover-margin="0px 0px 0px 0px"
					lg-width="50%"
					lg-border-radius="12px 0px 0px 0px"
					background="#FCFCFF"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						padding="20px 20px 20px 20px"
					/>
					{"        "}
					<Icon
						category="ti"
						icon={TiVideo}
						color="--indigo"
						size="50px"
						border-width="2px"
						border-style="solid"
						padding="20px 20px 20px 20px"
						border-radius="100px"
						border-color="--color-indigo"
					/>
					<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="20px 0px 3px 0px" display="inline-block" color="--dark">
						Multimedia
					</Text>
					<Text
						font="normal 600 12px/1.5 --fontFamily-sans"
						margin="0px 0px 20px 0px"
						display="inline-block"
						color="--darkL2"
						text-align="center"
					>
						Video and Aidoplayer, Slider image и пр.{" "}
					</Text>
					<Link
						href="/multimedia"
						text-decoration-line="initial"
						background="--color-indigo"
						color="--light"
						padding="10px 22px"
						border-radius="8px"
						text-transform="uppercase"
						font="normal 500 18px/1.5 --fontFamily-googleSourceSansPro"
						letter-spacing="1px"
						transition="transform 0.1s ease-in-out 0s;"
						transform="translateY(0px)"
						hover-transform="translateY(-2px)"
					>
						Перейти
					</Link>
					{"    "}
				</StackItem>
				<StackItem
					width="25%"
					display="flex"
					padding="0px 0px 0px 0px"
					background="#FCFCFF"
					border-width="0px 0.3px 0px 0px"
					border-style="solid"
					border-color="rgba(111, 131, 159, 0.15)"
					lg-width="50%"
					lg-border-radius="0px 12px 0px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						padding="20px 20px 20px 20px"
					/>
					{"        "}
					<Icon
						category="gi"
						icon={GiPlayButton}
						color="--indigo"
						size="50px"
						border-width="2px"
						border-style="solid"
						padding="20px 20px 20px 20px"
						border-radius="100px"
						border-color="--color-indigo"
					/>
					<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="20px 0px 3px 0px" display="inline-block" color="--dark">
						Animation
					</Text>
					<Text
						font="normal 600 12px/1.5 --fontFamily-sans"
						margin="0px 0px 20px 0px"
						display="inline-block"
						color="--darkL2"
						text-align="center"
					>
						Text loop, Marquue и пр.{" "}
					</Text>
					<Link
						href="/animation"
						text-decoration-line="initial"
						background="--color-indigo"
						color="--light"
						padding="10px 22px"
						border-radius="8px"
						text-transform="uppercase"
						font="normal 500 18px/1.5 --fontFamily-googleSourceSansPro"
						letter-spacing="1px"
						transition="transform 0.1s ease-in-out 0s;"
						transform="translateY(0px)"
						hover-transform="translateY(-2px)"
					>
						Перейти
					</Link>
					{"    "}
				</StackItem>
				<StackItem
					width="25%"
					display="flex"
					padding="0px 0px 0px 0px"
					background="#FCFCFF"
					border-width="0px 0.3px 0px 0px"
					border-style="solid"
					border-color="rgba(111, 131, 159, 0.15)"
					lg-width="50%"
					lg-border-radius="0px 0px 0px 12px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						padding="20px 20px 20px 20px"
					/>
					{"        "}
					<Icon
						category="md"
						icon={MdSystemUpdateAlt}
						color="--indigo"
						size="50px"
						border-width="2px"
						border-style="solid"
						padding="20px 20px 20px 20px"
						border-radius="100px"
						border-color="--color-indigo"
					/>
					<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="20px 0px 3px 0px" display="inline-block" color="--dark">
						Integration
					</Text>
					<Text
						font="normal 600 12px/1.5 --fontFamily-sans"
						margin="0px 0px 20px 0px"
						display="inline-block"
						color="--darkL2"
						text-align="center"
					>
						LiveChat, JivoSite и пр.
					</Text>
					<Link
						href="/integration"
						text-decoration-line="initial"
						background="--color-indigo"
						color="--light"
						padding="10px 22px"
						border-radius="8px"
						text-transform="uppercase"
						font="normal 500 18px/1.5 --fontFamily-googleSourceSansPro"
						letter-spacing="1px"
						transition="transform 0.1s ease-in-out 0s;"
						transform="translateY(0px)"
						hover-transform="translateY(-2px)"
					>
						Перейти
					</Link>
					{"    "}
				</StackItem>
				<StackItem
					width="25%"
					display="flex"
					padding="0px 0px 0px 0px"
					background="#FCFCFF"
					border-radius="0px 12px 12px 0px"
					lg-width="50%"
					lg-border-radius="0px 0px 12px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						padding="20px 20px 20px 20px"
						color="--dark"
					/>
					{"        "}
					<Icon
						category="md"
						icon={MdContentCopy}
						color="--indigo"
						size="50px"
						border-width="2px"
						border-style="solid"
						padding="20px 20px 20px 20px"
						border-radius="100px"
						border-color="--color-indigo"
					/>
					<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="20px 0px 3px 0px" display="inline-block" color="--dark">
						Content
					</Text>
					<Text
						font="normal 600 12px/1.5 --fontFamily-sans"
						margin="0px 0px 20px 0px"
						display="inline-block"
						color="--darkL2"
						text-align="center"
					>
						Price, Table и пр.
					</Text>
					<Link
						href="/content"
						text-decoration-line="initial"
						background="--color-indigo"
						color="--light"
						padding="10px 22px"
						border-radius="8px"
						text-transform="uppercase"
						font="normal 500 18px/1.5 --fontFamily-googleSourceSansPro"
						letter-spacing="1px"
						transition="transform 0.1s ease-in-out 0s;"
						transform="translateY(0px)"
						hover-transform="translateY(-2px)"
					>
						Перейти
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="url(),--color-indigo" padding="40px 0 60px 0">
			<Stack>
				{"    "}
				<StackItem width="55%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" justify-content="center" />
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 26px 0px"
						display="inline-block"
						color="--light"
						nout-font="normal 600 30px/1.2 Source Sans Pro, sans-serif"
						lg-font="normal 600 24px/1.2 Source Sans Pro, sans-serif"
					>
						Инструкции по добавлению кода
					</Text>
					<Text
						font="--headline4"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="--light"
						nout-font="500 16px/1.5 Source Sans Pro, sans-serif"
						lg-font="500 15px/1.5 Source Sans Pro, sans-serif"
					>
						Чтобы установить компонент вам нужно во вкладке "Сomponents",{" "}
						<br />
						в разделе "Project" добавить свой компонент и установить код{" "}
						<br />
						необходимого компонента в открывшемся окне
					</Text>
					<Link
						href="/faq"
						text-decoration-line="initial"
						color="--dark"
						padding="10px 22px"
						border-radius="8px"
						text-transform="uppercase"
						font="normal 700 18px/1.5 --fontFamily-googleSourceSansPro"
						letter-spacing="1px"
						transition="transform 0.1s ease-in-out 0s;"
						transform="translateY(0px)"
						hover-transform="translateY(-2px)"
						background="--color-light"
						width="260px"
						text-align="center"
						lg-font="normal 700 16px/1.5 --fontFamily-googleSourceSansPro"
						lg-padding="10px 12px 10px 12px"
					>
						Посмотреть инструкцию
					</Link>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="45%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Text
						font="--headline3"
						margin="0px 0px 26px 0px"
						display="inline-block"
						color="--light"
						nout-font="normal 500 25px/1.2 Source Sans Pro, sans-serif"
						lg-font="normal 500 21px/1.2 Source Sans Pro, sans-serif"
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
					<Components.VideoinYouTube
						src="https://www.youtube.com/watch?v=zR0CZ3PXmPo"
						alt="faq"
						loop
						border-width="0px 8px 8px 8px"
						border-style="solid"
						border-color="--color-light"
					/>
					{"    "}
				</StackItem>
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
							Multimedia
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
							<Image width="90px" src="https://www.flaticon.com/svg/static/icons/svg/2912/2912120.svg" margin="0px 0px 0px 0px" />
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="70%" display="flex" flex-direction="row">
							<Override slot="StackItemContent" flex-direction="column" position="relative" />
							{"        "}
							<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="0px 0px 5px 0px" display="inline-block" color="--primary">
								AudioPlayer
							</Text>
							<Text font="--minitxt" margin="0px 0px 30px 0px" display="inline-block" color="--darkL2">
								Музыкальный плеер на ваш сайт для онлайн прослушивания звуков или музыки
							</Text>
							<Link
								href="/audioplayer"
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
							<Image width="90px" src="https://www.flaticon.com/svg/static/icons/svg/1384/1384060.svg" margin="0px 0px 0px 0px" />
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="70%" display="flex" flex-direction="row">
							<Override slot="StackItemContent" flex-direction="column" position="relative" />
							{"        "}
							<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="0px 0px 5px 0px" display="inline-block" color="--primary">
								YouTube Player
							</Text>
							<Text font="--minitxt" margin="0px 0px 30px 0px" display="inline-block" color="--darkL2">
								Видеоплеер при помощи которого, вы можете разместить любое видео на сайте с видеохостинга YouTube
							</Text>
							<Link
								href="/youtubevideo"
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
							<Image width="90px" src="https://www.flaticon.com/svg/static/icons/svg/2748/2748963.svg" margin="0px 0px 0px 0px" />
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="70%" display="flex" flex-direction="row">
							<Override slot="StackItemContent" flex-direction="column" position="relative" />
							{"        "}
							<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="0px 0px 5px 0px" display="inline-block" color="--primary">
								Slider
							</Text>
							<Text font="--minitxt" margin="0px 0px 30px 0px" display="inline-block" color="--darkL2">
								Виджет, в котором вы можете разместить любое количество изображений для слайд-шоу
							</Text>
							<Link
								href="/slider"
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
							<Image width="90px" src="https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/vimeo.svg?v=2020-10-07T20:05:42.855Z" margin="0px 0px 0px 0px" />
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="70%" display="flex" flex-direction="row">
							<Override slot="StackItemContent" flex-direction="column" position="relative" />
							{"        "}
							<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="0px 0px 5px 0px" display="inline-block" color="--primary">
								Vimeo
							</Text>
							<Text font="--minitxt" margin="0px 0px 30px 0px" display="inline-block" color="--darkL2">
								Видеоплеер при помощи которого, вы можете разместить любое видео на сайте с видеохостинга Vimeo
							</Text>
							<Link
								href="/vimeovideo"
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
		<Section padding="30px 0 70px 0" background="--color-lightD2">
			<Override slot="SectionContent" justify-content="center" align-items="center" />
			<Section>
				<Override slot="SectionContent" width="100%" flex-direction="row" />
				<Stack width="100%">
					{"    "}
					<StackItem width="100%" display="flex">
						<Override slot="StackItemContent" align-items="center" margin="0px 0px 0px 0px" />
						<Text font="--headline2" color="--dark" margin="0px 0px 0px 10px">
							Сontent
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
							<Image width="90px" src="https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/pricinger.svg?v=2020-10-09T02:55:03.792Z" margin="0px 0px 0px 0px" />
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="70%" display="flex" flex-direction="row">
							<Override slot="StackItemContent" flex-direction="column" position="relative" />
							{"        "}
							<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="0px 0px 5px 10px" display="inline-block" color="--primary">
								Price
							</Text>
							<Text font="--minitxt" margin="0px 0px 30px 10px" display="inline-block" color="--darkL2">
								C этим компонентом, вы можете разместить список ваших товаров или услуг с кратким описанием и ценой
							</Text>
							<Link
								href="#"
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
							<Image width="90px" src="https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/slidercheg.svg?v=2020-10-09T02:54:54.771Z" margin="0px 0px 0px 0px" />
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="70%" display="flex" flex-direction="row">
							<Override slot="StackItemContent" flex-direction="column" position="relative" />
							{"        "}
							<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="0px 0px 5px 0px" display="inline-block" color="--primary">
								Slider
							</Text>
							<Text font="--minitxt" margin="0px 0px 30px 0px" display="inline-block" color="--darkL2">
								Виджет, в котором вы можете разместить любое количество изображений для слайд-шоу
							</Text>
							<Link
								href="/slider"
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
							<Image width="90px" src="https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/table.svg?v=2020-10-07T23:46:06.406Z" margin="0px 0px 0px 0px" />
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="70%" display="flex" flex-direction="row" padding="16px 0px 16px 0px">
							<Override slot="StackItemContent" flex-direction="column" position="relative" />
							{"        "}
							<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="0px 0px 5px 10px" display="inline-block" color="--primary">
								Table
							</Text>
							<Text font="--minitxt" margin="0px 0px 30px 10px" display="inline-block" color="--darkL2">
								Простая таблица со своими данными и необходимым количеством строк и столбцов.
							</Text>
							<Link
								href="#"
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
							<Image width="90px" src="https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/metrics.svg?v=2020-10-07T23:47:45.744Z" margin="0px 0px 0px 0px" />
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="70%" display="flex" flex-direction="row">
							<Override slot="StackItemContent" flex-direction="column" position="relative" />
							{"        "}
							<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="0px 0px 5px 10px" display="inline-block" color="--primary">
								Progress-bar
							</Text>
							<Text font="--minitxt" margin="0px 0px 30px 10px" display="inline-block" color="--darkL2">
								Размещаем индикатор процесса, в котором вы можете задать процент заполненности
							</Text>
							<Link
								href="#"
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
							<Image width="90px" src="https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/form.svg?v=2020-10-07T23:50:07.466Z" margin="0px 0px 0px 0px" />
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="70%" display="flex" flex-direction="row">
							<Override slot="StackItemContent" flex-direction="column" position="relative" />
							{"        "}
							<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="0px 0px 5px 10px" display="inline-block" color="--primary">
								Input
							</Text>
							<Text font="--minitxt" margin="0px 0px 30px 10px" display="inline-block" color="--darkL2">
								Позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.{" "}
							</Text>
							<Link
								href="#"
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
							<Image width="90px" src="https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/line.svg?v=2020-10-07T23:51:07.694Z" margin="0px 0px 0px 0px" />
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="70%" display="flex" flex-direction="row">
							<Override slot="StackItemContent" flex-direction="column" position="relative" />
							{"        "}
							<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="0px 0px 5px 10px" display="inline-block" color="--primary">
								Timeline
							</Text>
							<Text font="--minitxt" margin="0px 0px 30px 10px" display="inline-block" color="--darkL2">
								Вертикальное оформление пунктов, например расписание, программа конференций или этапы работ
							</Text>
							<Link
								href="#"
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
							<Image width="90px" src="https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/tab.svg?v=2020-10-07T23:58:01.791Z" margin="0px 0px 0px 0px" />
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="70%" display="flex" flex-direction="row">
							<Override slot="StackItemContent" flex-direction="column" position="relative" />
							{"        "}
							<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="0px 0px 5px 10px" display="inline-block" color="--primary">
								Accordion
							</Text>
							<Text font="--minitxt" margin="0px 0px 30px 10px" display="inline-block" color="--darkL2">
								Вертикальное оформление пунктов, например расписание, программа конференций или этапы работ
							</Text>
							<Link
								href="#"
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
							<Image width="90px" src="https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/pop-up.svg?v=2020-10-07T23:53:11.305Z" margin="0px 0px 0px 0px" />
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="70%" display="flex" flex-direction="row">
							<Override slot="StackItemContent" flex-direction="column" position="relative" />
							{"        "}
							<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="0px 0px 5px 10px" display="inline-block" color="--primary">
								Pop-up
							</Text>
							<Text font="--minitxt" margin="0px 0px 30px 10px" display="inline-block" color="--darkL2">
								Всплывающее окно, активируется при клике на кнопку. В окне же вы можете разместить любой контент.
							</Text>
							<Link
								href="#"
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
							<Image width="90px" src="https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/video.svg?v=2020-10-07T23:56:50.820Z" margin="0px 0px 0px 0px" />
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="70%" display="flex" flex-direction="row">
							<Override slot="StackItemContent" flex-direction="column" position="relative" />
							{"        "}
							<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="0px 0px 5px 10px" display="inline-block" color="--primary">
								Video Player
							</Text>
							<Text font="--minitxt" margin="0px 0px 30px 10px" display="inline-block" color="--darkL2">
								Видеоплеер при помощи которого, вы можете разместить любое видео на сайте, используя URL-адрес
							</Text>
							<Link
								href="#"
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
							<Image width="90px" src="https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/browser.svg?v=2020-10-07T23:57:48.757Z" margin="0px 0px 0px 0px" />
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="70%" display="flex" flex-direction="row">
							<Override slot="StackItemContent" flex-direction="column" position="relative" />
							{"        "}
							<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="0px 0px 5px 10px" display="inline-block" color="--primary">
								Tabs
							</Text>
							<Text font="--minitxt" margin="0px 0px 30px 10px" display="inline-block" color="--darkL2">
								Всплывающее окно, активируется при клике на кнопку. В окне же вы можете разместить любой контент.
							</Text>
							<Link
								href="#"
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
		<Section padding="30px 0 70px 0" background="--color-lightD2">
			<Override slot="SectionContent" justify-content="center" align-items="center" />
			<Section>
				<Override slot="SectionContent" width="100%" flex-direction="row" />
				<Stack width="100%">
					{"    "}
					<StackItem width="100%" display="flex">
						<Override slot="StackItemContent" align-items="center" margin="0px 0px 0px 0px" />
						<Text font="--headline2" color="--dark" margin="0px 0px 0px 10px">
							Integration
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
							<Image width="90px" src="https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/live-chat.svg?v=2020-10-07T23:18:53.127Z" margin="0px 0px 0px 0px" />
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="70%" display="flex" flex-direction="row">
							<Override slot="StackItemContent" flex-direction="column" position="relative" />
							{"        "}
							<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="0px 0px 5px 10px" display="inline-block" color="--primary">
								LiveChat
							</Text>
							<Text font="--minitxt" margin="0px 0px 30px 10px" display="inline-block" color="--darkL2">
								Интеграция популярного сервиса консультаций, в режиме  онлайн-чата на сайте
							</Text>
							<Link
								href="/livechat"
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
		<Section background="#151A22" padding="50px 0 70px 0" quarkly-title="Form">
			<Text font="--headline2" color="--light" margin="0px 0px 20px 0px">
				Send Components
			</Text>
			<Stack>
				{"        "}
				<StackItem
					width="50%"
					display="flex"
					flex-direction="column"
					padding="16px 0px 16px 16px"
					nout-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="#1A2029"
						padding="36px 36px"
						border-radius="12px"
						align-items="center"
						box-shadow="--l"
					/>
					{"        "}
					<Formspree errorMessage="Something went wrong" completeText="Success" endpoint="// Customize this 'myform.js' script and add it to your JS bundle. // Then import it with 'import MyForm from &quot;./myform.js&quot;'. // Finally, add a <MyForm/> element whereever you wish to display the form.  import React from &quot;react&quot;;  export default class MyForm extends React.Component {   constructor(props) {     super(props);     this.submitForm = this.submitForm.bind(this);     this.state = {       status: &quot;&quot;     };   }    render() {     const { status } = this.state;     return (       <form         onSubmit={this.submitForm}         action=&quot;https://formspree.io/xvowynqa&quot;         method=&quot;POST&quot;       >         <!-- add your custom form HTML here -->         <label>Email:</label>         <input type=&quot;email&quot; name=&quot;email&quot; />         <label>Message:</label>         <input type=&quot;text&quot; name=&quot;message&quot; />         {status === &quot;SUCCESS&quot; ? <p>Thanks!</p> : <button>Submit</button>}         {status === &quot;ERROR&quot; && <p>Ooops! There was an error.</p>}       </form>     );   }    submitForm(ev) {     ev.preventDefault();     const form = ev.target;     const data = new FormData(form);     const xhr = new XMLHttpRequest();     xhr.open(form.method, form.action);     xhr.setRequestHeader(&quot;Accept&quot;, &quot;application/json&quot;);     xhr.onreadystatechange = () => {       if (xhr.readyState !== XMLHttpRequest.DONE) return;       if (xhr.status === 200) {         form.reset();         this.setState({ status: &quot;SUCCESS&quot; });       } else {         this.setState({ status: &quot;ERROR&quot; });       }     };     xhr.send(data);   } }" width="70%">
						<Input
							name="EMAIL"
							display="flex"
							flex-direction="column"
							margin="0px 4px 20px 0px"
							type="email"
							border-radius="8px"
							border-width="1px"
							width="100%"
							height="50px"
							placeholder="✉ EMAIL"
							border-color="--color-light"
							background="rgba(255, 255, 255, 0)"
							border-style="solid"
							color="#ffffff"
							font="normal 300 16px/1.5 --fontFamily-sans"
							letter-spacing="0.3PX"
							hover-border-color="#66FFE4"
						/>
						<Input
							name="Comp"
							display="flex"
							flex-direction="column"
							margin="0px 4px 20px 0px"
							type="text"
							border-radius="8px"
							border-width="1px"
							width="100%"
							height="50px"
							placeholder="⌨ NAME COMPONENTS"
							background="rgba(255, 255, 255, 0)"
							hover-border-color="#66FFE4"
						/>
						<Input
							name="Email"
							display="flex"
							flex-direction="column"
							margin="0px 4px 20px 0px"
							type="text"
							border-radius="8px"
							border-width="1px"
							width="100%"
							height="150px"
							placeholder="✐ COMMENTS"
							align-items="flex-start"
							justify-content="start"
							as="textarea"
							border-color="--color-light"
							background="rgba(255, 255, 255, 0)"
							hover-border-color="#66FFE4"
						/>
						<Button
							display="flex"
							font="normal 900 18px/1.5 --fontFamily-googleSourceSansPro"
							letter-spacing="2px"
							border-radius="8px"
							padding="11px 42px"
							color="--light"
							text-align="center"
							width="100%"
							justify-content="center"
							hover-background="#000000"
							hover-color="#ffffff"
							transition="all 0.3s ease"
						>
							SEND
						</Button>
						<Text font="17px --fontFamily-googleSourceSansPro" color="--light" text-align="center">
							By clicking the “SEND” button, you confirm that you have read and agree to the{" "}
							<Link
								href="https://quarkly.io/contest-terms"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--indigo"
							>
								Contest Rules
							</Link>
						</Text>
					</Formspree>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" flex-direction="column" nout-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="#1A2029"
						padding="36px 36px"
						border-radius="12px"
						align-items="center"
						justify-content="center"
						box-shadow="--l"
					/>
					<Image width="100px" height="90px" src="https://image.flaticon.com/icons/svg/684/684927.svg" margin="0px 0px 10px 0px" />
					<Text color="#ffffff" font="700 40px --fontFamily-googleSourceSansPro" letter-spacing="4px" margin="16px 0px 10px 0px">
						CONTACT US
					</Text>
					<Box margin="0px 0px 30px 0px">
						<Text font="500 30px --fontFamily-googleSourceSansPro" color="#ffffff">
							<Link href="malito:ADMIN@QUARKLY.COM" color="--primary" text-decoration-line="initial">
								ADMIN@QUARKLY.COM
							</Link>
						</Text>
					</Box>
					<SocialMedia
						facebook="https://www.facebook.com/quarklyapp/"
						twitter="https://twitter.com/quarklyapp"
						youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
						vkontakte="https://vk.com/quarklyapp"
						telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
					>
						<Override slot="icon" color="#248DE0" />
						<Override slot="link" background="rgba(237, 242, 246, 0)" hover-color="#000000" hover-background="#ffffff" />
					</SocialMedia>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			background-color="--dark"
			text-align="center"
			padding="20px 0px 23px 0px"
			background="#1A2029"
			quarkly-title="Footer"
		>
			<Stack>
				{"    "}
				<StackItem display="flex" quarkly-title="Logo" md-width="50%" width="100%">
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