"use client";
import { createContext, useContext, useState } from "react";

export const AppContext = createContext(null);
// a Hook for easy import of App Context
export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const appInfo = {
    search,
    setSearch,
  };

  return <AppContext.Provider value={appInfo}>{children}</AppContext.Provider>;
};
