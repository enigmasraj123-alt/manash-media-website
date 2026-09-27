/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "tertiary-container": "#e4e2e2", "on-secondary": "#2f3131", "inverse-primary": "#5d5f5f",
        "primary-fixed-dim": "#c6c6c7", "on-secondary-fixed": "#1a1c1c", "on-primary-container": "#636565",
        "surface-variant": "#353534", "error": "#ffb4ab", "outline": "#8A8A8A", "on-background": "#e5e2e1",
        "tertiary": "#ffffff", "on-tertiary-fixed": "#1b1c1c", "primary-container": "#e2e2e2",
        "on-tertiary-fixed-variant": "#464747", "secondary": "#c7c6c6", "outline-variant": "#DADAD7",
        "on-surface": "#111111", "on-primary": "#2f3131", "inverse-surface": "#e5e2e1", "surface-tint": "#c6c6c7",
        "surface-container-highest": "#353534", "surface-dim": "#FFFFFF", "on-tertiary": "#303031",
        "on-primary-fixed": "#1a1c1c", "surface": "#FFFFFF", "secondary-container": "#484949",
        "surface-container-low": "#F5F5F3", "on-surface-variant": "#5B5B5B", "primary-fixed": "#e2e2e2",
        "tertiary-fixed-dim": "#c7c6c6", "surface-container-high": "#EDEDEA", "on-secondary-container": "#b8b8b8",
        "surface-bright": "#3a3939", "error-container": "#93000a", "on-secondary-fixed-variant": "#464747",
        "on-primary-fixed-variant": "#454747", "inverse-on-surface": "#313030", "background": "#FFFFFF",
        "on-error-container": "#ffdad6", "tertiary-fixed": "#e4e2e2", "primary": "#FF6A00",
        "secondary-fixed-dim": "#c7c6c6", "secondary-fixed": "#e3e2e2", "on-tertiary-container": "#646464",
        "on-error": "#690005", "surface-container-lowest": "#FFFFFF", "surface-container": "#201f1f"
      },
      borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
      spacing: {
        "space-3xl": "4rem", "space-sm": "0.5rem", "gutter-mobile": "1rem", "space-xl": "2rem",
        "container-max": "1440px", "gutter-tablet": "1.5rem", "space-md": "1rem", "space-lg": "1.5rem",
        "space-4xl": "6rem", "space-2xs": "0.125rem", "space-xs": "0.25rem", "gutter-desktop": "2rem",
        "space-2xl": "3rem", "space-5xl": "8rem"
      },
      fontFamily: {
        "headline-md": ["Space Grotesk"], "label-caps": ["JetBrains Mono"], "body-md": ["Inter"],
        "headline-lg": ["Space Grotesk"], "headline-xl": ["Space Grotesk"], "body-sm": ["Inter"],
        "body-lg": ["Inter"], "label-micro": ["JetBrains Mono"], "display-hero-mobile": ["Space Grotesk"],
        "code-md": ["JetBrains Mono"], "headline-xl-mobile": ["Space Grotesk"], "headline-sm": ["Space Grotesk"],
        "display-hero": ["Space Grotesk"]
      },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "500" }],
        "label-caps": ["11px", { lineHeight: "16px", letterSpacing: "0.12em", fontWeight: "500" }],
        "body-md": ["15px", { lineHeight: "24px", letterSpacing: "0", fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "500" }],
        "headline-xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.03em", fontWeight: "500" }],
        "body-sm": ["13px", { lineHeight: "20px", letterSpacing: "0", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "label-micro": ["9px", { lineHeight: "12px", letterSpacing: "0.16em", fontWeight: "500" }],
        "display-hero-mobile": ["40px", { lineHeight: "48px", letterSpacing: "-0.03em", fontWeight: "600" }],
        "code-md": ["14px", { lineHeight: "22px", letterSpacing: "0", fontWeight: "400" }],
        "headline-xl-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "500" }],
        "headline-sm": ["20px", { lineHeight: "28px", letterSpacing: "0", fontWeight: "500" }],
        "display-hero": ["72px", { lineHeight: "80px", letterSpacing: "-0.04em", fontWeight: "600" }]
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")]
};
