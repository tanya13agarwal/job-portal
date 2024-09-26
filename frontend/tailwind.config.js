/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBeige: "#EAD8B1",
        customLightBlue: "#6A9AB0",
        customBlue: "#3A6D8C",
        customDarkBlue: "#001F3F",
      },
    },
  },
  plugins: [],
}
