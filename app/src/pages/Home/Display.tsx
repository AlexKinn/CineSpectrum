import React from "react";
import classes from './Display.module.scss';
import { Card, CardContent, CardMedia, IconButton, Tooltip, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Add, PlayArrow } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { TrendingMediaInterface } from '../../interfaces/TrendingMediaInterface';
import { TheMovieDBConfiguration } from "../../TheMovieDBConfiguration";

function Display(trendingMedia: TrendingMediaInterface) {

    // Size can be changed as per provided sizes in TheMovieDBConfiguration
    const imageBasePath = TheMovieDBConfiguration.images.base_url + 'w780';

    return(
        <Card className={classes.display}>
            {/* <CardActionArea onClick={props.redirect(props.path)}> */}
            <Link className={classes.display__posterRedirect}
                    to={`/${trendingMedia.mediaType}/${trendingMedia.tmdbID}`}
                    state={ trendingMedia }
            >
                <CardMedia className={classes.display__posterRedirect__posterImg}
                    component="img"
                    image={imageBasePath + trendingMedia.backdropPath}
                    alt="mainImage"
                />
                {/* </CardActionArea> */}
                {/* <CardContent> */}
                <div className={classes.display__posterRedirect__posterShadow}></div>
                <IconButton className={classes.display__posterRedirect__playButton}>
                    <PlayArrow />
                </IconButton>
                <div className={classes.display__posterRedirect__text}>
                    <Typography className={classes.display__posterRedirect__text__mainText}>
                        {trendingMedia.name}
                    </Typography>
                    <Typography className={classes.display__posterRedirect__text__secondaryText}>
                        {trendingMedia.overview}
                    </Typography>
                </div>
                {/* </CardContent> */}
            </Link>
            <div className={classes.display__imgContainer}>
                <CardMedia className={classes.display__imgContainer__img} 
                    component="img"
                    image={imageBasePath + trendingMedia.posterPath}
                />
                <Tooltip title="Add to Watch Later">
                    <button className={classes.display__imgContainer__watchLaterButton}>                        
                        <div className={classes.display__imgContainer__watchLaterButton__bookmark}></div>
                        {/* <IconButton className={classes.display__imgContainer__button}> */}
                        <Add className={classes.display__imgContainer__watchLaterButton__icon}/>
                        {/* </IconButton> */}
                    </button>
                </Tooltip>
            </div>
        </Card>
    )
}

export default Display;