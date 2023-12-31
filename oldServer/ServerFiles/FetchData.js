const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`
  }
};

function getTrendingMedia() {
  return axios.request(options)
  .catch(error => console.error(error));
};

module.exports = {
  getTrendingMedia
}

