/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' based on your preference
  theme: {
    extend: {
      colors: {
        primary: "#F7D749", // Light mode primary color
        secondary: "#F0425D", // Light mode secondary color
        // Define other light mode colors as needed
      },
      // Define dark mode colors within the same structure
      dark: {
        background: "#121212", // A common dark background
        text: "#ffffff", // Ensuring high contrast text for dark mode
        primary: "#F7D749", // Primary remains the same or slightly adjusted for dark mode
        secondary: "#F0425D", // Secondary remains the same or slightly adjusted for dark mode
        // Add other dark mode colors as needed
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      // Define other font families as needed
    },
  },
  plugins: [],
};

