const http = require('http');
const express = require("express")
const app = express()

// const hostname = '127.0.0.1';
const port = 3200;


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});






app.get('/trendingMovies', (req, res) => {
    res.json(data);
});

app.get('/', (req, res) => {
    res.send('Greetings');
})


// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     // res.end('Hello World\n')
//     res.end();
// });

app.listen(port, () => {
    console.log(`Server listening at PORT: ${port}`);
});


const data = {
    
    // "movie1": 
    "results": [
        {
            // type: "show",
            "poster": "https://m.media-amazon.com/images/M/MV5BZmY0MDRhYTMtZGJlYS00NDJlLThkNTAtNWZjYjFjYjgyODAxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._CR400,64,3247,1827_QL75_UX1000_CR0,0,1000,563_.jpg",
            "image": "https://m.media-amazon.com/images/M/MV5BMDEwOWVlY2EtMWI0ZC00OWVmLWJmZGItYTk3YjYzN2Y0YmFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX280_CR0,0,280,414_.jpg",
            "mainText": "The Witcher",
            "secondaryText": "Watch the New Season 3 Trailer",
            "path": "the-witcher-2019"
        },
        // "movie2":
        {
            // type: "movie",
            "poster": "https://m.media-amazon.com/images/M/MV5BZTE3MmVjYjQtZGU2ZC00MjJjLWFmZjktZmQxMmM4MTc3YjBhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._CR467,28,3093,1740_QL75_UX1000_CR0,0,1000,563_.jpg",
            "image": "https://m.media-amazon.com/images/M/MV5BYzczMzllN2UtNDJmOS00MmE5LWE2MWYtNGEwODcwMDc2M2YyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UY414_CR8,0,280,414_.jpg",
            "mainText": '"One Piece"',
            "secondaryText": "The Legendary Manga Is Coming to Netflix",
            "path": "one-piece-2023"
        },
        // "movie3":
        {   
            // type: "movie",
            poster: "oppenheimerPoster.jpg",
            image: "oppenheimerIMG.jpg",
            mainText: "Meet the Cast of 'Oppenheimer'",
            secondaryText: "Cillian Murphy, RDJ & Others Share Their Experience",
            path: "oppenheimer-2023"
        }, 
        // "movie4":
        {
            // type: "movie",
            poster: "wonkaPoster.jpg",
            image: "wonkaIMG.jpg",
            mainText: "Timothée Chalamet Stars in 'Wonka'",
            secondaryText: "Watch the First Trailer",
            path: "wonka-2023"
        },
        // "movei5":
        {
            // type: "movie",
            poster: "https://m.media-amazon.com/images/M/MV5BYTc1YWU2NTgtNGI1Mi00N2I2LWE4ODUtZDY4MWJiZGE4NjE3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._CR278,399,3277,1843_QL75_UY281_CR0,0,500,281_.jpg",
            image: "blueBeetleIMG.jpg",
            mainText: "'Blue Beetle'",
            secondaryText: "Watch the Final Trailer",
            path: "blue-beetle-2023"
        },
        // "movie6":
        {
            // type: "movie",
            poster: "ahsokaPoster.jpg",
            image: "ahsokaIMG.jpg",
            mainText: "Ahsoka",
            secondaryText: "Watch the Trailer",
            path: "ahsoka-2023"
        }
    ]
};