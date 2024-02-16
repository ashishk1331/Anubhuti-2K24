/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        voilet: "#7148FC",
        "dark-gray": "#FFFFFF",
        "light-gray": "#D6D4E8",
        background: "#FFFFFF",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
