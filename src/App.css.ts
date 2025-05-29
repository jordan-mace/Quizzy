import { keyframes, style } from "@vanilla-extract/css";

export const root = style({
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "2rem",
  textAlign: "center",
});

export const logo = style({
  height: "6em",
  padding: "1.5em",
  willChange: "filter",
  transition: "filter 300ms",
  selectors: {
    "&:hover": {
      filter: `drop-shadow(0 0 2em #646cffaa)`,
    },
  }
});

export const reactLogo = style({
  height: "6em",
  padding: "1.5em",
  willChange: "filter",
  transition: "filter 300ms",
  selectors: {
    "&:hover": {
      filter: "drop-shadow(0 0 2em #61dafbaa)",
    },
  }
});

export const logoSpinAnimation = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

export const logoSpin = style({
  "@media": {
    "(prefers-reduced-motion: no-preference)": {
      animation: `${logoSpinAnimation} infinite 20s linear`,
    },
  },
});

export const card = style({
  padding: "2em",
});

export const readTheDocs = style({
  color: "#888",
});