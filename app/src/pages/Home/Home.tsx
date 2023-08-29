import React, { useEffect, useState } from "react";
import classes from "./Home.module.scss";

// import variables from '../../styles/variables.scss';

import SidebarItem from "./SidebarItem";
import { Divider, IconButton, List, Skeleton, StyledEngineProvider } from "@mui/material";
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
    
    useEffect(() => {
        const abortController = new AbortController();
        const API_URL = process.env.REACT_APP_API_URL + "/trendingMedia";
        console.log("Fetching trending movies.")
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
        if(slidingRight || slidingLeft) {return;}
        setSlidingLeft(true);

        setTimeout(() => {
            setSelectedPostIndex(getNextPostIndex());
            setSlidingLeft(false);
        }, 300);
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
        if(slidingRight || slidingLeft) {return;}
        setSlidingRight(true);

        setTimeout(() => {
            setSelectedPostIndex(getPreviousPostIndex());
            setSlidingRight(false);
        }, 300);
    }
    const getPreviousPostIndex = () => {
        if(selectedPostIndex == 0) {
            return trendingMedia.length-1;
        }
        else {
            return selectedPostIndex-1;
        }
    };

    const renderSidebarItems = () => {
        const sidebarItems = [];
        for(let i=0; i<3; i++) {
            let currentIndex = (selectedPostIndex+1+i) % trendingMedia.length;
            let currentMedia = trendingMedia[currentIndex];
            sidebarItems.push(
                <>
                { isDataFetched ? 
                (
                    <SidebarItem 
                        mediaID={ currentMedia.id }
                        mediaType={ currentMedia.media_type }
                        title={ currentMedia.title ?? currentMedia.name }
                        posterPath={ currentMedia.poster_path }
                        overview={ currentMedia.overview }
                    />
                ) :
                (
                    <Skeleton variant="rectangular" width={400} height={180}/>
                )}
                <Divider />
                </>
                
            )
        }
        return sidebarItems;
    };



    
    
    return(
        <StyledEngineProvider injectFirst>
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
                    { slidingRight &&
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
                                    overview={ trendingMedia[getPreviousPostIndex()].overview }
                                />
                            ) :
                            (
                                <Skeleton variant="rectangular" width={'100%'} height={'100%'}
                                sx={{'background-color': 'rgb(60,60,60)'}}/>    
                            )}
                        </div>
                    }
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
                                overview={ trendingMedia[selectedPostIndex].overview }
                            /> 
                        ) :
                        (
                            <Skeleton variant="rectangular" width={'100%'} height={'100%'}
                            sx={{'background-color': 'rgb(60,60,60)'}}/>
                        )}
                    </div>
                    { slidingLeft && 
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
                                    overview={ trendingMedia[getNextPostIndex()].overview }
                                />
                            ) :
                            (
                                <Skeleton variant="rectangular" width={'100%'} height={'100%'}
                                sx={{'background-color': 'rgb(60,60,60)'}}/>
                            )}
                        </div>
                    }
                </div>
                <List className={classes.home__top__sidebar}>
                    {isDataFetched && renderSidebarItems()}
                </List>
            </div>
        </div>
        </StyledEngineProvider>
    ) 
}