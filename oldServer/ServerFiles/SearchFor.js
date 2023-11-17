import axios from 'axios';



function searchForMedia(searchText) {

  const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/search/multi?query=${searchText}&include_adult=false&language=en-US&page=1`,
      headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`
      }
  };
  return axios
  .request(options)
  .then(function (response) {
    return response;
  })
  .catch(function (error) {
    console.error(error);
  });
};


module.exports = {
    searchForMedia
}