import React, { useEffect, useState } from "react";
import classes from "./Home.module.scss";

// import variables from '../../styles/variables.scss';

import SidebarItem from "./SidebarItem";
import { Divider, IconButton, List, Skeleton, StyledEngineProvider } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Display from "./Display";
import axios from "axios";
import { TrendingMediaInterface } from '../../interfaces/TrendingMediaInterface';


const testData : TrendingMediaInterface[] = [
    
    // "movie1": 
    {
        // type: "show",
        tmdbID: 1,
        name: "The Witcher",
        posterPath: "https://m.media-amazon.com/images/M/MV5BZmY0MDRhYTMtZGJlYS00NDJlLThkNTAtNWZjYjFjYjgyODAxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._CR400,64,3247,1827_QL75_UX1000_CR0,0,1000,563_.jpg",
        backdropPath: "https://m.media-amazon.com/images/M/MV5BMDEwOWVlY2EtMWI0ZC00OWVmLWJmZGItYTk3YjYzN2Y0YmFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX280_CR0,0,280,414_.jpg",
        mediaType: "tv",
        overview:  "Watch the New Season 3 Trailer"
    },
    // "movie2":
    {
        tmdbID: 2,
        name: "One Piece",
        posterPath: "https://m.media-amazon.com/images/M/MV5BZTE3MmVjYjQtZGU2ZC00MjJjLWFmZjktZmQxMmM4MTc3YjBhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._CR467,28,3093,1740_QL75_UX1000_CR0,0,1000,563_.jpg",
        backdropPath: "https://m.media-amazon.com/images/M/MV5BYzczMzllN2UtNDJmOS00MmE5LWE2MWYtNGEwODcwMDc2M2YyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UY414_CR8,0,280,414_.jpg",
        mediaType: "movie",
        overview: "The Legendary Manga Is Coming to Netflix"
    },
    // "movie3":
    {   
        // type: "movie",
        tmdbID: 3,
        name: "Oppenheimer",
        posterPath: "oppenheimerPoster.jpg",
        backdropPath: "oppenheimerIMG.jpg",
        mediaType: "movie",
        overview:  "Cillian Murphy, RDJ & Others Share Their Experience",
    }, 
    // "movie4":
    {
        // type: "movie",
        tmdbID: 4,
        name: "Wonka",
        posterPath: "wonkaPoster.jpg",
        backdropPath:  "wonkaIMG.jpg",
        mediaType: "movie",
        overview: "Watch the First Trailer",
    }
    // "movei5":
    // {
    //     // type: "movie",
    //     poster: "https://m.media-amazon.com/images/M/MV5BYTc1YWU2NTgtNGI1Mi00N2I2LWE4ODUtZDY4MWJiZGE4NjE3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._CR278,399,3277,1843_QL75_UY281_CR0,0,500,281_.jpg",
    //     image: "blueBeetleIMG.jpg",
    //     mainText: "'Blue Beetle'",
    //     secondaryText: "Watch the Final Trailer",
    //     path: "blue-beetle-2023"
    // },
    // // "movie6":
    // {
    //     // type: "movie",
    //     poster: "ahsokaPoster.jpg",
    //     image: "ahsokaIMG.jpg",
    //     mainText: "Ahsoka",
    //     secondaryText: "Watch the Trailer",
    //     path: "ahsoka-2023"
    // }
];


export default function Home() {
    const [trendingMedia, setTrendingMedia] = useState<TrendingMediaInterface[]>(testData);
    const [isDataFetched, setIsDataFetched] = useState(true); // change later
    const [selectedPostIndex, setSelectedPostIndex] = useState(0);
    const [slidingLeft, setSlidingLeft] = useState(false);
    const [slidingRight, setSlidingRight] = useState(false);
    
    useEffect(() => {
        
        const abortController = new AbortController();
        const API_URL = process.env.REACT_APP_API_URL + "/trendingMovies";
        axios.get(API_URL, {
            signal: abortController.signal
        }).then((response) => {
                console.log("Fetching trending movies.")
                setTrendingMedia(response.data.results)
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
        if(selectedPostIndex == trendingMedia.length-1) {
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
            sidebarItems.push(
                <>
                { isDataFetched ? 
                (
                    <SidebarItem 
                        { ...trendingMedia[currentIndex] }
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
                                    { ...trendingMedia[getPreviousPostIndex()] }
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
                                { ...trendingMedia[selectedPostIndex] }
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
                                    { ...trendingMedia[getNextPostIndex()] }
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