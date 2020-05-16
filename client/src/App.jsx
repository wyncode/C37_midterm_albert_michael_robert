import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';

import './App.css';
import Brewskis from './components/Brewskis';
import Nbar from './components/Nbar';
const App = () => {
  return (
    <AppContextProvider>
      <Nbar />
      <Brewskis />
    </AppContextProvider>
  );
};

export default App;
