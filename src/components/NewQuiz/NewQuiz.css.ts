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

export const newQuizOption = style({
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
    padding: "1rem",
    borderRadius: "4px",
    border: `1px solid ${themeContract.border}`,
    fontSize: "1rem",
});

export const quizTitleInput = style({
    marginBottom: "1rem",
    padding: "0.5rem",
    resize: 'none',
    borderRadius: "4px",
    border: `1px solid ${themeContract.border}`,
    fontSize: "1rem",
    maxWidth: '1280px',
    minWidth: '200px',
    '@media': {
        "(max-width: 600px)": {
            width: "100%",
        },
    }
});

export const newQuizInput = style({
    padding: "0.5rem",
    margin: "0.5rem auto",
    borderRadius: "4px",
    border: `1px solid ${themeContract.border}`,
    fontSize: "1rem",
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
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginBottom: "1rem",
    padding: "1rem",
    minWidth: "320px",
    borderRadius: "4px",
    border: `1px solid ${themeContract.border}`,
    fontSize: "1rem",
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