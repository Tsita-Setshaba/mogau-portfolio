
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      colors: {
        bodyColor: "#212428",
        designColor: "#ff014f",
        lightText: "#c4cfde",
      },
      fontFamily: {
        titleFont: ["Poppins", "sans-serif"],
        bodyFont: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        shadowOne: "0px 4px 20px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};