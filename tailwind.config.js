/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html"],
  purge: ["./**/*.html", "./**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
