import React from "react";
import { MovieWithRating } from "../interfaces/MovieWithRating";
import classes from "./MyListMovieCard.module.scss";
import { TheMovieDBConfiguration } from "../TheMovieDBConfiguration";

export function MyListMovieCard(Movie : MovieWithRating) {

    // Size can be changed as per provided sizes in TheMovieDBConfiguration
    const imageBasePath = TheMovieDBConfiguration.images.secure_base_url + 'original';

    return(
        <div className={classes.card}>
            <div>
                <p>1</p>
            </div>
            <div>
                <img src={imageBasePath + Movie.posterPath} />
            </div>
        </div>
    )
}

