/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      customBeige: "#EAD8B1",
      customLightBlue: "#6A9AB0",
      customBlue: "#3A6D8C",
      customDarkBlue: "#001F3F",
      darkGray: "#696969",
      lightBlack: "#4A4947",
    },
    extend: {
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px"
      },
    },
  },
  plugins: [],
}
