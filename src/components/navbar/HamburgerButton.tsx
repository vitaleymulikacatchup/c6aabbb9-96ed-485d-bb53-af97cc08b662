"use client";

import { cls } from "@/lib/utils";

interface HamburgerButtonProps {
  isActive: boolean;
  onClick: () => void;
  className?: string;
  activeBarClassName?: string;
  inactiveBarClassName?: string;
  ariaControls?: string;
}

const HamburgerButton = ({
  isActive,
  onClick,
  className = "",
  activeBarClassName = "bg-background",
  inactiveBarClassName = "bg-foreground",
  ariaControls = "navigation-menu",
}: HamburgerButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cls(
        "pointer-events-auto cursor-pointer bg-transparent border-none flex justify-center items-center h-9 w-[var(--height-9)] aspect-square relative",
        className
      )}
      aria-label={isActive ? "Close menu" : "Open menu"}
      aria-expanded={isActive}
      aria-controls={ariaControls}
    >
      <span
        aria-hidden="true"
        className={cls(
          "transition-all duration-700 ease-[cubic-bezier(0.5,0.5,0,1)] w-[40%] h-0.25 absolute",
          isActive
            ? `${activeBarClassName} translate-y-0 rotate-45`
            : `${inactiveBarClassName} -translate-y-1 hover:translate-y-1`
        )}
      />
      <span
        aria-hidden="true"
        className={cls(
          "transition-all duration-700 ease-[cubic-bezier(0.5,0.5,0,1)] w-[40%] h-0.25 absolute",
          isActive
            ? `${activeBarClassName} translate-y-0 -rotate-45`
            : `${inactiveBarClassName} translate-y-1 hover:-translate-y-1`
        )}
      />
    </button>
  );
};

HamburgerButton.displayName = "HamburgerButton";

export default HamburgerButton;
