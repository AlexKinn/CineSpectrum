import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './MoviePage.module.scss';
import axios from 'axios';
import { MovieInterface } from '../interfaces/MovieInterface';
import { TheMovieDBConfiguration } from '../TheMovieDBConfiguration';
import StarIcon from '@mui/icons-material/Star';

function MoviePage() {
    const location = useLocation();
    const movieID = location.state?.mediaID; 
    const [movie, setMovie] = useState<MovieInterface>();

    useEffect(() => {
        if(movie?.title) {
            document.title= movie.title + ` (${movie.release_date.split('-', 1)[0]}) - Cinespectrum`;
        }
    }, [movie]);

    useEffect(() => {
        const abortController = new AbortController();
        const API_URL = process.env.REACT_APP_API_URL + "/movie/" + movieID;
        axios.get(API_URL, {
            signal: abortController.signal
        }).then((response) => {
            setMovie(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
        return () => abortController.abort(); 
    }, []);

        // Size can be changed as per provided sizes in TheMovieDBConfiguration
        const imageBasePath = TheMovieDBConfiguration.images.secure_base_url;
        const backdropWidth = 'original';
        const posterWidth = 'w780';

    return(
        <div className={classes.movie}>
            {movie && 
            <>
                <div className={classes.movie__top}>
                    <div className={classes.movie__top__infoBar}>
                        {/* <p className={classes.movie__top__infoBar__episodeGuide}>Episode Guide </p> */}
                        <p className={classes.movie__top__infoBar__castAndCrew}></p>
                        <p className={classes.movie__top__infoBar__userReviews}></p>
                        <p className={classes.movie__top__infoBar__trivia}></p>
                        <p className={classes.movie__top__infoBar__imdbPro}></p>
                        <p className={classes.movie__top__infoBar__userReviews}></p>
                    </div>
                    <div className={classes.movie__top__backdropContainer}>
                        <img src={ imageBasePath+backdropWidth + movie.backdrop_path }/>
                        <div className={classes.movie__top__backdropContainer__bottomShadow}></div>
                        <div className={classes.movie__top__backdropContainer__leftShadow}></div>
                        <div className={classes.movie__top__backdropContainer__rightShadow}></div>
                        <div className={classes.movie__top__backdropContainer__info}>
                            <p className={classes.movie__top__backdropContainer__info__title}>
                                { movie.title }
                            </p>
                            <p className={classes.movie__top__backdropContainer__info__tagline}>
                                { movie.tagline }
                            </p>
                            <div>
                                <p>{ movie.release_date.split('-', 1)[0] }</p>
                                <p>{ Math.floor(movie.runtime / 60)+"h " + movie.runtime % 60+"m" }</p>
                            </div>
                            <div className={classes.movie__top__backdropContainer__info__rating}>
                                <StarIcon className={classes.movie__top__backdropContainer__info__rating__starIcon} />
                                <p>{ movie.vote_average.toFixed(1) }</p>
                                <p className={classes.movie__top__backdropContainer__info__voteCount}>
                                    { " - " + movie.vote_count + " User Votes" }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.movie__bottom}>
                    <div className={classes.movie__bottom__content}>
                        <img className={classes.movie__bottom__content__poster}
                        src={ imageBasePath+posterWidth + movie.poster_path }/>
                        <div className={classes.movie__bottom__content__text}>
                            <div className={classes.movie__bottom__content__text__overview}>
                                <p>{ movie.overview }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }
            {/* <h1>{movie.name}</h1> */}
        </div>
    )
}  

export default MoviePage;