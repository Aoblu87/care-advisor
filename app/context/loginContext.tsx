"use client";
import { ReactNode, createContext, useEffect, useState } from "react";

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
