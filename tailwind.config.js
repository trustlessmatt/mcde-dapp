/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#F4F6FE",
        tertiary: "#000000",
        "light-border": "#D9D9D9",
        "dark-border": "#616161",
        "custom-red": "#DA0048",
        "custom-blue": "#3F7CF5",
        "custom-black": "#1B1B1B",
      },
      fontFamily: {
        primary: ["pixel", "-apple-system", "system-ui", "monospace"],
        primaryBold: ["pixel-bold", "-apple-system", "system-ui", "monospace"],
      },
    },
  },
  plugins: [],
};
