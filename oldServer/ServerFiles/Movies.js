const axios = require('axios');


function getMovie(movieID) {
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        }
    };
    return axios.request(options).then(response => response)
    .catch(error => console.error(error));
}

module.exports = {
    getMovie
}


