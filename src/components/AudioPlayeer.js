import React from "react";
import atomize from "@quarkly/atomize"; // some component

const Player = atomize.audio();

const AudioPlayer = ({
	autoplay,
	loop,
	muted,
	volume,
	children,
	...props
}) => <Player
	d="block"
	mb="16px"
	autoplay={autoplay}
	loop={loop}
	muted={muted}
	volume={volume}
	controls
	{...props}
/>;

export default atomize(AudioPlayer)({
	description: {
		en: "Play audio from url"
	},
	propInfo: {
		src: {
			title: "Source",
			control: "input",
			description: {
				en: "Audio source"
			}
		},
		muted: {
			title: "Muted",
			control: "checkbox",
			description: {
				en: "Mute for startup"
			}
		},
		loop: {
			title: "Loop",
			control: "checkbox",
			description: {
				en: "Enable loop audio"
			}
		},
		autoplay: {
			title: "Autoplay",
			control: "checkbox",
			description: {
				en: "Enable autoplay"
			}
		}
	}
}, // configuration
{
	// default props
	muted: false,
	autoplay: false,
	loop: false,
	bdrs: "100px",
	src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Wolfgang_Amadeus_Mozart_-_Symphony_40_g-moll_-_1._Molto_allegro.ogg"
});