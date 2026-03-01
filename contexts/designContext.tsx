import React, { createContext, useContext } from 'react';
import { DesignTokens } from '../constants/theme';

const DesignContext = createContext(DesignTokens);

export const useDesign = () => useContext(DesignContext);

export const DesignProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <DesignContext.Provider value={DesignTokens}>
      {children}
    </DesignContext.Provider>
  );
};
