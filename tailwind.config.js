module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/src/images/grey.png')",
      },
      gridTemplateRows: {
        11: "repeat(11, 10vw)",
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
      },

      colors: {
        color1: "rgba(12, 19, 27, 0.8);",
        desktopcolor: "#0C131B",
        desktopcolor2: "#070A0F",
        desktopcolor3: "#070987",
        bgcolor4: "#010413",
        color2: "#29FFCA",
        color3: "#003A9C",
        skillsgradient: "linear-gradient(180deg, #29FFCA 0%, #003A9C 100%);",
        workgradient: "linear-gradient(137.82deg, #29FFCA 0%, #003A9C 98.39%)",
        navbargradient: "linear-gradient(90deg, #29FFCA 0%, #003A9C 100% )",
      },

      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
      },
    },
  },
  plugins: [],
};
