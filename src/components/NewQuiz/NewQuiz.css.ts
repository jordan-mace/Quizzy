import { style } from "@vanilla-extract/css";
import { themeContract } from "../../global.css.ts";


export const newQuizContainer = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    gap: "1rem",
});

export const newQuizForm = style({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "600px",
    padding: "1rem",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: `0 2px 4px ${themeContract.border}`,
});

export const newQuizInput = style({
    marginBottom: "1rem",
    padding: "0.5rem",
    borderRadius: "4px",
    border: `1px solid ${themeContract.border}`,
    fontSize: "1rem",
    width: "100%",
});

export const newQuizButton = style({
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    backgroundColor: themeContract.primary,
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
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

export const quizQuestion = style({
    marginBottom: "1rem",
    padding: "0.5rem",
    borderRadius: "4px",
    border: `1px solid ${themeContract.border}`,
    fontSize: "1rem",
    width: "100%",
});


export const newQuizTitle = style({
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: themeContract.text,
});

export const newQuizDescription = style({
    fontSize: "1rem",
    color: themeContract.text,
    marginBottom: "1rem",
});