/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'], // support both class and data-theme
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      
      {
        light: {
          primary: "#ef4444", // Red-500
          secondary: "#7c3aed",
          accent: "#10b981",
          neutral: "#3d4451",
          "base-100": "#ffffff", // White
          "base-content": "#000000", // Black text
        },
      },
      {
        dark: {
          primary: "#ef4444", // Red-500
          secondary: "#a78bfa",
          accent: "#34d399",
          neutral: "#1e293b",
          "base-100": "#000000", // Black
          "base-content": "#ffffff", // White text
        },
      },
    ],
  },
};
