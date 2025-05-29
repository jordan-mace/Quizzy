
import { style } from "@vanilla-extract/css";
import { themeContract } from "../../global.css.ts";

export const myQuizzesContainer = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    gap: "1rem",
});

export const myQuizzesList = style({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "800px",
    listStyle: "none",
    padding: "1rem",
    borderRadius: "8px",
    backgroundColor: themeContract.surfaceHover,
    boxShadow: `0 2px 4px ${themeContract.border}`,
});