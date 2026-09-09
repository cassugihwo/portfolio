/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        white0: "#ffffff",
        black0: "#08080a",
        pink0: "#ff6bb8",
        blue0: "#78aeff",
        purple0: "#af85ff",
      },
      fontFamily: {
        // Body/UI text (nav, buttons, paragraph copy)
        jakarta: [
          '"Plus Jakarta Sans"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        // Display headings and card titles
        grotesque: [
          '"Bricolage Grotesque"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        // Italic accent emphasis inside hero copy
        caslon: ['"Libre Caslon Text"', "ui-serif", "Georgia", "serif"],
        // Code-style accent emphasis inside hero copy
        code: ['"Fira Code"', "ui-monospace", "SFMono-Regular", "monospace"],
        // Tooltip text
        inter: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        body: ["1rem", { lineHeight: "normal", letterSpacing: "-0.5px" }],
        label: ["1.2rem", { lineHeight: "normal", letterSpacing: "-0.6px" }],
        // only for ButtonBig
        button: ["1rem", { lineHeight: "normal", letterSpacing: "0px" }],
        // only used by ProjectHighlightCard
        tag: ["1.125rem", { lineHeight: "normal", letterSpacing: "-0.9px" }],
        "display-sm": ["3rem", { lineHeight: "0.8", letterSpacing: "-1.5px" }],
        display: ["2.25rem", { lineHeight: "1.1", letterSpacing: "-1px" }],
        hero: ["6rem", { lineHeight: "0.882", letterSpacing: "-3px" }],
        heromd: ["4rem", { lineHeight: "0.882", letterSpacing: "-3px" }],
        herosm: ["3.25rem", { lineHeight: "0.882", letterSpacing: "-3px" }],
        heading: ["4.25rem", { lineHeight: "0.9", letterSpacing: "-1.2px" }],
      },
      keyframes: {
        caret: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        caret: "caret 1s step-end infinite",
      },
      borderRadius: {
        card: "40px",
        img: "5px",
      },
      spacing: {
        gutter: "62.5px",
        5: "5px",
        10: "10px",
        15: "15px",
        20: "20px",
        25: "25px",
        50: "50px",
        75: "75px",
        100: "100px",
        150: "150px",
        180: "180px",
        300: "300px",
      },
    },
  },
  plugins: [],
};