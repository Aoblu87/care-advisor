"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("ligth");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}
