import React from 'react';
import { AppContextProvider } from './context/AppContext';
import './assets/styles/styles.css';
import './App.css';
import IntroInfo from './components/IntroInfo';
import SearchForm from './components/SearchForm';
import Nbar from './components/Nbar';
import Footer from './components/Footer';
import ContactDiv from './components/ContactDiv';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import AllBreweries from './components/AllBreweries';
import IdBrewery from './components/IdBrewery';
// import About from './components/About';

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Nbar />
        <IntroInfo />
        <Route exact path="/" component={SearchForm} />
        <Route path="/brewskis/:id" component={IdBrewery} />
        {/* <Route exact path="/about" component={About} /> */}
        <ContactDiv />
        <Footer />
      </Router>
    </AppContextProvider>
  );
};

export default App;
