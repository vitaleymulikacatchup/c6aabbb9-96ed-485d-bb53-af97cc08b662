"use client";

import React from "react";
import useFillWidthText from "./useFillWidthText";
import { cls } from "@/lib/utils";

type TextElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

interface FillWidthTextProps {
    children: string;
    as?: TextElement;
    lineHeight?: number;
    className?: string;
}

const FillWidthText = ({
    children,
    as: Component = "h1",
    lineHeight = 1.1,
    className = "",
}: FillWidthTextProps) => {
    const { containerRef, textRef, fontSize, isReady } = useFillWidthText(children);

    return (
        <div
            ref={containerRef}
            className="w-full min-w-0 flex-1"
        >
            <Component
                ref={textRef as React.RefObject<HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement>}
                className={cls(
                    "whitespace-nowrap transition-opacity duration-150",
                    isReady ? "opacity-100" : "opacity-0",
                    className
                )}
                style={{
                    fontSize: `${fontSize}px`,
                    lineHeight,
                }}
            >
                {children}
            </Component>
        </div>
    );
};

FillWidthText.displayName = "FillWidthText";

export default React.memo(FillWidthText);
