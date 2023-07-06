import React from 'react';
import classes from "./SidebarItem.module.scss";
import { Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material';

function SidebarItem(props : any) {
 
    return(
        <Card className={classes.sideCard}>
            <CardActionArea>
                <CardMedia className={classes.sideCard__img}
                    component="img"
                    image={ props.image }
                    alt={ props.mainText }
                />
                <CardContent>
                    <Typography className={classes.sideCard__mainText}>{props.mainText}</Typography>
                    <Typography className={classes.sideCard__secondaryText}>{props.secondaryText}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default SidebarItem;