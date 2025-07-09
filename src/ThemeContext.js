// src/ThemeContext.js
import { createContext, useMemo, useState, useEffect } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

export const ThemeContext = createContext();

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: {
              default: "#ffffff",
              paper: "#f9f9f9",
            },
            text: {
              primary: "#000000",
            },
          }
        : {
            background: {
              default: "#121212",
              paper: "#1e1e1e",
            },
            text: {
              primary: "#ffffff",
            },
          }),
    },
    typography: {
      allVariants: {
        color: mode === "light" ? "#000000" : "#ffffff",
      },
    },
  });

export default function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    document.body.style.backgroundColor =
      mode === "dark" ? "#121212" : "#ffffff";
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        {/* Applies default text and background colors globally */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
