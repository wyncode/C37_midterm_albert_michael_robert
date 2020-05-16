import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';

import './App.css';
import SearchForm from './components/SearchForm';
import Nbar from './components/Nbar';
import AllBreweries from './components/AllBreweries';

const App = () => {
  return (
    <AppContextProvider>
      <Nbar />
      <SearchForm />
      <AllBreweries />
    </AppContextProvider>
  );
};

export default App;
