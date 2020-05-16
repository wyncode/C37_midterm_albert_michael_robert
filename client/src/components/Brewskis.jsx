import React, { useState } from 'react';

const Brewskis = () => {
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
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(event) => setSearch(event.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Brewskis;
