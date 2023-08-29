const axios = require('axios');

const url = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';
const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`
  }
};

function getTrendingMedia() {
  return axios.request(options).then(response => response.data)
  .catch(error => console.error(error));
};

module.exports = {
  getTrendingMedia
}

