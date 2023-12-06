import React, { useEffect, useState } from "react";
import classes from "./Home.module.scss";

// import variables from '../../styles/variables.scss';

import SidebarItem from "./SidebarItem";
import { Divider, IconButton, List, ListItem, Skeleton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Display from "./Display";
import axios from "axios";
import { TrendingMediaInterface } from '../../interfaces/TrendingMediaInterface';

export default function Home() {
    const [trendingMedia, setTrendingMedia] = useState<TrendingMediaInterface[]>([]);
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [selectedPostIndex, setSelectedPostIndex] = useState(0);
    const [slidingLeft, setSlidingLeft] = useState(false);
    const [slidingRight, setSlidingRight] = useState(false);
    const [areImagesLoaded, setAreImagesLoaded] = useState(false);
    
    useEffect(() => {
        document.title = "Cinespectrum";
    }, []);
    useEffect(() => {
        const abortController = new AbortController();
        const API_URL = process.env.REACT_APP_API_URL + "/trendingMedia";
        axios.get(API_URL, {
            signal: abortController.signal
        })
        .then((response) => {
            setTrendingMedia(response.data)
            setIsDataFetched(true);
        })
        .catch((error) => {
            console.log(error);
        });    
        return () => abortController.abort(); 
    }, []);

    const nextPost = () => {
        if(slidingRight || slidingLeft || !areImagesLoaded) {return;}
        setSlidingLeft(true);
        setAreImagesLoaded(false);

        setTimeout(() => {
            setSelectedPostIndex(getNextPostIndex());
            setSlidingLeft(false);
        }, 500);
    };
    const getNextPostIndex = () => {
        if(selectedPostIndex == trendingMedia.length-1) {
            return 0;
        }
        else {
            return selectedPostIndex+1;
        }
    };
    const previousPost = () => {
        if(slidingRight || slidingLeft || !areImagesLoaded) {return;}
        setSlidingRight(true);
        setAreImagesLoaded(false);

        setTimeout(() => {
            setSelectedPostIndex(getPreviousPostIndex());
            setSlidingRight(false);
        }, 500);
    }
    const getPreviousPostIndex = () => {
        if(selectedPostIndex == 0) {
            return trendingMedia.length-1;
        }
        else {
            return selectedPostIndex-1;
        }
    };
    const shortenOverview = (overview: string) => {
        return overview.split(". ", 1)[0];
    }
    const renderSidebarItems = () => {
        const sidebarItems = [];
        for(let i=0; i<3; i++) {
            let currentIndex = (selectedPostIndex+1+i) % trendingMedia.length;
            let currentMedia = trendingMedia[currentIndex];
            sidebarItems.push(
                // <ListItem>
                <>
                    { isDataFetched ? 
                    (
                        <SidebarItem 
                            mediaID={ currentMedia.id }
                            mediaType={ currentMedia.media_type }
                            title={ currentMedia.title ?? currentMedia.name }
                            posterPath={ currentMedia.poster_path }
                            overview={ shortenOverview(currentMedia.overview) }
                        />
                    ) :
                    (
                        <Skeleton variant="rectangular" width={400} height={180}/>
                    )}
                    <Divider />
                </>
                /* </ListItem> */    
            )
        }
        return sidebarItems;
    };
    const setImagesAreLoaded = () => {
        setAreImagesLoaded(true);
    };

    



    
    
    return(
        <div className={classes.home}>
            <div className={classes.home__top}>
                <div className={classes.home__top__display}>
                    <IconButton aria-label="previous option"
                        className={`${classes.home__top__display__backButton} 
                                    ${classes.home__top__display__directionalButton}
                                  `}
                        onClick={ previousPost }
                        disableRipple
                    >
                        <ArrowBackIos />
                    </IconButton>
                    <IconButton aria-label="next option" 
                        className={`${classes.home__top__display__forwardButton} 
                                    ${classes.home__top__display__directionalButton}
                                  `}
                        onClick={ nextPost }
                        disableRipple       
                    >
                        <ArrowForwardIos />
                    </IconButton>
                    <div className={`${classes.home__top__display__leftDisplay}
                            ${slidingRight && classes.home__top__display__slideRight}
                        `}>  
                        {isDataFetched ?
                        (
                            <Display
                                mediaID={ trendingMedia[getPreviousPostIndex()].id }
                                mediaType={ trendingMedia[getPreviousPostIndex()].media_type }
                                title={ trendingMedia[getPreviousPostIndex()].title ?? trendingMedia[getPreviousPostIndex()].name}
                                posterPath={ trendingMedia[getPreviousPostIndex()].poster_path }
                                backdropPath={ trendingMedia[getPreviousPostIndex()].backdrop_path }
                                overview={ shortenOverview(trendingMedia[getPreviousPostIndex()].overview) }
                                setImageLoaded={ setImagesAreLoaded }
                            />
                        ) :
                        (
                            <Skeleton variant="rectangular" width={'100%'} height={'100%'}
                            sx={{'backgroundColor': 'rgb(60,60,60)'}}/>    
                        )}
                    </div>
                    <div className={`${classes.home__top__display__mainDisplay}
                             ${slidingLeft && classes.home__top__display__slideLeft}
                             ${slidingRight && classes.home__top__display__slideRight}
                        `}>
                        {isDataFetched ?
                        (
                            <Display
                                mediaID={ trendingMedia[selectedPostIndex].id }
                                mediaType={ trendingMedia[selectedPostIndex].media_type }
                                title={ trendingMedia[selectedPostIndex].title ?? trendingMedia[selectedPostIndex].name }
                                posterPath={ trendingMedia[selectedPostIndex].poster_path }
                                backdropPath={ trendingMedia[selectedPostIndex].backdrop_path }
                                overview={ shortenOverview(trendingMedia[selectedPostIndex].overview) }
                                setImageLoaded={ setImagesAreLoaded }
                            /> 
                        ) :
                        (
                            <Skeleton variant="rectangular" width={'100%'} height={'100%'}
                            sx={{'backgroundColor': 'rgb(60,60,60)'}}/>
                        )}
                    </div>
                    <div className={`${classes.home__top__display__rightDisplay}
                            ${slidingLeft && classes.home__top__display__slideLeft}
                        `}>
                        {isDataFetched ?
                        (
                            <Display
                                mediaID={ trendingMedia[getNextPostIndex()].id }
                                mediaType={ trendingMedia[getNextPostIndex()].media_type }
                                title={ trendingMedia[getNextPostIndex()].title ?? trendingMedia[getNextPostIndex()].name }
                                posterPath={ trendingMedia[getNextPostIndex()].poster_path }
                                backdropPath={ trendingMedia[getNextPostIndex()].backdrop_path } 
                                overview={ shortenOverview(trendingMedia[getNextPostIndex()].overview) }
                                setImageLoaded={ setImagesAreLoaded }
                            />
                        ) :
                        (
                            <Skeleton variant="rectangular" width={'100%'} height={'100%'}
                            sx={{'backgroundColor': 'rgb(60,60,60)'}}/>
                        )}
                    </div>
                    
                </div>
                <List className={classes.home__top__sidebar}>
                    {isDataFetched && renderSidebarItems()}
                </List>
            </div>
        </div>
    ) 
}