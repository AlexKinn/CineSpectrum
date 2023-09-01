import React from 'react';
import classes from "./SidebarItem.module.scss";
import { ListItem, Card, CardContent, CardMedia, CardActionArea, Typography, Box, StyledEngineProvider, IconButton, Divider} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';
import { TheMovieDBConfiguration } from '../../TheMovieDBConfiguration';

function SidebarItem({ mediaID, mediaType, title, posterPath, overview } : 
    { mediaID: number, mediaType: string, title?: string, posterPath: string, overview: string }) {
 
    // Size can be changed as per provided sizes in TheMovieDBConfiguration
    const imageBasePath = TheMovieDBConfiguration.images.secure_base_url + 'original';

    return(
        <ListItem className={classes.sidebarItem} key={ mediaID }>
            <Card className={classes.sidebarItem__card}>
                <Link className={classes.sidebarItem__card__content} 
                    to={`/${mediaType}/${mediaID}`}
                    state={{ mediaID: mediaID}}
                >
                    <CardMedia className={classes.sidebarItem__card__content__img}
                        component="img"
                        image={ imageBasePath + posterPath }
                        alt={ title }
                    />
                    <CardContent>
                        <IconButton className={classes.sidebarItem__card__content__playButton}>
                            <PlayArrowIcon />
                        </IconButton>
                        <Typography className={classes.sidebarItem__card__content__mainText}>
                            { title }
                        </Typography>
                        <Typography className={classes.sidebarItem__card__content__secondaryText}>
                            { overview }
                        </Typography>
                    </CardContent>
                </Link>
            </Card>
        </ListItem>
    )
}

export default SidebarItem;