import React from "react";
import classes from './Display.module.scss';
import { Card, CardMedia, IconButton, Tooltip, Typography } from "@mui/material";
import { Add, PlayArrow } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { TheMovieDBConfiguration } from "../../TheMovieDBConfiguration";

function Display({ mediaID, mediaType, title, posterPath, backdropPath, overview } : 
    { mediaID: number, mediaType: string, title?: string, posterPath: string, backdropPath: string, overview: string }) {

    // Size can be changed as per provided sizes in TheMovieDBConfiguration
    const imageBasePath = TheMovieDBConfiguration.images.secure_base_url;
    const backdropWidth = 'original';
    const posterWidth = 'w780';

    return(
        <Card className={classes.display}>
            {/* <CardActionArea onClick={props.redirect(props.path)}> */}
            <Link className={classes.display__posterRedirect}
                to={`/${mediaType}/${mediaID}`}
                state={{ mediaID: mediaID}}
            >
                <CardMedia className={classes.display__posterRedirect__posterImg}
                    component="img"
                    image={imageBasePath+backdropWidth + backdropPath}
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
                        { title }
                    </Typography>
                    <Typography className={classes.display__posterRedirect__text__secondaryText}>
                        { overview }
                    </Typography>
                </div>
                {/* </CardContent> */}
            </Link>
            <div className={classes.display__imgContainer}>
                <CardMedia className={classes.display__imgContainer__img} 
                    component="img"
                    image={ imageBasePath+posterWidth + posterPath }
                />
                <Tooltip title="Add to Watch Later">
                    <button className={classes.display__imgContainer__watchLaterButton}>                        
                        <div className={classes.display__imgContainer__watchLaterButton__bookmark}></div>
                        <Add className={classes.display__imgContainer__watchLaterButton__icon}/>
                    </button>
                </Tooltip>
            </div>
        </Card>
    )
}

export default Display;