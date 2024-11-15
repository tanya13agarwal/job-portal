/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    colors: {
      customBeige: "#EAE4DD",
      customLightBlue: "#6A9AB0",
      customBlue: "#3A6D8C",
      customDarkBlue: "#001F3F",
      white: "#fff",
      black: "#000",
      transparent: "#ffffff00",
      darkGray: "#696969",
      lightBlack: "#4A4947",
      richblack: {
        5: "#F1F2FF",
        25: "#DBDDEA",
        50: "#C5C7D4",
        100: "#AFB2BF",
        200: "#999DAA",
        300: "#838894",
        400: "#6E727F",
        500: "#585D69",
        600: "#424854",
        700: "#2C333F",
        800: "#161D29",
        900: "#000814",
      },
      pink: {
        5: "#FFF1F1",
        25: "#FBC7D1",
        50: "#F79CB0",
        100: "#F37290",
        200: "#EF476F",
        300: "#D43D63",
        400: "#BA3356",
        500: "#9F294A",
        600: "#841E3E",
        700: "#691432",
        800: "#4F0A25",
        900: "#340019",
      },
      yellow: {
        5: "#FFF970",
        25: "#FFE83D",
        50: "#FFD60A",
        100: "#E7C009",
        200: "#CFAB08",
        300: "#B69507",
        400: "#9E8006",
        500: "#866A04",
        600: "#6E5503",
        700: "#553F02",
        800: "#3D2A01",
        900: "#251400",
      },
    },
    extend: {
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./node_modules/flowbite/**/*.js"
//   ],
//   theme: {
//     fontFamily: {
//       inter: ["Inter", "sans-serif"],
//       "edu-sa": ["Edu SA Beginner", "cursive"],
//       mono: ["Roboto Mono", "monospace"],
//     },
//     colors: {
//       customBeige: "#EAD8B1",
//       customLightBlue: "#6A9AB0",
//       customBlue: "#3A6D8C",
//       customDarkBlue: "#001F3F",
//       white: "#fff",
//       black: "#000",
//       transparent: "#ffffff00",
//       darkGray: "#696969",
//       lightBlack: "#4A4947",
//       richblack: {
//         5: "#F1F2FF",
//         25: "#DBDDEA",
//         50: "#C5C7D4",
//         100: "#AFB2BF",
//         200: "#999DAA",
//         300: "#838894",
//         400: "#6E727F",
//         500: "#585D69",
//         600: "#424854",
//         700: "#2C333F",
//         800: "#161D29",
//         900: "#000814",
//       },
//       pink: {
//         5: "#FFF1F1",
//         25: "#FBC7D1",
//         50: "#F79CB0",
//         100: "#F37290",
//         200: "#EF476F",
//         300: "#D43D63",
//         400: "#BA3356",
//         500: "#9F294A",
//         600: "#841E3E",
//         700: "#691432",
//         800: "#4F0A25",
//         900: "#340019",
//       },
//     },
//     extend: {
//       maxWidth: {
//         maxContent: "1260px",
//         maxContentTab: "650px",
//       },
//       // Custom badge classes
//       components: {
//         '.badge': {
//           '@apply text-sm font-semibold text-gray-500': {},
//         },
//         '.badge-outline': {
//           '@apply border border-gray-500 rounded-full': {},
//         }
//       }
//     },
//   },
//   plugins: [
//     require('flowbite/plugin')
//   ],
// }
