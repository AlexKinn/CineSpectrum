import React from 'react';
import classes from "./SidebarItem.module.scss";
import { ListItem, Card, CardContent, CardMedia, CardActionArea, Typography, Box, StyledEngineProvider, IconButton, Divider} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';
import { TrendingMediaInterface } from '../../interfaces/TrendingMediaInterface';


function SidebarItem(trendingMedia : TrendingMediaInterface) {
 
    return(
        <ListItem className={classes.sidebarItem} key={ trendingMedia.tmdbID }>
            <Card className={classes.sidebarItem__card}>
                <Link className={classes.sidebarItem__card__content} 
                    to={`/${trendingMedia.mediaType}/${trendingMedia.tmdbID}`}
                    state={ trendingMedia }
                >
                    {/* <div > */}
                        <CardMedia className={classes.sidebarItem__card__content__img}
                            component="img"
                            image={ trendingMedia.backdropPath }
                            alt={ trendingMedia.name }
                        />
                        <CardContent>
                            <IconButton className={classes.sidebarItem__card__content__playButton}>
                                <PlayArrowIcon />
                            </IconButton>
                            <Typography className={classes.sidebarItem__card__content__mainText}>
                                {trendingMedia.name}
                            </Typography>
                            <Typography className={classes.sidebarItem__card__content__secondaryText}>
                                {trendingMedia.overview}
                            </Typography>
                        </CardContent>
                    {/* </div> */}
                </Link>
            </Card>
        </ListItem>
    )
}

export default SidebarItem;