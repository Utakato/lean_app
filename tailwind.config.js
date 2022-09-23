module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        // theme
        primary: "#80ED99",
        secondary: "#67C29B",

        // neturals
        error: "#C62D2D",
        warning: "#FBBA25",
        success: "#2DC653",
        black: "#001204",
        white: "#FAFFFB",
        textSecondary: "#4F4F4F",
      },
    },
    boxShadow: {
      basic: "0px 2px 4px 0px rgba(48,49,51,0.4)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
