import { style } from "@vanilla-extract/css";
import { themeContract } from "../../global.css.ts";

export const navbar = style({
    borderBottom: `1px solid ${themeContract.border}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: themeContract.surface,
});