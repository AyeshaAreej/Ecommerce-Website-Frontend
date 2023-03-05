/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#07285D",
        hoverColor: "#203961",
        secondary: "#4FBFC0",
        textColor: "#A7A7A7",
      },
      fontFamily: {
        poppins: ["poppins"],
        Nunito: ["Nunito"],
      },
      backgroundImage: {
        // handShake: "url('/src/assets/GeStartedBackground.png')",
      },
      keyframes: {
        loading: {
          "0%": { left: "0px" },
          "50%": { left: "85%" },
          "100%": { left: "0%" },
        },
        progress: {
          "0%": {
            width: 0,
            opacity: 1,
          },
          "100%": {
            opacity: 1,
          },
        },
        marquee: {
          // "0%": { left: "0%" },
          // "100%": { right: "100%" },
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        loading: "loading 2s linear infinite",
        progress: "progress 2s ease-in-out forwards",
        marquee: "marquee 20s linear infinite ",
      },
    },
  },
  plugins: [],
};
