"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
    className?: string
}

const ExternalLink = ({ children, className, ...props  }: ExternalLinkProps) => {
    return (
        <a {...props} className={cn(className)} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}

export default ExternalLink