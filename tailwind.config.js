module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
