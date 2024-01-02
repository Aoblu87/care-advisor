"use client";
// import { createContext, useState } from "react";

// export const ThemeContext = createContext({});

// export default function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <div className={theme}>{children}</div>
//     </ThemeContext.Provider>
//   );
// }
import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light", // valore iniziale
  setTheme: (theme) => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("light");

  // Gestione del cambio del tema e sincronizzazione con localStorage
  useEffect(() => {
    const savedTheme =
      typeof window !== "undefined"
        ? localStorage.getItem("theme") || "light"
        : "light";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
