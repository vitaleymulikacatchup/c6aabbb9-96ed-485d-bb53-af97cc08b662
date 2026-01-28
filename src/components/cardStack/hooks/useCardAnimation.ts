import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { CardAnimationType, GridVariant } from "../types";
import { useDepth3DAnimation } from "./useDepth3DAnimation";

gsap.registerPlugin(ScrollTrigger);

interface UseCardAnimationProps {
  animationType: CardAnimationType | "depth-3d";
  itemCount: number;
  isGrid?: boolean;
  supports3DAnimation?: boolean;
  gridVariant?: GridVariant;
}

export const useCardAnimation = ({
  animationType,
  itemCount,
  isGrid = true,
  supports3DAnimation = false,
  gridVariant
}: UseCardAnimationProps) => {
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const perspectiveRef = useRef<HTMLDivElement | null>(null);

  // Enable 3D effect only when explicitly supported and conditions are met
  const { isMobile } = useDepth3DAnimation({
    itemRefs,
    containerRef,
    perspectiveRef,
    isEnabled: animationType === "depth-3d" && isGrid && supports3DAnimation && gridVariant === "uniform-all-items-equal",
  });

  // Use scale-rotate as fallback when depth-3d conditions aren't met
  const effectiveAnimationType =
    animationType === "depth-3d" && (isMobile || !isGrid || gridVariant !== "uniform-all-items-equal")
      ? "scale-rotate"
      : animationType;

  useGSAP(() => {
    if (effectiveAnimationType === "none" || effectiveAnimationType === "depth-3d" || itemRefs.current.length === 0) return;

    const items = itemRefs.current.filter((el) => el !== null);

    if (effectiveAnimationType === "opacity") {
      gsap.fromTo(
        items,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.25,
          stagger: 0.15,
          ease: "sine",
          scrollTrigger: {
            trigger: items[0],
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    } else if (effectiveAnimationType === "slide-up") {
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, yPercent: 15 },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            delay: index * 0.15,
            ease: "sine",
            scrollTrigger: {
              trigger: items[0],
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    } else if (effectiveAnimationType === "scale-rotate") {
      gsap.fromTo(
        items,
        { scaleX: 0, rotate: 10 },
        {
          scaleX: 1,
          rotate: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3",
          scrollTrigger: {
            trigger: items[0],
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    } else if (effectiveAnimationType === "blur-reveal") {
      gsap.fromTo(
        items,
        { opacity: 0, filter: "blur(10px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: items[0],
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [effectiveAnimationType, itemCount]);

  return { itemRefs, containerRef, perspectiveRef };
};
