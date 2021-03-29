import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {},
    "index": {
        "box-shadow": "",
        "overflow-y": "hidden",
        "overflow-x": "hidden"
    },
    "multimedia/audioplayer": {
        "overflow-y": "hidden",
        "overflow-x": "hidden"
    },
    "animation/ticker": {},
    "multimedia/youtubevideo": {},
    "faq": {},
    "content/table": {},
    "content/progress-bar": {},
    "integration/livechat": {},
    "content/pop-up": {},
    "content/input": {},
    "content/price": {},
    "multimedia/slider": {},
    "animation/text-loop": {},
    "content/timeline": {},
    "content/accordeon": {},
    "content": {},
    "multimedia/vimeovideo": {},
    "integration/vkpage": {},
    "integration/vkcomments": {},
    "integration/facebooklike": {},
    "multimedia": {},
    "integration": {},
    "animation": {}
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
