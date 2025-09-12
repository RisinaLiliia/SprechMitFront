/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "var(--forest)",
        sand: "var(--sand)",
        clay: "var(--clay)",
        stone: "var(--stone)",
        charcoal: "var(--charcoal)",
        linen: "var(--linen)",

        primary: "var(--forest)",
        "primary-foreground": "var(--linen)",
        secondary: "var(--sand)",
        "secondary-foreground": "var(--charcoal)",
        muted: "var(--stone)",
        foreground: "var(--charcoal)",
        background: "var(--linen)",
        ring: "var(--forest)",
      },
      fontFamily: {
        main: "var(--font-main)",
        heading: "var(--font-heading)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
