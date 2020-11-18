module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      black: "#000",
      white: "#fff",

      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c"
      },
      red: {
        100: "#fff5f5",
        200: "#fed7d7",
        300: "#feb2b2",
        400: "#fc8181",
        500: "#f56565",
        600: "#e53e3e",
        700: "#c53030",
        800: "#9b2c2c",
        900: "#742a2a"
      },
      blue: {
        100: "#ebf8ff",
        200: "#bee3f8",
        300: "#90cdf4",
        400: "#63b3ed",
        500: "#4299e1",
        600: "#3182ce",
        700: "#2b6cb0",
        800: "#2c5282",
        900: "#2a4365"
      }
    },
    fontFamily: {
      title: ["Museo", "Helvetica", "sans-serif"],
      body: ["Helvetica", "Arial", "sans-serif"],
      mono: ["Consolas", "Andale Mono", "Monaco", "Courier New"]
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      "1/4-screen": "25vh",
      "1/2-screen": "50vh",
      "3/4-screen": "75vh",
      screen: "100vh"
    },
    extend: {
      keyframes: {
        slideAndFadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)"
          },
          "100%": {
            opacity: "1",
            transform: "none"
          }
        },
        slideAndFadeOut: {
          "0%": {
            opacity: "1",
            transform: "none"
          },
          "100%": {
            opacity: "0",
            transform: "translateY(30px)"
          }
        }
      },
      transitionProperty: {
        height: "height"
      },
      animation: {
        convoCard: "slideAndFadeIn 0.5s ease-out 1",
        "convoCard-hide": "slideAndFadeOut 0.5s ease-out 1"
      }
    }
  },
  variants: {
    display: ["responsive", "dark"],
    backgroundColor: ["responsive", "hover", "focus", "dark"],
    borderColor: ["responsive", "hover", "focus", "dark"],
    borderStyle: ["responsive", "hover"]
  },
  plugins: [
    require("tailwindcss-prefers-dark-mode")({
      type: "mediaQuery", // 'mediaQuery' or 'class'
      className: ".dark-mode", // Activator css class if type === 'class'
      prefix: "dark" // Class name prefix for naming dark variants
    })
  ]
};
