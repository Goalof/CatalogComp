import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
<style>
.munecontainer a:hover {
    text-decoration: underline;
}
.munecontainer li { 
padding: 5px; 
font: normal 600 14px/1.5 var(--qtheme-fontFamily-googleSourceSansPro);
}
.munecontainer a {
color: #04080C;
font: normal 600 14px/1.5 var(--qtheme-fontFamily-googleSourceSansPro);
}
.munecontainer ul {
    background: #F7FBFF;
    list-style: none;
    padding-inline-start: 0px;
    padding: 10px;
    width: 100%;
    text-align: center;
}
td:nth-child(1) {
    font-weight: 600;
}
nav {
    position: relative;
}
nav a {
    color: var(--qtheme-color-light);
    text-decoration: none;
    letter-spacing: 2px;
    font: normal 600 15px/1.5 var(--qtheme-fontFamily-googleSourceSansPro);
}
.munecontainer {
    position: absolute;
}
</style>
`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});