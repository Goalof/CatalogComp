import React from "react";
import { useOverrides, Override, Stack, Section } from "@quarkly/components";
import { Text, Link } from "@quarkly/widgets";
import PopularCard from "./PopularCard";
const defaultProps = {
	"background": "#151A22",
	"padding": "50px 0 65px 0",
	"quarkly-title": "Form"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "--headline2",
			"color": "--light",
			"margin": "0px 0px 32px 0px",
			"sm-font": "normal 600 27px/1.2 Source Sans Pro, sans-serif",
			"children": "Popular components"
		}
	},
	"stack": {
		"kind": "Stack",
		"props": {}
	},
	"popularCard": {
		"kind": "PopularCard",
		"props": {}
	},
	"popularCardOverride": {
		"kind": "Override",
		"props": {
			"slot": "text1",
			"hover-text-decoration-line": "underline",
			"children": <Link
				color="--light"
				letter-spacing="1px"
				font="--desccomp"
				text-decoration-line="initial"
				hover-text-decoration-line="underline"
				transition="all 3s ease 0s"
				href="/youtubevideo"
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				Перейти
			</Link>
		}
	},
	"popularCardOverride1": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"children": "Video Player"
		}
	},
	"popularCardOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"background": "#1A2029 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/video-player.svg?v=2020-10-07T10:39:53.299Z) 97% 90% /15%  no-repeat scroll padding-box"
		}
	},
	"popularCard1": {
		"kind": "PopularCard",
		"props": {}
	},
	"popularCardOverride3": {
		"kind": "Override",
		"props": {
			"slot": "text1",
			"hover-text-decoration-line": "underline",
			"children": <Link
				color="--light"
				letter-spacing="1px"
				font="--desccomp"
				text-decoration-line="initial"
				hover-text-decoration-line="underline"
				transition="all 3s ease 0s"
				href="/pop-up"
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				Перейти
			</Link>
		}
	},
	"popularCardOverride4": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"background": "#1A2029 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/popup.svg?v=2020-10-07T10:29:31.716Z) 97% 90% /15%  no-repeat scroll padding-box"
		}
	},
	"popularCardOverride5": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"children": "Pop-up"
		}
	},
	"popularCard2": {
		"kind": "PopularCard",
		"props": {}
	},
	"popularCardOverride6": {
		"kind": "Override",
		"props": {
			"slot": "text1",
			"hover-text-decoration-line": "underline",
			"children": <Link
				color="--light"
				letter-spacing="1px"
				font="--desccomp"
				text-decoration-line="initial"
				hover-text-decoration-line="underline"
				transition="all 3s ease 0s"
				href="/accordion"
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				Перейти
			</Link>
		}
	},
	"popularCardOverride7": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"background": "#1A2029 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/text-format.svg?v=2020-10-07T11:18:19.440Z) 97% 90% /15%  no-repeat scroll padding-box"
		}
	},
	"popularCardOverride8": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"children": "Accordion"
		}
	},
	"popularCard3": {
		"kind": "PopularCard",
		"props": {}
	},
	"popularCardOverride9": {
		"kind": "Override",
		"props": {
			"slot": "text1",
			"hover-text-decoration-line": "underline",
			"children": <Link
				color="--light"
				letter-spacing="1px"
				font="--desccomp"
				text-decoration-line="initial"
				hover-text-decoration-line="underline"
				transition="all 3s ease 0s"
				href="/timeline"
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				Перейти
			</Link>
		}
	},
	"popularCardOverride10": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"background": "#1A2029 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/timeline.svg?v=2020-10-07T11:25:05.065Z) 97% 90% /15%  no-repeat scroll padding-box"
		}
	},
	"popularCardOverride11": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"children": <>
				Timeline{"\n\n"}
			</>
		}
	},
	"popularCard4": {
		"kind": "PopularCard",
		"props": {}
	},
	"popularCardOverride12": {
		"kind": "Override",
		"props": {
			"slot": "text1",
			"hover-text-decoration-line": "underline",
			"children": <Link
				color="--light"
				letter-spacing="1px"
				font="--desccomp"
				text-decoration-line="initial"
				hover-text-decoration-line="underline"
				transition="all 3s ease 0s"
				href="/text-loop"
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				Перейти
			</Link>
		}
	},
	"popularCardOverride13": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"background": "#1A2029 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/text.svg?v=2020-10-07T11:29:25.275Z) 97% 90% /15%  no-repeat scroll padding-box"
		}
	},
	"popularCardOverride14": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"children": <>
				Text-Loop{"\n\n"}
			</>
		}
	},
	"popularCard5": {
		"kind": "PopularCard",
		"props": {}
	},
	"popularCardOverride15": {
		"kind": "Override",
		"props": {
			"slot": "text1",
			"hover-text-decoration-line": "underline",
			"children": <Link
				color="--light"
				letter-spacing="1px"
				font="--desccomp"
				text-decoration-line="initial"
				hover-text-decoration-line="underline"
				transition="all 3s ease 0s"
				href="/table"
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				Перейти
			</Link>
		}
	},
	"popularCardOverride16": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"background": "#1A2029 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/spreadsheet.svg?v=2020-10-07T11:32:43.952Z) 97% 90% /15%  no-repeat scroll padding-box"
		}
	},
	"popularCardOverride17": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"children": <>
				Table{"\n\n"}
			</>
		}
	},
	"popularCard6": {
		"kind": "PopularCard",
		"props": {}
	},
	"popularCardOverride18": {
		"kind": "Override",
		"props": {
			"slot": "text1",
			"hover-text-decoration-line": "underline",
			"children": <Link
				color="--light"
				letter-spacing="1px"
				font="--desccomp"
				text-decoration-line="initial"
				hover-text-decoration-line="underline"
				transition="all 3s ease 0s"
				href="/price"
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				Перейти
			</Link>
		}
	},
	"popularCardOverride19": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"background": "#1A2029 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/pricing.svg?v=2020-10-09T02:54:09.030Z) 97% 90% /15%  no-repeat scroll padding-box"
		}
	},
	"popularCardOverride20": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"children": <>
				Price{"\n\n\n\n"}
			</>
		}
	},
	"popularCard7": {
		"kind": "PopularCard",
		"props": {}
	},
	"popularCardOverride21": {
		"kind": "Override",
		"props": {
			"slot": "text1",
			"hover-text-decoration-line": "underline",
			"children": <Link
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
		}
	},
	"popularCardOverride22": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"background": "#1A2029 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/slider.svg?v=2020-10-09T02:54:04.933Z) 97% 90% /15%  no-repeat scroll padding-box"
		}
	},
	"popularCardOverride23": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"children": <>
				Slider{"\n\n"}
			</>
		}
	},
	"popularCard8": {
		"kind": "PopularCard",
		"props": {}
	},
	"popularCardOverride24": {
		"kind": "Override",
		"props": {
			"slot": "text1",
			"hover-text-decoration-line": "underline",
			"children": <Link
				color="--light"
				letter-spacing="1px"
				font="--desccomp"
				text-decoration-line="initial"
				hover-text-decoration-line="underline"
				transition="all 3s ease 0s"
				href="/input"
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				Перейти
			</Link>
		}
	},
	"popularCardOverride25": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"background": "#1A2029 url(https://uploads.quarkly.io/5f5604b57f10ba001eacfed1/images/input.svg?v=2020-10-07T11:40:31.901Z) 97% 100% /15%  no-repeat scroll padding-box"
		}
	},
	"popularCardOverride26": {
		"kind": "Override",
		"props": {
			"slot": "text",
			"children": <>
				Input{"\n\n"}
			</>
		}
	}
};

