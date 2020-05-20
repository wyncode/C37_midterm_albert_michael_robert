import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import Container from 'react-bootstrap/Container'

const IdBrewery = () => {
  // const { id } = props.match.params
//   const id = props.match.brewery;
    const [apiData, setApiData] = useState({});

    const { id } = useParams();

  const fetchIdBrewery = () => {    
    fetch(`/api/${id}`)
    .then(res => res.json())
    .then(data => setApiData(data))
    .catch(error => console.log(error.message))
  // const phone = () => {
  //   return apiData.phone.split("")[0];
  }

  useEffect(() => {
    fetchIdBrewery()
  },[]);

  console.log(apiData)
  return (
    // <Container>
    <div id="idBrew">
        <h1>{apiData.name}</h1>
        <h3>{apiData.location && apiData.location.address1}</h3>
        <h3>{apiData.location && apiData.location.city}, {apiData.location && apiData.location.state}  {apiData.location && apiData.location.zip_code}</h3>
        <h3>{apiData.phone ? apiData.phone : "No Phone available" }</h3>
        <h3><a href={apiData.url} target="_blank">Website</a></h3>
    </div>  
    // </Container>
  )
};

export default IdBrewery;
