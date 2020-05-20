import React, { useState } from 'react';
import AllBreweries from './AllBreweries';

const SearchForm = () => {
  const [breweries, setBreweries] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null)
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/api/brewskis/${search}`)
      .then(response => response.json() )
      .then((res) => {
        console.log(res)
        setBreweries(res);
      })
      .catch(err => setError(err.message))
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
          <button style={{ marginLeft: 'auto' }} className="button-search" type='submit'>
            Submit
          </button>
        </form>
      </div>
      {error && (
        <div><p>{error}</p></div>
      )}
      <AllBreweries data={breweries} />
    </>
  );
};

export default SearchForm;
