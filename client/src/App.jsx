import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';

import './App.css';
import Brewskis from './components/Brewskis';

const App = () => {

  
  return (
    <AppContextProvider>
      <Brewskis />
    </AppContextProvider>
  );
};

export default App;
