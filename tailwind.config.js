/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent1: "var(--color-accent-1)",
        accent2: "var(--color-accent-2)",
        success: "var(--color-success)",
        error: "var(--color-error)",
      }
    },
  },
  plugins: [],
}
