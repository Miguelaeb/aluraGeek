/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
    },

    colors: {
      'primary-blue': '#2A7AE4',
      'seconday-gray': '#464646',
      'section-background': '#EAF2FD',
      'searchBar-background': '#F5F5F5',
  },
    },
  },
  plugins: [],
}