/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007B8A", // Teal
        accent: "#FFB100", // Gold
        dark: "#1A1A1A", // Black
      },
      gridTemplateColumns: {
        // Custom grid layout for different screen sizes
        3: "repeat(3, 1fr)",
        2: "repeat(2, 1fr)",
      },
      fontFamily: {
        toxigenesis: ["Toxigenesis", "sans-serif"],
        sans: ["Modern Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
