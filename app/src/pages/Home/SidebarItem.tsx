import React from 'react';
import classes from "./SidebarItem.module.scss";
import { ListItem, Card, CardContent, CardMedia, CardActionArea, Typography, Box, StyledEngineProvider, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function SidebarItem(props : any) {
 
    return(
        // <StyledEngineProvider injectFirst>
        <ListItem className={classes.sidebarItem} key={ props.listKey }>
            <Card className={classes.sidebarItem__card}>
                <CardActionArea className={classes.sidebarItem__card__content}>
                    {/* <div > */}
                        <CardMedia className={classes.sidebarItem__card__content__img}
                            component="img"
                            image={ props.image }
                            alt={ props.mainText }
                        />
                        <CardContent>
                            <IconButton className={classes.sidebarItem__card__content__playButton}>
                                <PlayArrowIcon />
                            </IconButton>
                            <Typography className={classes.sidebarItem__card__content__mainText}>
                                {props.mainText}
                            </Typography>
                            <Typography className={classes.sidebarItem__card__content__secondaryText}>
                                {props.secondaryText}
                            </Typography>
                        </CardContent>
                    {/* </div> */}
                </CardActionArea>
            </Card>
        </ListItem>
        // {/* </StyledEngineProvider> */}
    )
}

export default SidebarItem;