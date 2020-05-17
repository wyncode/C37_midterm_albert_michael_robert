const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/api/brewskis', async (request, response) => {
  const { search } = request.query;
  const url = `https://api.openbrewerydb.org/breweries/search?query=${search}`;
  const { data } = await axios.get(url);
  const myArray = [];
  data.map((brewery) => {
    const myObject = {
      id: brewery.id,
      name: brewery.name,
      type: brewery.brewery_type,
      street: brewery.street,
      city: brewery.city,
      state: brewery.state,
      postal: brewery.postal_code,
      phone: brewery.phone,
      website: brewery.website_url
    };
    myArray.push(myObject);
  });
  response.json(myArray);
});

module.exports = router;
