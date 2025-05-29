import { createTheme, createThemeContract, globalStyle } from "@vanilla-extract/css";

export const themeContract = createThemeContract({
    background: "#fcfdfe",
    text: "#162c64",
    primary: "#0f3cd2",
    primaryHover: "#0426bf",
    primaryActive: "#2757d9",
    primaryContrast: "#fff",
    secondary: "#b6d2ff",
    secondaryHover: "#cbdfff",
    secondaryActive: "#dceaff",
    secondaryContrast: "#162c64",
    border: "#dceaff",
    borderHover: "#cbdfff",
    borderActive: "#b6d2ff",
    borderContrast: "#162c64",
    surface: "#f4f8ffcc",
    surfaceHover: "#ebf2ff",
    surfaceActive: "#f6f9ff",
    surfaceContrast: "#162c64",
    indicator: "#0f3cd2",
    track: "#0f3cd2",
})

export const lightStyle = createTheme(themeContract, {
    background: "#fcfdfe",
    text: "#162c64",
    primary: "#0f3cd2",
    primaryHover: "#0426bf",
    primaryActive: "#2757d9",
    primaryContrast: "#fff",
    secondary: "#b6d2ff",
    secondaryHover: "#cbdfff",
    secondaryActive: "#dceaff",
    secondaryContrast: "#162c64",
    border: "#dceaff",
    borderHover: "#cbdfff",
    borderActive: "#b6d2ff",
    borderContrast: "#162c64",
    surface: "#f4f8ffcc",
    surfaceHover: "#ebf2ff",
    surfaceActive: "#f6f9ff",
    surfaceContrast: "#162c64",
    indicator: "#0f3cd2",
    track: "#0f3cd2",
})

export const darkStyle = createTheme(themeContract, {
    background: "#0c111c",
    text: "#93b4ff",
    primary: "#3d63dd",
    primaryHover: "#2b64ff",
    primaryActive: "#5783ff",
    primaryContrast: "#fff",
    secondary: "#93b4ff",
    secondaryHover: "#d5e2ff",
    secondaryActive: "#ffffff",
    secondaryContrast: "#0c111c",
    border: "#3d63dd",
    borderHover: "#2b64ff",
    borderActive: "#5783ff",
    borderContrast: "#0c111c",
    surface: "#111d3980",
    surfaceHover: "#17244880",
    surfaceActive: "#24397480",
    surfaceContrast: "#93b4ff",
    indicator: "#3d63dd",
    track: "#3d63dd",
})

export default themeContract

globalStyle("body", {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
    lineHeight: 1.5,
    color: themeContract.text,
    backgroundColor: themeContract.background,
    fontSize: "16px",
    textRendering: "optimizeLegibility",
});

globalStyle("a", {
    fontWeight: 500,
    color: themeContract.primary,
    textDecoration: "inherit"
})

globalStyle("a:hover", {
    textDecoration: "underline"
})

globalStyle("h1, h2, h3, h4, h5, h6", {
    margin: 0,
    padding: 0,
    fontWeight: 600,
    color: themeContract.text,
});

globalStyle("h1", {
    fontSize: "2em",
    marginBottom: "0.5em",
});

globalStyle("h2", {
    fontSize: "1.75em",
    marginBottom: "0.5em",
});

globalStyle("h3", {
    fontSize: "1.5em",
    marginBottom: "0.5em",
});

globalStyle("h4", {
    fontSize: "1.25em",
    marginBottom: "0.5em",
});

globalStyle("h5", {
    fontSize: "1em",
    marginBottom: "0.5em",
});

globalStyle("h6", {
    fontSize: "0.875em",
    marginBottom: "0.5em",
});

globalStyle("p", {
    margin: "0 0 1em",
});

globalStyle("ul, ol", {
    margin: "0 0 1em 1.5em",
    padding: 0,
});

globalStyle("li", {
    marginBottom: "0.5em",
});

globalStyle("blockquote", {
    margin: "0 0 1em",
    paddingLeft: "1em",
    borderLeft: `4px solid ${themeContract.primary}`,
    color: themeContract.text,
});

globalStyle("code", {
    fontFamily: "monospace",
    backgroundColor: themeContract.surface,
    padding: "0.2em 0.4em",
    borderRadius: "4px",
});

globalStyle("pre", {
    fontFamily: "monospace",
    backgroundColor: themeContract.surface,
    padding: "1em",
    borderRadius: "4px",
    overflowX: "auto",
});

globalStyle("img", {
    maxWidth: "100%",
    height: "auto",
});

globalStyle("button", {
    fontFamily: "inherit",
    fontSize: "inherit",
    color: themeContract.primaryContrast,
    backgroundColor: themeContract.primary,
    border: `1px solid ${themeContract.border}`,
    padding: "0.5em 1em",
    borderRadius: "24px",
    cursor: "pointer",
});

globalStyle("button:hover", {
    backgroundColor: themeContract.primaryHover,
});

globalStyle("button:active", {
    backgroundColor: themeContract.primaryActive,
});

globalStyle("input, textarea", {
    fontFamily: "inherit",
    fontSize: "inherit",
    color: themeContract.text,
    backgroundColor: themeContract.surface,
    border: `1px solid ${themeContract.border}`,
    padding: "0.5em",
    borderRadius: "4px",
});

globalStyle("input:focus, textarea:focus", {
    outline: "none",
    borderColor: themeContract.primary,
    boxShadow: `0 0 0 2px ${themeContract.primary}`,
});

globalStyle("select", {
    fontFamily: "inherit",
    fontSize: "inherit",
    color: themeContract.text,
    backgroundColor: themeContract.surface,
    border: `1px solid ${themeContract.border}`,
    padding: "0.5em",
    borderRadius: "4px",
});

globalStyle("select:focus", {
    outline: "none",
    borderColor: themeContract.primary,
    boxShadow: `0 0 0 2px ${themeContract.primary}`,
});

globalStyle("table", {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "1em",
});

globalStyle("th, td", {
    border: `1px solid ${themeContract.border}`,
    padding: "0.5em",
    textAlign: "left",
});

globalStyle("th", {
    backgroundColor: themeContract.primary,
    fontWeight: "bold",
});

globalStyle("tr:nth-child(even)", {
    backgroundColor: themeContract.surface,
});

globalStyle("tr:hover", {
    backgroundColor: themeContract.secondaryHover,
});

globalStyle("hr", {
    border: "none",
    borderTop: `1px solid ${themeContract.border}`,
    margin: "1em 0",
});

globalStyle("::selection", {
    backgroundColor: themeContract.primary,
    color: themeContract.primaryContrast,
});

globalStyle("::-webkit-scrollbar", {
    width: "8px",
    height: "8px",
});

globalStyle("::-webkit-scrollbar-thumb", {
    backgroundColor: themeContract.primary,
    borderRadius: "4px",
});
