"use client";

import { cn } from "@/lib/utils";

type ExternalLinkProps = {
    href: string;
    children: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    className?: string;
};

const ExternalLink = ({ href, children, className, target = "_blank"  }: ExternalLinkProps) => {
    return (
        <a href={href} target={target} rel="noopener noreferrer" className={cn(" opacity-80 hover:opacity-100", className)}>
            {children}
        </a>
    )
}

export default ExternalLink