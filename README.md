# Website for browsing and and rating movies [CineSpectrum.net](https://cinespectrum.net/)


> ### All media data is fetched from [The Movie Database API](https://developer.themoviedb.org/reference/intro/getting-started)




### Both back-end and front-end are hosted on DigitalOcean as separate containers
> If running locally, requires a .env file in server directory with FRONTEND_URL and TMDB_API_KEY before running start:dev script. Also a .env.production in the app directory with a REACT_APP_API_URL variable, set to a base URL with no trailing slash, e.g. http://localhost:8080