/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      theme: {
        extend: {
          animation: {
            gradient: "gradientBG 15s ease infinite",
          },
          keyframes: {
            gradientBG: {
              "0%": { backgroundPosition: "0% 50%" },
              "50%": { backgroundPosition: "100% 50%" },
              "100%": { backgroundPosition: "0% 50%" },
            },
          },
        },
      },
    },
  },
  plugins: [],
};
