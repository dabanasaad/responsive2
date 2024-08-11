/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./tailwind.css"],

  theme: {
    extend: {
      fontFamily: {
        body: ["Foldit", "sans-serif"],
        title: ["Lato", "sans-serif"],
      },
      colors: {
        pri: "#081F4D",
        sec: "#0083FF",
        gen: "#3B4D71",
        "our-bg": "#D9E6FF",
      },
    },
  },
  plugins: [],
};
