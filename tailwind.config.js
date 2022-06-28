module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["system-ui", "Roboto", "sans-serif"],
      serif: ["Vollkorn", "Ramaraja", "Georgia", "serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: false,
    utils: false,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
