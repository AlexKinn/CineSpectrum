import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './ShowPage.module.scss';
import axios from 'axios';
import { ShowInterface } from '../interfaces/ShowInterface';
import { TheMovieDBConfiguration } from '../TheMovieDBConfiguration';
import StarIcon from '@mui/icons-material/Star';

function ShowPage() {
    const location = useLocation();
    const showID = location.state?.mediaID; 
    const [show, setShow] = useState<ShowInterface>();

    useEffect(() => {
        if(show?.name) {
            document.title = show.name + ` (${show.first_air_date.split('-', 1)[0]})`;
        }
    }, [show]);

    useEffect(() => {
        const abortController = new AbortController();
        const API_URL = process.env.REACT_APP_API_URL + "/tv/" + showID;
        console.log("Fetching show with id " + showID);
        axios.get(API_URL, {
            signal: abortController.signal
        }).then((response) => {
            setShow(response.data);
            console.log(show);
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
        return () => abortController.abort(); 
    }, []);

        // Size can be changed as per provided sizes in TheShowDBConfiguration
        const imageBasePath = TheMovieDBConfiguration.images.secure_base_url;
        const backdropWidth = 'original';
        const posterWidth = 'w780';

    return(
        <div className={classes.show}>
            {show && 
            <>
                <div className={classes.show__top}>
                    <div className={classes.show__top__infoBar}>
                        {/* <p className={classes.show__top__infoBar__episodeGuide}>Episode Guide </p> */}
                        <p className={classes.show__top__infoBar__castAndCrew}></p>
                        <p className={classes.show__top__infoBar__userReviews}></p>
                        <p className={classes.show__top__infoBar__trivia}></p>
                        <p className={classes.show__top__infoBar__imdbPro}></p>
                        <p className={classes.show__top__infoBar__userReviews}></p>
                    </div>
                    <div className={classes.show__top__backdropContainer}>
                        <img src={ imageBasePath+backdropWidth + show.backdrop_path }/>
                        <div className={classes.show__top__backdropContainer__bottomShadow}></div>
                        <div className={classes.show__top__backdropContainer__leftShadow}></div>
                        <div className={classes.show__top__backdropContainer__rightShadow}></div>
                        <div className={classes.show__top__backdropContainer__info}>
                            <p className={classes.show__top__backdropContainer__info__title}>
                                { show.name }
                            </p>
                            <p className={classes.show__top__backdropContainer__info__tagline}>
                                { show.tagline }
                            </p>
                            <div>
                                <p>{ show.first_air_date.split('-', 1)[0] }</p>
                                <p>{ show.number_of_seasons + " seasons" }</p>
                            </div>
                            <div className={classes.show__top__backdropContainer__info__rating}>
                                <StarIcon className={classes.show__top__backdropContainer__info__rating__starIcon} />
                                <p>{ show.vote_average.toFixed(1) }</p>
                                <p className={classes.show__top__backdropContainer__info__voteCount}>
                                    { " - " + show.vote_count + " User Votes" }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.show__bottom}>
                    <div className={classes.show__bottom__content}>
                        <img className={classes.show__bottom__content__poster}
                        src={ imageBasePath+posterWidth + show.poster_path }/>
                        <div className={classes.show__bottom__content__text}>
                            <div className={classes.show__bottom__content__text__overview}>
                                <p>{ show.overview }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }
            {/* <h1>{show.name}</h1> */}
        </div>
    )
}  

export default ShowPage;