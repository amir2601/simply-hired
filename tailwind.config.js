/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#7E90FE",

          "secondary": "#931210",

          "accent": "#e3bef7",

          "neutral": "#253341",

          "base-100": "#FFFFFF",

          "info": "#9CCFED",

          "success": "#76EACB",

          "warning": "#CA7A12",

          "error": "#F15560",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

