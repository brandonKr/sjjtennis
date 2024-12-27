import React from "react";
import Link from "next/link";

interface Props {
    elHref: string;
    isExternal: boolean;
    onClickFn?: () => void;
    children: React.ReactNode;
}

export const LinkHandler = ({ elHref, isExternal, onClickFn, children }: Props) => {
   return(
    <>
        {isExternal ? (
            <a 
                style={{ display: 'flex' }}
                href={elHref}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        ) : onClickFn ? (
            <button 
                style={{ display: 'flex' }}
                onClick={onClickFn}>{children}
            </button>             
        ) : ( 
            elHref && (
                <Link href={elHref} passHref>
                    <a style={{ width: '100%', display: 'flex' }}>{children}</a>
                </Link>
                )
        )}
    </>
   )
};