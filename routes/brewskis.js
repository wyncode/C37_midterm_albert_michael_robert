const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/api/brewskis/:location', async (request, response) => {
  const { location } = request.params;
  const locationSearch = location ? `&location=${location}` : ''
  const yelpUrl = `https://api.yelp.com/v3/businesses/search?categories=breweries${locationSearch}`
  const { data } = await axios.get(yelpUrl, { 
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`
  }})
  const myArray = [];
  data.businesses.map((brewery) => {
    const myObject = {
      id: brewery.id,
      name: brewery.name,
      image: brewery.image_url,
      street: `${brewery.location.address1}, ${brewery.location.address2}`,
      city: brewery.location.city,
      state: brewery.location.state,
      postal: brewery.location.zip_code,
      phone: brewery.display_phone,
      website: brewery.url
    };
    myArray.push(myObject);
  });
  response.send(myArray);
});

router.get('/api/:id', async (request, response) => {
  const { id } = request.params
  let { data } = await axios.get(`https://api.yelp.com/v3/businesses/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`
    }
  })
  response.send(data);
})


module.exports = router;
