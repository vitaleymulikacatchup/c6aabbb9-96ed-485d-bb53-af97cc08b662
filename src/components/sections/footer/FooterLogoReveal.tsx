"use client";

import { useRef, useEffect, useState } from "react";
import FillWidthText from "@/components/shared/FillWidthText/FillWidthText";
import { cls } from "@/lib/utils";

interface FooterLogoRevealProps {
  // logoSrc?: string;
  // logoAlt?: string;
  logoText?: string;
  logoLineHeight?: number;
  ariaLabel?: string;
  className?: string;
  wrapperClassName?: string;
  containerClassName?: string;
  logoClassName?: string;
}

const FooterLogoReveal = ({
  // logoSrc,
  // logoAlt = "Logo",
  logoText = "Webild",
  logoLineHeight = 1.1,
  ariaLabel = "Site footer",
  className = "",
  wrapperClassName = "",
  containerClassName = "",
  logoClassName = "",
}: FooterLogoRevealProps) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        const height = footerRef.current.offsetHeight;
        setFooterHeight(height);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    const currentFooter = footerRef.current;

    if (currentFooter) {
      resizeObserver.observe(currentFooter);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section
      aria-label={ariaLabel}
      className={cls("relative z-0 w-full mt-20", className)}
      style={{
        height: footerHeight ? `${footerHeight}px` : "auto",
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <div
        className={cls("fixed bottom-0 w-full flex items-center justify-center overflow-hidden", wrapperClassName)}
        style={{ height: footerHeight ? `${footerHeight}px` : "auto" }}
      >
        <div ref={footerRef} className={cls("w-full", containerClassName)}>
          <footer
            role="contentinfo"
            className="relative w-full py-20 card"
          >
            <div className="w-content-width mx-auto flex flex-col relative z-10">
              <div className={cls("relative z-1 w-full", logoClassName)}>
                <FillWidthText lineHeight={logoLineHeight}>
                  {logoText}
                </FillWidthText>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

FooterLogoReveal.displayName = "FooterLogoReveal";

export default FooterLogoReveal;
