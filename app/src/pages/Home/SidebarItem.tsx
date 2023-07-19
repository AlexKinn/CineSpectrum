import React from 'react';
import classes from "./SidebarItem.module.scss";
import { ListItem, Card, CardContent, CardMedia, CardActionArea, Typography, Box } from '@mui/material';

function SidebarItem(props : any) {
 
    return(
        <ListItem className={classes.sidebarItem} key={ props.key }>
            <Card>
                <CardActionArea>
                    <div className={classes.sidebarItem__card}>
                        <CardMedia className={classes.sidebarItem__card__img}
                            component="img"
                            image={ props.image }
                            alt={ props.mainText }
                        />
                        <CardContent>
                            <Typography className={classes.sidebarItem__card__mainText}>
                                {props.mainText}
                            </Typography>
                            <Typography className={classes.sidebarItem__card__secondaryText}>
                                {props.secondaryText}
                            </Typography>
                        </CardContent>
                    </div>
                </CardActionArea>
            </Card>
        </ListItem>
    )
}

export default SidebarItem;