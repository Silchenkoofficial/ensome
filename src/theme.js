const COLORS = {
  primary: "#185CFF",
  primaryHover: "#467DFF",
  secondary: "#002B4E",
  blue1: "#194060",
  blue2: "#607D94",
  blue3: "#C9DCEC",
  tertiary: "#F0F9FF",
  black: "#292D33",
  grey: "#9497A1",
  background: "#F1F6FA",
  error: "#C14040",
  white: "#FFFFFF",
};

const FONTS = {
  H: {
    1: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: 46,
      lineHeight: "60px",
      fontWeight: 800,
    },
    2: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: 38,
      lineHeight: "56px",
      fontWeight: 800,
    },
    3: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: 30,
      lineHeight: "40px",
      fontWeight: 800,
    },
    4: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: 22,
      lineHeight: "33px",
      fontWeight: 700,
    },
    5: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: 20,
      lineHeight: "30px",
      fontWeight: 700,
    },
    6: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: 16,
      lineHeight: "24px",
      fontWeight: 700,
    },
    7: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: 14,
      lineHeight: "24px",
      fontWeight: 600,
    },
    8: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: 12,
      lineHeight: "24px",
      fontWeight: 600,
    },
  },
  P: {
    1: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: 20,
      lineHeight: "33px",
      fontWeight: 400,
    },
    "2-regular": {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: 16,
      lineHeight: "28px",
      fontWeight: 400,
    },
    "2-bold": {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: 16,
      lineHeight: "28px",
      fontWeight: 700,
    },
    "3-regular": {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: 14,
      lineHeight: "24px",
      fontWeight: 400,
    },
    "3-semibold": {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: 14,
      lineHeight: "24px",
      fontWeight: 600,
    },
  },
};

const SHADOWS = {
  button: "0px 12px 30px rgba(24, 92, 255, 0.18)",
  card1: "0px 2px 20px 17px rgba(24, 92, 255, 0.04)",
  card2: "0px 12px 30px 17px rgba(24, 92, 255, 0.04)",
  card3: "0px 4px 12px rgba(12, 68, 204, 0.1)",
  dropdown:
    "0px 2px 6px rgba(0, 43, 78, 0.15), 0px 1px 2px rgba(0, 43, 78, 0.3)",
};

const THEME = { COLORS, FONTS, SHADOWS };

export default THEME;
