import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [search, setSearch] = useState('');

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
