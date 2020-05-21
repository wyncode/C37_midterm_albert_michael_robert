import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const IdBrewery = () => {
  // const [loader, setLoader] = useState(true)
  // const { id } = props.match.params
//   const id = props.match.brewery;
    const [apiData, setApiData] = useState({});

    const { id } = useParams();

  const fetchIdBrewery = () => {    
    fetch(`/api/${id}`)
    .then(res => res.json())
    .then(data => setApiData(data))
    .catch(error => console.log(error.message))
  
  // setLoader(false)
  } 

  

  useEffect(() => {
    fetchIdBrewery()
  },[]);

  // useEffect(() => {
  //  setLoader(!loader)
  // },[apiData]);

  return (
    
    <div id="layoutIdBrewery">
      {!apiData.name ? (
        <h1 className="loading">Loading...</h1>
      ) : (
      <>
      <div>
        <img id="idBrewImage" src={apiData.image_url}/>
      </div>
      <div id="idBrew">
          <h1>{apiData.name}</h1>
          <h3>{apiData.location && apiData.location.address1}</h3>
          <h3>{apiData.location && apiData.location.city}, {apiData.location && apiData.location.state}  {apiData.location && apiData.location.zip_code}</h3>
          <h3>{apiData.display_phone ? apiData.display_phone : "No Phone available" }</h3>
          <h3>Rating: {apiData.rating}/5</h3>
          <h3><a href={apiData.url} target="_blank">Website</a></h3>
      </div> 
      </> 
      )}
    </div>
  )
};

export default IdBrewery;
