import React from 'react';
import classes from "./SidebarItem.module.scss";
import { ListItem, Card, CardContent, CardMedia, CardActionArea, Typography, Box, StyledEngineProvider, IconButton, Divider} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';

function SidebarItem(props : any) {
 
    return(
        <ListItem className={classes.sidebarItem} key={ props.tmdbID }>
            <Card className={classes.sidebarItem__card}>
                <Link className={classes.sidebarItem__card__content} 
                    to={`/${props.mediaType}/${props.tmdbID}`}
                    state={ props.data }
                >
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
                </Link>
            </Card>
        </ListItem>
    )
}

export default SidebarItem;