const BlockPopular = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Text {...override("text")} />
		<Stack {...override("stack")}>
			{"        "}
			<PopularCard {...override("popularCard")}>
				<Override {...override("popularCardOverride")} />
				<Override {...override("popularCardOverride1")} />
				<Override {...override("popularCardOverride2")} />
			</PopularCard>
			<PopularCard {...override("popularCard1")}>
				<Override {...override("popularCardOverride3")} />
				<Override {...override("popularCardOverride4")} />
				<Override {...override("popularCardOverride5")} />
			</PopularCard>
			<PopularCard {...override("popularCard2")}>
				<Override {...override("popularCardOverride6")} />
				<Override {...override("popularCardOverride7")} />
				<Override {...override("popularCardOverride8")} />
			</PopularCard>
			<PopularCard {...override("popularCard3")}>
				<Override {...override("popularCardOverride9")} />
				<Override {...override("popularCardOverride10")} />
				<Override {...override("popularCardOverride11")} />
			</PopularCard>
			<PopularCard {...override("popularCard4")}>
				<Override {...override("popularCardOverride12")} />
				<Override {...override("popularCardOverride13")} />
				<Override {...override("popularCardOverride14")} />
			</PopularCard>
			<PopularCard {...override("popularCard5")}>
				<Override {...override("popularCardOverride15")} />
				<Override {...override("popularCardOverride16")} />
				<Override {...override("popularCardOverride17")} />
			</PopularCard>
			<PopularCard {...override("popularCard6")}>
				<Override {...override("popularCardOverride18")} />
				<Override {...override("popularCardOverride19")} />
				<Override {...override("popularCardOverride20")} />
			</PopularCard>
			<PopularCard {...override("popularCard7")}>
				<Override {...override("popularCardOverride21")} />
				<Override {...override("popularCardOverride22")} />
				<Override {...override("popularCardOverride23")} />
			</PopularCard>
			<PopularCard {...override("popularCard8")}>
				<Override {...override("popularCardOverride24")} />
				<Override {...override("popularCardOverride25")} />
				<Override {...override("popularCardOverride26")} />
			</PopularCard>
		</Stack>
		{children}
	</Section>;
};

Object.assign(BlockPopular, { ...Section,
	defaultProps,
	overrides
});
export default BlockPopular;