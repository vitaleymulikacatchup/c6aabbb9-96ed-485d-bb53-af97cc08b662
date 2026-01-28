"use client";

import { memo, useRef } from "react";
import { useMotionValue } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { CardPattern } from "@/components/background/CardPattern";
import { usePatternInteraction } from "./usePatternInteraction";
import { cls } from "@/lib/utils";

export interface FeatureHoverPatternItemData {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureHoverPatternItemProps {
  item: FeatureHoverPatternItemData;
  index: number;
  className?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  gradientClassName?: string;
  shouldUseLightText?: boolean;
}

const FeatureHoverPatternItem = memo(function FeatureHoverPatternItem({
  item,
  index,
  className = "",
  iconContainerClassName = "",
  iconClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  gradientClassName = "",
  shouldUseLightText = false,
}: FeatureHoverPatternItemProps) {
  const Icon = item.icon;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { state, onMouseMove } = usePatternInteraction(
    mouseX,
    mouseY,
    containerRef
  );

  return (
    <article
      key={`feature-${index}`}
      className={cls(
        "card rounded-theme-capped min-h-0 h-full",
        className
      )}
      aria-label={item.title}
    >
      <div className="relative z-10 w-full h-full p-5 flex flex-col gap-5 justify-between">
        <div
          ref={containerRef}
          className={cls(
            "group/primary-button relative w-full h-full flex items-center justify-center",
            state.isMobile && state.isInView ? "group/primary-button-active" : ""
          )}
          onMouseMove={onMouseMove}
        >
          <div
            className={cls(
              "relative z-20 h-15 w-auto aspect-square primary-button rounded-theme transition-all duration-300 flex items-center justify-center shadow",
              iconContainerClassName
            )}
          >
            <Icon
              className={cls(
                "w-[35%] aspect-square text-background",
                iconClassName
              )}
              strokeWidth={1}
              aria-hidden="true"
            />
          </div>
          <div className="opacity-25">
            <CardPattern
              mouseX={mouseX}
              mouseY={mouseY}
              randomString={state.randomString}
              isActive={state.isMobile && state.isInView}
              gradientClassName={
                gradientClassName || "bg-gradient-to-r from-accent to-background-accent"
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3
            className={cls(
              "text-2xl font-medium leading-tight",
              shouldUseLightText && "text-background",
              titleClassName
            )}
          >
            {item.title}
          </h3>
          <p
            className={cls(
              "text-sm leading-tight",
              shouldUseLightText ? "text-background" : "text-foreground",
              descriptionClassName
            )}
          >
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
});

FeatureHoverPatternItem.displayName = "FeatureHoverPatternItem";

export default FeatureHoverPatternItem;
