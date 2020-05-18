import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container'

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

  const zip = apiData.postal_code

  useEffect(fetchIdBrewery, []);
  return (
    <Container>
        <h1>{apiData.name}</h1>
        <h2>{apiData.street}</h2>
        <h2>{apiData.city}, {apiData.state}  {zip}</h2>
        
    </Container>
  )
};

export default IdBrewery;
