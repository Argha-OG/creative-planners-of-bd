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
          primary: "#2563eb",
          secondary: "#7c3aed",
          accent: "#10b981",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "base-content": "#1f2937",
        },
      },
      {
        dark: {
          primary: "#38bdf8",
          secondary: "#a78bfa",
          accent: "#34d399",
          neutral: "#1e293b",
          "base-100": "#0f172a",
          "base-content": "#f8fafc",
        },
      },
    ],
  },
};
