import React from 'react';
import classes from './ShowPage.module.scss';
import { useLocation } from 'react-router-dom';
import { TrendingMediaInterface } from '../interfaces/TrendingMediaInterface';

function ShowPage() {

    let { state } = useLocation();


    return(
        <div className={classes.show}>
            <div className={classes.show__infoBar}>
                <p className={classes.show__infoBar__episodeGuide}>Episode Guide </p>
                <p className={classes.show__infoBar__castAndCrew}></p>
                <p className={classes.show__infoBar__userReviews}></p>
                <p className={classes.show__infoBar__trivia}></p>
                <p className={classes.show__infoBar__imdbPro}></p>
                <p className={classes.show__infoBar__userReviews}></p>
            </div>
            <div className={classes.show__poster}>
                <img src={state.posterPath}/>
            </div>
            <h1>{state.name}</h1>
        </div>
    )
}  

export default ShowPage;