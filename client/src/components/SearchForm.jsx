import React, { useContext, useState } from 'react';
import AllBreweries from './AllBreweries';

const SearchForm = () => {
  const [breweries, setBreweries] = useState([]);
  const [search, setSearch] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/api/brewskis?search=${search}`)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setBreweries(res);
      });
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(event) => setSearch(event.target.value)} />
      <button type="submit">Submit</button>
    </form>
    <AllBreweries data={breweries} />
    </>
  );
};

export default SearchForm;
