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
        </Card>
    )
}

export default Display;