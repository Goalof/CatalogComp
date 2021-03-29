// Здесь использую multiinput
import React from "react";
import atomize from "@quarkly/atomize";
import RCTable from "rc-table";
const Table = atomize(RCTable)(); // some component

const ComponentWithYourCustomLogic = ({
	padding,
	columns,
	data,
	// Header
	headerBgc,
	headerColor,
	headerPadding,
	headerFont,
	// Header Borders
	headerBdw,
	headerBdc,
	headerBds,
	// Body
	bodyBgc,
	bodyColor,
	bodyPadding,
	bodyFont,
	// Body Borders
	bodyBdw,
	bodyBdc,
	bodyBds,
	...props
}) => {
	const rColumns = columns.split(",").map((v, i) => ({
		key: i,
		dataIndex: i,
		title: v
	}));
	const rData = data.split(",").map((v, key) => Object.assign({
		key
	}, v.split(";")));
	const components = {
		table: atomize.table({}, {
			width: "100%",
			bdcl: "collapse",
			ov: "hidden"
		}),
		header: {
			row: atomize.tr(),
			cell: atomize.th({}, {
				bgc: headerBgc,
				c: headerColor,
				p: headerPadding,
				font: headerFont,
				bdw: headerBdw,
				bdc: headerBdc,
				bds: headerBds
			})
		},
		body: {
			row: atomize.tr(),
			cell: atomize.td({}, {
				bgc: bodyBgc,
				c: bodyColor,
				p: bodyPadding,
				font: bodyFont,
				bdw: bodyBdw,
				bdc: bodyBdc,
				bds: bodyBds
			})
		}
	};
	return <Table
		components={components}
		columns={rColumns}
		data={rData}
		overflow="auto"
		{...props}
	/>;
};

export default atomize(ComponentWithYourCustomLogic)({
	description: {
		en: "Table"
	},
	propInfo: {
		data: {
			control: "input",
			multiply: true,
			title: "Data",
			description: {
				en: "Check rc-table"
			},
			category: "Table"
		},
		columns: {
			control: "input",
			multiply: true,
			title: "Columns",
			description: {
				en: "Check rc-table"
			},
			category: "Table"
		},
		headerBgc: {
			control: "background",
			title: "Background",
			description: {
				en: "Header background"
			},
			category: "Header"
		},
		headerColor: {
			control: "color",
			title: "Color",
			description: {
				en: "Header color"
			},
			category: "Header"
		},
		headerPadding: {
			control: "input",
			title: "Padding",
			weight: 1,
			description: {
				en: "Header padding"
			},
			category: "Header"
		},
		headerFont: {
			control: "font",
			title: "Font",
			weight: 1,
			description: {
				en: "Header font"
			},
			category: "Header"
		},
		headerBdw: {
			title: "Width",
			control: "input",
			description: {
				en: "Border width"
			},
			category: "Header Borders"
		},
		headerBds: {
			title: "Style",
			control: "select",
			variants: ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"],
			description: {
				en: "Border style"
			},
			category: "Header Borders"
		},
		headerBdc: {
			title: "Color",
			control: "color",
			weight: 1,
			description: {
				en: "Border color"
			},
			category: "Header Borders"
		},
		bodyBgc: {
			title: "Background",
			control: "background",
			description: {
				en: "Body background"
			},
			category: "Body"
		},
		bodyColor: {
			title: "Body",
			control: "color",
			description: {
				en: "Body color"
			},
			category: "Body"
		},
		bodyPadding: {
			title: "Padding",
			control: "input",
			weight: 1,
			description: {
				en: "Body padding"
			},
			category: "Body"
		},
		bodyFont: {
			control: "font",
			title: "Font",
			weight: 1,
			description: {
				en: "Body font"
			},
			category: "Body"
		},
		bodyBdw: {
			title: "Width",
			control: "input",
			description: {
				en: "Border width"
			},
			category: "Body Borders"
		},
		bodyBds: {
			title: "Style",
			control: "select",
			variants: ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"],
			description: {
				en: "Border style"
			},
			category: "Body Borders"
		},
		bodyBdc: {
			title: "Color",
			control: "color",
			weight: 1,
			description: {
				en: "Border color"
			},
			category: "Body Borders"
		}
	}
}, // configuration
{
	margin: "0 10px",
	headerPadding: 10,
	headerColor: "--light",
	headerBgc: "--indigo",
	bodyPadding: 10,
	bodyColor: "--dark",
	bodyBgc: "--light",
	bodyBdc: "--lightD2",
	bodyBdw: "1px",
	bodyBds: "solid",
	bdrs: 20,
	columns: "Name,Age,Address",
	data: "Jack;28;some where1,Roose;36;some where2"
});