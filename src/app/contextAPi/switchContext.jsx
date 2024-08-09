'use client'
import React, { createContext, useContext, useState } from 'react';

const SwitchContext = createContext();

export const SwitchProvider = ({ children }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <SwitchContext.Provider value={{ checked, handleChange }}>
      {children}
    </SwitchContext.Provider>
  );
};

export const useSwitch = () => {
  return useContext(SwitchContext);
};
