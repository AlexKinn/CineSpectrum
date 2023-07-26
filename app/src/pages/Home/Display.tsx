import React from "react";
import classes from './Display.module.scss';
import { Card, CardActionArea, CardMedia, IconButton, Tooltip, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Add from '@mui/icons-material/Add';
import { Link } from "react-router-dom";

function Display(props: any) {

    return(
        <Card className={classes.display}>
            {/* <CardActionArea onClick={props.redirect(props.path)}> */}
            <Link className={classes.display__imgRedirect}
                    to={props.path}>
                <CardMedia className={classes.display__imgRedirect__posterImg}
                    component="img"
                    image={props.poster}
                    alt="mainImage"
                />
                Hello
            </Link>
            {/* </CardActionArea> */}
            <div className={classes.display__imgContainer}>
                <CardMedia className={classes.display__imgContainer__img} 
                    component="img"
                    image={props.image}
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
            <div className={classes.display__text}>
                <Typography className={classes.display__text__mainText}>
                    {props.mainText}
                </Typography>
                <Typography className={classes.display__text__secondaryText}>
                    {props.secondaryText}
                </Typography>
            </div>
        </Card>
    )
}

export default Display;