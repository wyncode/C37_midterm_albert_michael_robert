import React from 'react';
import { AppContextProvider } from './context/AppContext';
import './assets/styles/styles.css';
import './App.css';
import IntroInfo from './components/IntroInfo';
import SearchForm from './components/SearchForm';
import Nbar from './components/Nbar';
import Footer from './components/Footer';
import ContactDiv from './components/ContactDiv';

const App = () => {
  return (
    <AppContextProvider>
      <Nbar />
      <IntroInfo />
      <SearchForm />
      <ContactDiv />
      <Footer />
    </AppContextProvider>
  );
};

export default App;
