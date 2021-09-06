module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    safelist: [
      "bg-hero-bg-mobile",
      "bg-ready-bg-mobile",
      "bg-hero-bg-tablet",
      "bg-ready-bg-tablet",
      "bg-hero-bg-desktop",
      "bg-ready-bg-desktop",
      "bg-reserve-bg-mobile",
      "bg-reserve-bg-mobile@2x",
      "bg-reserve-bg-tablet",
      "bg-reserve-bg-desktop",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        bigpic: "820px",
      },
      screens: {
        lmobile: "425px",
        desktop: "1440px",
      },
      borderRadius: {
        large: "5rem",
      },
      zIndex: {
        "-10": "-10",
      },
      spacing: {
        "01": "1px",
      },
      textColor: {
        "primary-beaver": "#9e7f66",
        "primary-black": "#111111",
        "secondary-black": "#17192b",
        "secondary-gray": "#242b37",
        "secondary-light-gray": "#5c6779",
      },
      fontFamily: {
        spartan: "spartan, sans-serif",
      },
      fontSize: {
        "body-md": "3rem",
        "45xl": "2.5rem",
      },
      backgroundColor: {
        "primary-beaver": "#9e7f66",
        "primary-black": "#111111",
        "secondary-black": "#17192b",
        "secondary-gray": "#242b37",
        "secondary-light-gray": "#5c6779",
      },
      backgroundImage: (theme) => ({
        "hero-bg-mobile": "url('./images/homepage/hero-bg-mobile.jpg')",
        "ready-bg-mobile": "url('./images/homepage/ready-bg-mobile.jpg')",
        "hero-bg-tablet": "url('./images/homepage/hero-bg-tablet.jpg')",
        "ready-bg-tablet": "url('./images/homepage/ready-bg-tablet.jpg')",
        "hero-bg-desktop": "url('./images/homepage/hero-bg-desktop.jpg')",
        "ready-bg-desktop": "url('./images/homepage/ready-bg-desktop.jpg')",

        "reserve-bg-mobile": "url('./images/booking/hero-bg-mobile.jpg')",
        // "reserve-bg-mobile@2x": "url('./images/booking/hero-bg-mobile@2x.jpg')",
        "reserve-bg-tablet": "url('./images/booking/hero-bg-tablet.jpg')",
        "reserve-bg-desktop": "url('./images/booking/hero-bg-desktop.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      borderWidth: ["active", "focus"],
      outline: ["active", "focus"],
    },
  },
  plugins: [],
};
