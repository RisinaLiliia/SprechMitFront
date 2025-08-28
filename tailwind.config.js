/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "var(--dark-gray)",
        green: "var(--green)",
        yellow: "var(--yellow)",
        red: "var(--red)",
        lightGray: "var(--light-gray)",
        offWhite: "var(--off-white)",
        primary: "var(--green)",
        "primary-foreground": "var(--off-white)",
        secondary: "var(--yellow)",
        "secondary-foreground": "var(--dark-gray)",
        input: "var(--light-gray)",
        ring: "var(--green)",
        muted: "var(--light-gray)",
        foreground: "var(--dark-gray)",
        background: "var(--off-white)",
      },
      fontFamily: {
        main: "var(--font-main)",
        heading: "var(--font-heading)",
      },
    },
  },
  plugins: [],
};
