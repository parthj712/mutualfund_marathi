"use client";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: "inherit",
        h1: { fontFamily: "inherit" },
        h2: { fontFamily: "inherit" },
        h3: { fontFamily: "inherit" },
        h4: { fontFamily: "inherit" },
        h5: { fontFamily: "inherit" },
        h6: { fontFamily: "inherit" },
        body1: { fontFamily: "inherit" },
        body2: { fontFamily: "inherit" },
        button: { fontFamily: "inherit" },
    },
});

export default function ThemeRegistry({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
