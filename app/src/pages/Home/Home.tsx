import React, { useEffect, useState } from "react";
import classes from "./Home.module.scss";

// import variables from '../../styles/variables.scss';

import SidebarItem from "./SidebarItem";
import { Divider, IconButton, List, Skeleton, StyledEngineProvider } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Display from "./Display";
import axios from "axios";



interface Movie {
    poster: String,
    image: String,
    mainText: String
    secondaryText: String,
    path: String,
}

export default function Home() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [selectedPostIndex, setSelectedPostIndex] = useState(0);
    const [slidingLeft, setSlidingLeft] = useState(false);
    const [slidingRight, setSlidingRight] = useState(false);
    
    useEffect(() => {
        // try {
            if(!process.env.REACT_APP_API_URL) {
                console.error("NO API URL FOUND.");
                return;
            }
            const API_URL = process.env.REACT_APP_API_URL + "/trendingMovies";
            axios.get(API_URL)
                .then((response) => {
                    setMovies(response.data.results)
                    setIsDataFetched(true);
                    // callMovies(response.data);
                })
                .catch((error) => {
                    console.log(error);
                }); 
    }, []);

    const nextPost = () => {
        setSlidingLeft(true);

        setTimeout(() => {
            setSelectedPostIndex(getNextPostIndex());
            setSlidingLeft(false);
        }, 300);
    };
    const getNextPostIndex = () => {
        if(selectedPostIndex == movies.length-1) {
            return 0;
        }
        else {
            return selectedPostIndex+1;
        }
    };
    const previousPost = () => {
        setSlidingRight(true);

        setTimeout(() => {
            setSelectedPostIndex(getPreviousPostIndex());
            setSlidingRight(false);
        }, 300);
    }
    const getPreviousPostIndex = () => {
        if(selectedPostIndex == 0) {
            return movies.length-1;
        }
        else {
            return selectedPostIndex-1;
        }
    };

    const renderSidebarItems = () => {
        const sidebarItems = [];
        for(let i=0; i<3; i++) {
            let currentIndex = (selectedPostIndex+1+i) % movies.length;
            sidebarItems.push(
                <>
                { isDataFetched ? 
                (
                    <SidebarItem 
                        listKey={ movies[currentIndex].mainText }
                        image={ movies[currentIndex].image }   
                        mainText={ movies[currentIndex].mainText }
                        secondaryText={ movies[currentIndex].secondaryText }
                        path= { movies[currentIndex].path }
                        data={ movies[currentIndex] }
                    />
                ) :
                (
                    <Skeleton />
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
                        {...!(slidingLeft || slidingRight) ? {onClick: previousPost} : {}}
                        disableRipple
                    >
                        <ArrowBackIos />
                    </IconButton>
                    <IconButton aria-label="next option" 
                        className={`${classes.home__top__display__forwardButton} 
                                    ${classes.home__top__display__directionalButton}
                                  `}
                        {...!(slidingLeft || slidingRight) ? {onClick: nextPost} : {}}
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
                                    poster={ movies[getPreviousPostIndex()].poster }
                                    image={ movies[getPreviousPostIndex()].image }
                                    mainText={ movies[getPreviousPostIndex()].mainText }
                                    secondaryText={ movies[getPreviousPostIndex()].secondaryText }
                                    path={ movies[getPreviousPostIndex()].path }    
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
                                poster={ movies[selectedPostIndex].poster }
                                image={ movies[selectedPostIndex].image }
                                mainText={ movies[selectedPostIndex].mainText }
                                secondaryText={ movies[selectedPostIndex].secondaryText }
                                path={ movies[selectedPostIndex].path }    
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
                                    poster={ movies[getNextPostIndex()].poster }
                                    image={ movies[getNextPostIndex()].image }
                                    mainText={ movies[getNextPostIndex()].mainText }
                                    secondaryText={ movies[getNextPostIndex()].secondaryText }
                                    path={ movies[getNextPostIndex()].path }    
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
                    {renderSidebarItems()}
                </List>
            </div>
        </div>
        </StyledEngineProvider>
    ) 
}