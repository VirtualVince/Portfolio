/** @type {import('tailwindcss').Config} */

// Colours are defined as space separated RGB triplets in globals.css so that the
// <alpha-value> placeholder works. That keeps opacity modifiers like bg-accent/20
// functional, which a plain var(--accent) would break.
const withAlpha = (v) => `rgb(var(${v}) / <alpha-value>)`;

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic tokens. These flip with the theme, so components use these
        // and never a raw brand colour.
        bg: withAlpha("--c-bg"),
        surface: withAlpha("--c-surface"),
        raised: withAlpha("--c-raised"),
        content: withAlpha("--c-content"),
        muted: withAlpha("--c-muted"),
        accent: withAlpha("--c-accent"),
        "accent-hover": withAlpha("--c-accent-hover"),
        "on-accent": withAlpha("--c-on-accent"),
        line: withAlpha("--c-line"),

        // Raw brand palette, for the rare case a colour must not flip.
        navy: {
          950: "#08111F",
          900: "#0A1B33",
          800: "#0F2547",
          700: "#12305C",
          600: "#1B3A6B",
          500: "#25497F",
        },
        gold: {
          bright: "#D4AF37", // dark surfaces only, 2.10 on white
          hover: "#E5C158", // bright gold hover, dark surfaces only
          mid: "#A67C0E", // large text and borders, passes on both
          deep: "#8A6510", // light surfaces only, 5.32 on white
        },
        ink: "#08090C",
      },
      fontFamily: {
        display: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
