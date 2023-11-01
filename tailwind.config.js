/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      margin: {
        200: "200px",
        250: "250px",
        300: "300px",
      },
      padding: {
        200: "200px",
        250: "250px",
        300: "300px",
      },
    },
  },
  plugins: [],
};
