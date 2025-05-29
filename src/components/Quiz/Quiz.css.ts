import { style } from "@vanilla-extract/css";
import { themeContract } from "../../global.css.ts";

export const quiz = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: themeContract.background,
});

export const quizItem = style({
    width: "100%",
    maxWidth: "600px",
    marginBottom: "1rem",
    padding: "1rem",
    borderRadius: "8px",
    backgroundColor: themeContract.surfaceHover,
    boxShadow: `0 2px 4px ${themeContract.border}`,
});

export const quizButton = style({
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    backgroundColor: themeContract.primary,
    color: themeContract.primaryContrast,
    border: `1px solid ${themeContract.border}`,
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.2s",

    ":hover": {
        backgroundColor: themeContract.primaryHover,
        transform: "scale(1.05)",
    },

    ":active": {
        backgroundColor: themeContract.primaryActive,
        transform: "scale(0.95)",
    },
});

export const quizTitle = style({
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: themeContract.text,
});