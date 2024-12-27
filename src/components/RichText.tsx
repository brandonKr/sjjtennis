import React from "react";
import {compiler} from "markdown-to-jsx";

export interface RichTextProps {
    text: string;
}

export const RichText = ({text}: RichTextProps) => {
    return <span className="rich-text">{compiler(text,{ wrapper: null})}</span>;
};