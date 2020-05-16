import React from 'react';
import { AppContextProvider } from './context/AppContext';

import './App.css';
import Brewskis from './components/Brewskis';
import Nbar from './components/Nbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <AppContextProvider>
      <Nbar />
      <Brewskis />
      <Footer />
    </AppContextProvider>
  );
};

export default App;
