import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Oxford & Brass Design System
        oxford: "#0f172a",      // Primary: Headers, Footers, Primary Text
        brass: "#b8860b",       // Accent: CTAs, Icons, Review Stars
        ivory: "#faf8f5",       // Background: Section Backgrounds
        white: "#ffffff",       // Card/Surface: Content Cards, Forms
        slate: "#3d3d3d",       // Body Text: Main paragraphs (softer than black)
        muted: "#6b7280",       // Muted Text: Labels, Captions, Meta
        success: "#166534",     // Success: WhatsApp, Positive signals
        border: "#e8e4df",      // Borders and dividers
        
        // Legacy colors for backward compatibility
        charcoal: "#1a1a2e",    // Will migrate to oxford
      },
      fontFamily: {
        serif: ['var(--font-serif)', "'DM Serif Display'", "Georgia", "serif"],
        sans: ['var(--font-sans)', "'Source Sans 3'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      fontSize: {
        // British Standard Typography System
        'h1-desktop': ['56px', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'h1-mobile': ['40px', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'h2-desktop': ['36px', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
        'h2-mobile': ['28px', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
        'body-desktop': ['18px', { lineHeight: '1.75' }],
        'body-mobile': ['17px', { lineHeight: '1.75' }],
        'label': ['14px', { letterSpacing: '0.05em' }],
      },
      spacing: {
        // Breathable System
        'section-mobile': '80px',   // py-20
        'section-desktop': '128px', // py-32
      },
    },
  },
  plugins: [],
};
export default config;
