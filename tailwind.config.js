/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f9fafa",
        primary: "#f7f9fd",
        secondary: "#1e2433",
        "accent-blue": "#446ba1",
        gray: {
          "100": "#11181c",
          "200": "rgba(0, 0, 0, 0.25)",
        },
        lavender: "#cfd9e6",
        white: "#fff",
        gainsboro: "rgba(217, 217, 217, 0)",
        deepskyblue: "rgba(3, 166, 218, 0.22)",
      },
      spacing: {},
      fontFamily: {
        "gilroy-medium": "Gilroy-Medium",
        "gilroy-bold": "Gilroy-Bold",
        "dm-sans": "'DM Sans'",
        "gilroy-semibold": "Gilroy-SemiBold",
        montserrat: "Montserrat",
      },
      borderRadius: {
        xl: "20px",
        "21xl": "40px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "13xl": "32px",
      "11xl": "30px",
      "80xl": "99px",
      lg: "18px",
      mini: "15px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
