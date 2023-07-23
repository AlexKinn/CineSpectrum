import React from "react";
import classes from './Display.module.scss';
import { Card, CardActionArea, CardMedia, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";


function Display(props: any) {

    return(
        <Card className={classes.display}
        >
            <CardActionArea>
                <CardMedia className={classes.display__posterImg}
                    component="img"
                    image={props.poster}
                    alt="mainImage"
                />
            </CardActionArea>
            {/* <div className={classes.display__smallImgContainer}> */}
            <CardMedia className={classes.display__smallImgContainer__smallImg} 
                component="img"
                image={props.image}
            />
            {/* </div> */}
            <IconButton aria-label="previous option"
                className={`${classes.display__backButton} 
                            ${classes.display__directionalButton}`}
                onClick={props.previousPost}
            >
                <ArrowBackIos />
            </IconButton>
            <IconButton aria-label="next option" 
                className={`${classes.display__forwardButton} 
                            ${classes.display__directionalButton}`}
                onClick={props.nextPost} 
            >
                <ArrowForwardIos />
            </IconButton>
        </Card>
    )
}

export default Display;