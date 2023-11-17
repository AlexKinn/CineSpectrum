"use strict";

var axios = require('axios');
var url = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';
var options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer ".concat(process.env.TMDBID_API_KEY)
  }
};

// const options2 = {
//   method: 'GET',
//   url: 'https://dog.ceo/api/breeds/list/all'
// };

function getTrendingMedia() {
  return axios.request(options).then(function (response) {
    return response.data;
  })["catch"](function (error) {
    return console.error(error);
  });
}
;
module.exports = {
  getTrendingMedia: getTrendingMedia
};