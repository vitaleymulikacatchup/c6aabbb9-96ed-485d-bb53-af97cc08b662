"use client";

import MediaContent from "@/components/shared/MediaContent";
import FillWidthText from "@/components/shared/FillWidthText/FillWidthText";
import TextAnimation from "@/components/text/TextAnimation";
import HeroBackgrounds, { type HeroBackgroundVariantProps } from "@/components/background/HeroBackgrounds";
import { cls } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";

type HeroLogoBillboardBackgroundProps = Extract<
  HeroBackgroundVariantProps,
  | { variant: "plain" }
  | { variant: "animated-grid" }
  | { variant: "canvas-reveal" }
  | { variant: "cell-wave" }
  | { variant: "downward-rays-animated" }
  | { variant: "downward-rays-animated-grid" }
  | { variant: "downward-rays-static" }
  | { variant: "downward-rays-static-grid" }
  | { variant: "glowing-orb" }
  | { variant: "gradient-bars" }
  | { variant: "radial-gradient" }
  | { variant: "rotated-rays-animated" }
  | { variant: "rotated-rays-animated-grid" }
  | { variant: "rotated-rays-static" }
  | { variant: "rotated-rays-static-grid" }
  | { variant: "sparkles-gradient" }
>;

interface HeroLogoBillboardProps {
    logoText: string;
    description: string;
    background: HeroLogoBillboardBackgroundProps;
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
    frameStyle?: "card" | "browser";
    logoLineHeight?: number;
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    logoContainerClassName?: string;
    logoClassName?: string;
    descriptionClassName?: string;
    mediaWrapperClassName?: string;
    imageClassName?: string;
    browserBarClassName?: string;
    addressBarClassName?: string;
}

const HeroLogoBillboard = ({
    logoText,
    description,
    background,
    imageSrc,
    videoSrc,
    imageAlt = "",
    videoAriaLabel = "Hero video",
    frameStyle = "card",
    logoLineHeight = 1.1,
    ariaLabel = "Hero section",
    className = "",
    containerClassName = "",
    logoContainerClassName = "",
    logoClassName = "",
    descriptionClassName = "",
    mediaWrapperClassName = "",
    imageClassName = "",
    browserBarClassName = "",
    addressBarClassName = "",
}: HeroLogoBillboardProps) => {
    const theme = useTheme();

    return (
        <section
            aria-label={ariaLabel}
            className={cls("relative w-full py-hero-page-padding", className)}
        >
            <HeroBackgrounds {...background} />
            <div className={cls("w-content-width mx-auto flex flex-col gap-14 md:gap-15 relative z-10", containerClassName)}>
                <div className={cls("w-full flex flex-col items-end gap-6 md:gap-8", logoContainerClassName)}>
                    <div className="relative w-full flex">
                        <FillWidthText lineHeight={logoLineHeight} className={cls("text-foreground", logoClassName)}>
                            {logoText}
                        </FillWidthText>
                    </div>
                    <div className="relative w-full md:w-1/2" >
                        <TextAnimation
                            type={theme.defaultTextAnimation}
                            text={description}
                            variant="words-trigger"
                            start="top 100%"
                            className={cls("text-lg md:text-3xl text-foreground/75 text-balance text-end leading-[1.2]", descriptionClassName)}
                        />
                    </div>
                </div>

                {frameStyle === "browser" ? (
                    <div className={cls("w-full overflow-hidden rounded-theme-capped card", mediaWrapperClassName)}>
                        <div className={cls("relative z-1 bg-background border-b border-foreground/10 px-4 py-3 flex items-center gap-4", browserBarClassName)}>
                            <div className="flex items-center gap-2">
                                <div className="h-3 w-auto aspect-square rounded-theme bg-accent" />
                                <div className="h-3 w-auto aspect-square rounded-theme bg-accent" />
                                <div className="h-3 w-auto aspect-square rounded-theme bg-accent" />
                            </div>
                            <div className="flex items-center gap-2 flex-1">
                                <div className={cls("w-15 md:w-10 h-8 rounded-theme bg-accent/10", addressBarClassName)} />
                                <div className="w-15 md:w-10 h-8 rounded-theme bg-accent/10" />
                                <div className="hidden md:block w-10 h-8 rounded-theme bg-accent/10" />
                            </div>
                            <Plus className="h-[var(--text-sm)] w-auto text-foreground" />
                        </div>
                        <div className="relative z-1 p-0">
                            <MediaContent
                                imageSrc={imageSrc}
                                videoSrc={videoSrc}
                                imageAlt={imageAlt}
                                videoAriaLabel={videoAriaLabel}
                                imageClassName={cls("z-1 rounded-none! aspect-square md:aspect-video", imageClassName)}
                            />
                        </div>
                    </div>
                ) : (
                    <div className={cls("w-full overflow-hidden rounded-theme-capped card p-4", mediaWrapperClassName)}>
                        <MediaContent
                            imageSrc={imageSrc}
                            videoSrc={videoSrc}
                            imageAlt={imageAlt}
                            videoAriaLabel={videoAriaLabel}
                            imageClassName={cls("z-1 aspect-square md:aspect-video", imageClassName)}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

HeroLogoBillboard.displayName = "HeroLogoBillboard";

export default HeroLogoBillboard;