"use client";
import { ReactNode, createContext, useEffect, useState } from "react";

interface LoginContextType {
  login: boolean;
  setLogin: (login: boolean) => void;
}

export const LoginContext = createContext<LoginContextType>({
  login: false, // default value
  setLogin: (login) => {},
});

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [login, setLogin] = useState<boolean>(false);

  useEffect(() => {
    try {
      fetch("/api/users/me");
      setLogin(true);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("login", login.toString());
  // }, [login]);

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
