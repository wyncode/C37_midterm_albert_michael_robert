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
    axios.get(`/api/brewskis/${id}`)
    .then((res) => {
      console.log('id', id);
    setApiData(res.data);
      console.log(res.data);
      // set state here
    }).catch ((e) =>  {
        console.log(e)
    });
  };

  // const phone = () => {
  //   return apiData.phone.split("")[0];
  // }

  useEffect(fetchIdBrewery, []);
  return (
    // <Container>
    <div id="idBrew">
        <h1>{apiData.name}</h1>
        <h3>{apiData.street}</h3>
        <h3>{apiData.city}, {apiData.state}  {apiData.postal_code && apiData.postal_code.split("-")[0]}</h3>
        <h3>{apiData.phone ? apiData.phone : "No Phone available" }</h3>
        <h3><a href={apiData.website_url} target="_blank">Website</a></h3>
    </div>  
    // </Container>
  )
};

export default IdBrewery;
