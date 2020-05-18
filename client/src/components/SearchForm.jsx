import React, { useState } from 'react';
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
      <div className="forum-div">
        <form className="search-input" onSubmit={handleSubmit}>
          <input
            placeholder="Enter city..."
            type="text"
            onChange={(event) => setSearch(event.target.value)}
            className="form-control"
          />
          <button style={{ marginLeft: 'auto' }} className="button-search">
            Submit
          </button>
        </form>
      </div>
      <AllBreweries data={breweries} />
    </>
  );
};

export default SearchForm;
