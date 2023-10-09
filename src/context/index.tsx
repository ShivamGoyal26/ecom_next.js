"use client";

import React, { createContext } from "react";

export const GlobalContext: any = createContext(null);

const GlobalState = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalContext.Provider value={{ auth: true }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
