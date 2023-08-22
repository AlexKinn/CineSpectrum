import React from 'react';
import { useLocation } from 'react-router-dom';
import classes from './MoviePage.module.scss';

function MoviePage() {

    let { state } = useLocation();


    return(
        <div className={classes.movie}>
            <div className={classes.movie__infoBar}>
                <p className={classes.movie__infoBar__episodeGuide}>Episode Guide </p>
                <p className={classes.movie__infoBar__castAndCrew}></p>
                <p className={classes.movie__infoBar__userReviews}></p>
                <p className={classes.movie__infoBar__trivia}></p>
                <p className={classes.movie__infoBar__imdbPro}></p>
                <p className={classes.movie__infoBar__userReviews}></p>
            </div>
            <div className={classes.movie__poster}>
                <img src={state.posterPath}/>
            </div>
            <h1>{state.name}</h1>
        </div>
    )
}  

export default MoviePage;