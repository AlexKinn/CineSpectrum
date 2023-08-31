const http = require('http');
const express = require("express")
const app = express()
const cors = require('cors');

const port = process.env.PORT || 8080;

const FetchData = require('./FetchData');
const Movies = require('./Movies');

// const corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200
// }
// app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/trendingMedia', async (req, res) => {
    console.log("Fetching trending media...");
    FetchData.getTrendingMedia()
    .then((data) => {
        res.json(data.results);
    })
    .catch(error => console.error(error));
})

app.get('/movie/:movieID', (req, res) => {
    console.log("Fetching movie with ID: "+ req.params.movieID);
    Movies.getMovie(req.params.movieID)
    .then((data) => {
        res.json(data)
    })
    .catch(error => console.error(error));
})

app.get('/search/:searchText', (req, res) => {
   console.log("Searching for media with keyword: "+ req.params.searchText); 
});

app.get('/', (req, res) => {
    res.send('Greetings');
})

app.listen(port, () => {
    console.log(`Server listening at PORT: ${port}`);
});
