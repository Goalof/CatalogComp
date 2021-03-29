import React, { useEffect, useState, useRef } from 'react';
import atomize from "@quarkly/atomize";
import { Box } from '@quarkly/widgets';
const languageConverter = {
	'English': 'en_US',
	'Русский': 'ru_RU'
};

const useDebounce = (value, timeout = 1000) => {
	const [state, setState] = useState(value);
	useEffect(() => {
		const handler = setTimeout(() => setState(value), timeout);
		return () => clearTimeout(handler);
	}, [value, timeout]);
	return state;
};

function usePrevious(value) {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	}, [value]);
	return ref.current;
}

const MyFB = {
	create: ({
		language,
		appId
	}) => {
		if (!canDOM()) return;

		((d, s, id) => {
			const fjs = d.getElementsByTagName(s)[d.getElementsByTagName(s).length - 1];
			if (d.getElementById(id)) return;
			const js = d.createElement(s);
			js.id = id;
			js.src = `//connect.facebook.net/${language}/sdk.js#xfbml=1&version=v2.12&appId=${appId}`;
			console.log(js);
			fjs.parentNode.insertBefore(js, fjs);
		})(document, 'script', 'facebook-jssdk');
	},
	remove: () => {
		let elm = document.getElementById('facebook-jssdk');

		if (elm) {
			elm.outerHTML = '';
		}

		elm = document.getElementById('fb-root');

		if (elm) {
			elm.outerHTML = '';
		}

		window.FB = undefined;
	},
	parse: () => {
		if (window.FB && typeof window.FB !== 'undefined') {
			window.FB.XFBML.parse();
		}
	}
};

const canDOM = () => document && typeof document !== 'undefined';

const LikeButton = ({
	language,
	appId,
	...props
}) => {
	const {
		href,
		layout,
		action,
		size,
		share,
		reference,
		width,
		colorScheme,
		kidDirectedSite
	} = props;
	const oldLang = usePrevious(language);
	const oldAppId = usePrevious(appId);
	const didMountRef = useRef(false);
	useEffect(() => {
		if (didMountRef.current) {
			if (oldLang != language || oldAppId != appId && canDOM()) {
				MyFB.remove();
				MyFB.create({
					language,
					appId
				});
			}

			MyFB.parse();
		} else {
			MyFB.create({
				language,
				appId
			});
			MyFB.parse();
			didMountRef.current = true;
		}
	});
	return <div
		className="fb-like"
		data-href={href}
		data-layout={layout}
		data-action={action}
		data-size={size}
		data-share={share}
		data-width={width}
		data-ref={reference}
		data-colorscheme={colorScheme}
		data-kid-directed-site={kidDirectedSite}
	/>;
};

const FacebookLike = ({
	appId,
	language,
	children,
	"data-qid": qid,
	...props
}) => {
	const dAppID = useDebounce(appId);
	return <Box data-qid={qid}>
		  
		{dAppID ? <LikeButton appId={dAppID} language={languageConverter[language]} {...props} /> : 'Add your Facebook App ID in the props panel.'}
	</Box>;
};

const propInfo = {
	appId: {
		title: 'Facebook App ID',
		description: {
			en: 'ID of Facebook App. You can create your app on this url: developers.facebook.com/apps'
		},
		control: 'input',
		category: 'System',
		weight: 1
	},
	language: {
		title: 'Language',
		description: {
			en: 'Language of the Like Button. Page update required!'
		},
		category: 'System',
		control: 'select',
		variants: ['English', 'Русский']
	},
	colorScheme: {
		title: 'Color scheme',
		description: {
			en: 'The color scheme used by the plugin for any text outside of the button itself.'
		},
		category: 'Button',
		control: 'select',
		variants: ['light', 'dark']
	},
	share: {
		title: 'Share',
		description: {
			en: 'Specifies whether to include a share button beside the Like button.'
		},
		category: 'Button',
		control: 'checkbox'
	},
	href: {
		title: 'URL',
		description: {
			en: 'The URL of the webpage that will be liked (current url default).'
		},
		category: 'Button',
		control: 'input'
	},
	layout: {
		title: 'Layout',
		description: {
			en: 'Selects one of the different layouts that are available for the plugin.'
		},
		category: 'Button',
		control: 'select',
		variants: ['standard', 'box_count', 'button_count', 'button']
	},
	size: {
		title: 'Size',
		description: {
			en: 'Button size'
		},
		category: 'Button',
		control: 'select',
		variants: ['small', 'large']
	},
	action: {
		title: 'Action',
		description: {
			en: 'The verb to display on the button.'
		},
		category: 'Button',
		control: 'select',
		variants: ['like', 'recommend']
	},
	kidDirectedSite: {
		title: 'Kid directed site',
		description: {
			en: 'If your website or online service, or a portion of your service, is directed to children under 13 you must select this.'
		},
		category: 'Button',
		control: 'checkbox'
	},
	referral: {
		title: 'Referal',
		description: {
			en: 'A label for tracking referrals which must be less than 50 characters and can contain alphanumeric characters and some punctuation (currently +/=-.:_). Check developers.facebook.com/docs/plugins/faqs#ref for more details.'
		},
		category: 'Advanced',
		control: 'Input'
	}
};
const defaultProps = {
	action: 'like',
	layout: 'standard',
	size: 'small',
	colorScheme: 'light',
	showFaces: false,
	share: false,
	kidDirectedSite: false,
	language: 'English'
};
export default atomize(FacebookLike)({
	name: "FacebookLike",
	description: {
		// past here description for your component
		en: "This enables FB users to like your materials without having to register on your site."
	},
	propInfo
}, defaultProps);