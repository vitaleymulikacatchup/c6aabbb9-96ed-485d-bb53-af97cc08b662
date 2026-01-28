import type { CTAButtonVariant, ButtonPropsForVariant } from "@/components/button/types";

/**
 * Configuration for button components used across sections.
 *
 * @property text - Button label text (required, 2-15 characters recommended)
 * @property onClick - Optional click handler
 * @property href - Optional link destination. Supports:
 *   - External links: "https://example.com" or "www.example.com"
 *   - Internal navigation: "/page" or "/page#section"
 *   - Scroll to section on current page: "sectionId" (without leading slash)
 * @property scrollToSection - If true, href will be treated as section ID for scrolling on current page
 * @property props - Additional variant-specific props (e.g., iconClassName for icon-arrow)
 *
 * @example
 * ```tsx
 * const buttons: ButtonConfig[] = [
 *   { text: "Get Started", href: "/signup" }, // Navigate to /signup page
 *   { text: "Learn More", href: "/about#features" }, // Navigate to /about and scroll to #features
 *   { text: "Scroll to section", href: "contact" }, // Scroll to #contact on current page
 *   { text: "External", href: "https://example.com" }, // Open external link
 *   { text: "Click me", onClick: () => console.log("clicked") }
 * ];
 * ```
 *
 * @remarks
 * Button variant (text-stagger, icon-arrow, etc.) is controlled by ThemeProvider.
 * Do not specify variant in ButtonConfig - it's applied automatically.
 */
export interface ButtonConfig {
    text: string;
    onClick?: () => void;
    href?: string;
    scrollToSection?: boolean;
    props?: Partial<ButtonPropsForVariant<CTAButtonVariant>>;
}
