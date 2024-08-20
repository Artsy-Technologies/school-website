/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          "absolute-white": "#fff",
          black: "#000",
          "grey-20": "#333",
          "grey-15": "#262626",
          orangered: "#fb6c1b",
          whitesmoke: {
            "100": "#f3f3f3",
            "200": "rgba(243, 243, 243, 0.97)",
          },
          blueviolet: "#7135f1",
          "grey-30": "#4c4c4d",
        },
        spacing: {},
        fontFamily: {
          outfit: "Outfit",
          raleway: "Raleway",
        },
        borderRadius: {
          "81xl": "100px",
        },
      },
      fontSize: {
        xl: "20px",
        base: "16px",
        "5xl": "24px",
        lgi: "19px",
        "39xl": "58px",
        "16xl": "35px",
        "27xl": "46px",
        "9xl": "28px",
        "3xl": "22px",
        inherit: "inherit",
      },
      screens: {
        mq925: {
          raw: "screen and (max-width: 925px)",
        },
        mq700: {
          raw: "screen and (max-width: 700px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
    },
    corePlugins: {
      preflight: false,
    },
  };