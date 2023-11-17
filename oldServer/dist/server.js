"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
/* RUN COMMAND IN DEVELOPMENT:
node -r dotenv/config server.js
*/

var http = require('http');
var express = require("express");
var app = express();
var cors = require('cors');

// const hostname = '127.0.0.1';
var port = process.env.PORT || 8080;
var FetchData = require('./FetchData');
// const QueryBD = require('./QueryDB');

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

// app.use(cors(corsOptions));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/trendingMedia', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // console.log("Fetching trending media...");
          // FetchData.getTrendingMedia()
          // .then((data) => {
          //     res.json(data);
          // })
          // .catch(error => console.error(error));
          console.log("Sending data...");
          res.json(data.results);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.get('/trendingMovies', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          console.log("Sending mock data...");
          res.json(data.results);
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
app.get('/', function (req, res) {
  res.send('Greetings');
});

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     // res.end('Hello World\n')
//     res.end();
// });

app.listen(port, function () {
  console.log("Server listening at PORT: ".concat(port));
});
var data = {
  "page": 1,
  "results": [{
    "adult": false,
    "backdrop_path": "/na442LUrWkQMxSmrQUPtaw3T3nn.jpg",
    "id": 615656,
    "title": "Meg 2: The Trench",
    "original_language": "en",
    "original_title": "Meg 2: The Trench",
    "overview": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
    "poster_path": "/FQHtuf2zc8suMFE28RyvFt3FJN.jpg",
    "media_type": "movie",
    "genre_ids": [28, 878, 27],
    "popularity": 2319.709,
    "release_date": "2023-08-02",
    "video": false,
    "vote_average": 6.949,
    "vote_count": 810
  }, {
    "adult": false,
    "backdrop_path": "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
    "id": 976573,
    "title": "Elemental",
    "original_language": "en",
    "original_title": "Elemental",
    "overview": "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
    "poster_path": "/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
    "media_type": "movie",
    "genre_ids": [16, 35, 10751, 14, 10749],
    "popularity": 3167.104,
    "release_date": "2023-06-14",
    "video": false,
    "vote_average": 7.791,
    "vote_count": 1495
  }, {
    "adult": false,
    "backdrop_path": "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    "id": 569094,
    "title": "Spider-Man: Across the Spider-Verse",
    "original_language": "en",
    "original_title": "Spider-Man: Across the Spider-Verse",
    "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    "media_type": "movie",
    "genre_ids": [16, 28, 12],
    "popularity": 2044.25,
    "release_date": "2023-05-31",
    "video": false,
    "vote_average": 8.45,
    "vote_count": 3806
  }, {
    "adult": false,
    "backdrop_path": "/loDy1LWCkPjECjVTRmyKtOoUpNN.jpg",
    "id": 114461,
    "name": "Ahsoka",
    "original_language": "en",
    "original_name": "Ahsoka",
    "overview": "Former Jedi Knight Ahsoka Tano investigates an emerging threat to a vulnerable galaxy.",
    "poster_path": "/laCJxobHoPVaLQTKxc14Y2zV64J.jpg",
    "media_type": "tv",
    "genre_ids": [10765, 10759],
    "popularity": 772.911,
    "first_air_date": "2023-08-22",
    "vote_average": 8.3,
    "vote_count": 85,
    "origin_country": ["US"]
  }, {
    "adult": false,
    "backdrop_path": "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
    "id": 872585,
    "title": "Oppenheimer",
    "original_language": "en",
    "original_title": "Oppenheimer",
    "overview": "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
    "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    "media_type": "movie",
    "genre_ids": [18, 36],
    "popularity": 721.421,
    "release_date": "2023-07-19",
    "video": false,
    "vote_average": 8.276,
    "vote_count": 2566
  }, {
    "adult": false,
    "backdrop_path": "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
    "id": 346698,
    "title": "Barbie",
    "original_language": "en",
    "original_title": "Barbie",
    "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    "media_type": "movie",
    "genre_ids": [35, 12, 14],
    "popularity": 1659.364,
    "release_date": "2023-07-19",
    "video": false,
    "vote_average": 7.4,
    "vote_count": 3430
  }, {
    "adult": false,
    "backdrop_path": "/sC8YOcp8tOQ5s9RgGsZnLDGTZSa.jpg",
    "id": 724209,
    "title": "Heart of Stone",
    "original_language": "en",
    "original_title": "Heart of Stone",
    "overview": "An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing its most valuable — and dangerous — weapon.",
    "poster_path": "/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg",
    "media_type": "movie",
    "genre_ids": [53, 28],
    "popularity": 2650.154,
    "release_date": "2023-08-09",
    "video": false,
    "vote_average": 6.945,
    "vote_count": 821
  }, {
    "adult": false,
    "backdrop_path": "/rRcNmiH55Tz0ugUsDUGmj8Bsa4V.jpg",
    "id": 884605,
    "title": "No Hard Feelings",
    "original_language": "en",
    "original_title": "No Hard Feelings",
    "overview": "On the brink of losing her childhood home, Maddie discovers an intriguing job listing: wealthy helicopter parents looking for someone to “date” their introverted 19-year-old son, Percy, before he leaves for college. To her surprise, Maddie soon discovers the awkward Percy is no sure thing.",
    "poster_path": "/gD72DhJ7NbfxvtxGiAzLaa0xaoj.jpg",
    "media_type": "movie",
    "genre_ids": [35, 10749],
    "popularity": 1236.409,
    "release_date": "2023-06-15",
    "video": false,
    "vote_average": 7.132,
    "vote_count": 938
  }, {
    "adult": false,
    "backdrop_path": "/H6j5smdpRqP9a8UnhWp6zfl0SC.jpg",
    "id": 565770,
    "title": "Blue Beetle",
    "original_language": "en",
    "original_title": "Blue Beetle",
    "overview": "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
    "poster_path": "/lZ2sOCMCcGaPppaXj0Wiv0S7A08.jpg",
    "media_type": "movie",
    "genre_ids": [28, 878, 12],
    "popularity": 460.884,
    "release_date": "2023-08-16",
    "video": false,
    "vote_average": 6.941,
    "vote_count": 261
  }, {
    "adult": false,
    "backdrop_path": "/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
    "id": 298618,
    "title": "The Flash",
    "original_language": "en",
    "original_title": "The Flash",
    "overview": "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    "poster_path": "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    "media_type": "movie",
    "genre_ids": [28, 12, 878],
    "popularity": 1554.403,
    "release_date": "2023-06-13",
    "video": false,
    "vote_average": 6.951,
    "vote_count": 2550
  }, {
    "adult": false,
    "backdrop_path": "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    "id": 447365,
    "title": "Guardians of the Galaxy Vol. 3",
    "original_language": "en",
    "original_title": "Guardians of the Galaxy Vol. 3",
    "overview": "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    "poster_path": "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    "media_type": "movie",
    "genre_ids": [878, 12, 28],
    "popularity": 797.597,
    "release_date": "2023-05-03",
    "video": false,
    "vote_average": 8.037,
    "vote_count": 4527
  }, {
    "adult": false,
    "backdrop_path": "/jDjmnEuNUfWHg8rbW6u8mylkcO0.jpg",
    "id": 832502,
    "title": "The Monkey King",
    "original_language": "en",
    "original_title": "The Monkey King",
    "overview": "A stick-wielding monkey teams with a young girl on an epic quest for immortality, battling demons, dragons, gods — and his own ego — along the way.",
    "poster_path": "/i6ye8ueFhVE5pXatgyRrZ83LBD8.jpg",
    "media_type": "movie",
    "genre_ids": [16, 14, 12, 10751, 35],
    "popularity": 548.12,
    "release_date": "2023-08-11",
    "video": false,
    "vote_average": 6.8,
    "vote_count": 78
  }, {
    "adult": false,
    "backdrop_path": "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
    "id": 385687,
    "title": "Fast X",
    "original_language": "en",
    "original_title": "Fast X",
    "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    "media_type": "movie",
    "genre_ids": [28, 80, 53],
    "popularity": 1191.399,
    "release_date": "2023-05-17",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 3498
  }, {
    "adult": false,
    "backdrop_path": "/a6ptrTUH1c5OdWanjyYtAkOuYD0.jpg",
    "id": 37854,
    "name": "One Piece",
    "original_language": "ja",
    "original_name": "ワンピース",
    "overview": "Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous \"One Piece\" behind. Whoever claims the \"One Piece\" will be named the new King of the Pirates.\n\nMonkey D. Luffy, a boy who consumed a \"Devil Fruit,\" decides to follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and that he's surrounded by a bevy of skilled fighters and thieves to help him along the way.\n\nLuffy will do anything to get the One Piece and become King of the Pirates!",
    "poster_path": "/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg",
    "media_type": "tv",
    "genre_ids": [10759, 35, 16],
    "popularity": 260.446,
    "first_air_date": "1999-10-20",
    "vote_average": 8.724,
    "vote_count": 3939,
    "origin_country": ["JP"]
  }, {
    "adult": false,
    "backdrop_path": "/f7UI3dYpr7ZUHGo0iIr1Qvy1VPe.jpg",
    "id": 1040148,
    "title": "Ruby Gillman, Teenage Kraken",
    "original_language": "en",
    "original_title": "Ruby Gillman, Teenage Kraken",
    "overview": "Ruby Gillman, a sweet and awkward high school student, discovers she's a direct descendant of the warrior kraken queens. The kraken are sworn to protect the oceans of the world against the vain, power-hungry mermaids. Destined to inherit the throne from her commanding grandmother, Ruby must use her newfound powers to protect those she loves most.",
    "poster_path": "/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg",
    "media_type": "movie",
    "genre_ids": [16, 10751, 14, 35],
    "popularity": 645.839,
    "release_date": "2023-06-28",
    "video": false,
    "vote_average": 7.576,
    "vote_count": 584
  }, {
    "adult": false,
    "backdrop_path": "/fPun1QHWz3W1iHtsSfEGIs4Qvlv.jpg",
    "id": 869641,
    "title": "Vacation Friends 2",
    "original_language": "en",
    "original_title": "Vacation Friends 2",
    "overview": "Newly married couple Marcus and Emily invite their uninhibited besties Ron and Kyla to join them for a vacation when Marcus lands an all-expenses-paid trip to a Caribbean resort. When Kyla’s incarcerated father Reese is released and shows up at the resort unannounced, things get out of control, upending Marcus’ best laid plans and turning the vacation friends’ perfect trip into total chaos.",
    "poster_path": "/wmH3VaUbwwTO3vDJhWT35BOFgb3.jpg",
    "media_type": "movie",
    "genre_ids": [35],
    "popularity": 90.355,
    "release_date": "2023-08-25",
    "video": false,
    "vote_average": 6.9,
    "vote_count": 34
  }, {
    "adult": false,
    "backdrop_path": "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
    "id": 667538,
    "title": "Transformers: Rise of the Beasts",
    "original_language": "en",
    "original_title": "Transformers: Rise of the Beasts",
    "overview": "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
    "poster_path": "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    "media_type": "movie",
    "genre_ids": [28, 12, 878],
    "popularity": 1646.07,
    "release_date": "2023-06-06",
    "video": false,
    "vote_average": 7.493,
    "vote_count": 2961
  }, {
    "adult": false,
    "backdrop_path": "/csz3oWxd04wgXUzenXgenIVwXGl.jpg",
    "id": 930094,
    "title": "Red, White & Royal Blue",
    "original_language": "en",
    "original_title": "Red, White & Royal Blue",
    "overview": "After an altercation between Alex, the president's son, and Britain's Prince Henry at a royal event becomes tabloid fodder, their long-running feud now threatens to drive a wedge in U.S./British relations. When the rivals are forced into a staged truce, their icy relationship begins to thaw and the friction between them sparks something deeper than they ever expected.",
    "poster_path": "/vM1HzW1zA8QQ5Cw9g2tWdAxlbOQ.jpg",
    "media_type": "movie",
    "genre_ids": [35, 10749],
    "popularity": 382.165,
    "release_date": "2023-07-27",
    "video": false,
    "vote_average": 8.296,
    "vote_count": 626
  }, {
    "adult": false,
    "backdrop_path": "/i2GVEvltEu3BXn5crBSxgKuTaca.jpg",
    "id": 614479,
    "title": "Insidious: The Red Door",
    "original_language": "en",
    "original_title": "Insidious: The Red Door",
    "overview": "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
    "poster_path": "/d07phJqCx6z5wILDYqkyraorDPi.jpg",
    "media_type": "movie",
    "genre_ids": [27, 9648, 53],
    "popularity": 989.245,
    "release_date": "2023-07-05",
    "video": false,
    "vote_average": 6.89,
    "vote_count": 978
  }, {
    "adult": false,
    "backdrop_path": "/fgw4rFs4XMWdJTWp1eMacHKQqbZ.jpg",
    "id": 603692,
    "title": "John Wick: Chapter 4",
    "original_language": "en",
    "original_title": "John Wick: Chapter 4",
    "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    "media_type": "movie",
    "genre_ids": [28, 53, 80],
    "popularity": 714.833,
    "release_date": "2023-03-22",
    "video": false,
    "vote_average": 7.823,
    "vote_count": 4282
  }],
  "total_pages": 1000,
  "total_results": 20000
};