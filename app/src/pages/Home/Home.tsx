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
        "adult": false,
        "backdrop_path": "/na442LUrWkQMxSmrQUPtaw3T3nn.jpg",
        "id": 615656,
        "title": "Meg 2: The Trench",
        "original_language": "en",
        "original_title": "Meg 2: The Trench",
        "overview": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
        "poster_path": "/FQHtuf2zc8suMFE28RyvFt3FJN.jpg",
        "media_type": "movie",
        "genre_ids": [
            28,
            878,
            27
        ],
        "popularity": 2319.709,
        "release_date": "2023-08-02",
        "video": false,
        "vote_average": 6.949,
        "vote_count": 810
    },
    {
        "adult": false,
        "backdrop_path": "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
        "id": 976573,
        "title": "Elemental",
        "original_language": "en",
        "original_title": "Elemental",
        "overview": "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
        "poster_path": "/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
        "media_type": "movie",
        "genre_ids": [
            16,
            35,
            10751,
            14,
            10749
        ],
        "popularity": 3167.104,
        "release_date": "2023-06-14",
        "video": false,
        "vote_average": 7.791,
        "vote_count": 1495
    },
    {
        "adult": false,
        "backdrop_path": "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
        "id": 569094,
        "title": "Spider-Man: Across the Spider-Verse",
        "original_language": "en",
        "original_title": "Spider-Man: Across the Spider-Verse",
        "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
        "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        "media_type": "movie",
        "genre_ids": [
            16,
            28,
            12
        ],
        "popularity": 2044.25,
        "release_date": "2023-05-31",
        "video": false,
        "vote_average": 8.45,
        "vote_count": 3806
    },
    {
        "adult": false,
        "backdrop_path": "/loDy1LWCkPjECjVTRmyKtOoUpNN.jpg",
        "id": 114461,
        "name": "Ahsoka",
        "original_language": "en",
        "original_name": "Ahsoka",
        "overview": "Former Jedi Knight Ahsoka Tano investigates an emerging threat to a vulnerable galaxy.",
        "poster_path": "/laCJxobHoPVaLQTKxc14Y2zV64J.jpg",
        "media_type": "tv",
        "genre_ids": [
            10765,
            10759
        ],
        "popularity": 772.911,
        "first_air_date": "2023-08-22",
        "vote_average": 8.3,
        "vote_count": 85,
        "origin_country": [
            "US"
        ]
    },
    {
        "adult": false,
        "backdrop_path": "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
        "id": 872585,
        "title": "Oppenheimer",
        "original_language": "en",
        "original_title": "Oppenheimer",
        "overview": "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
        "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "media_type": "movie",
        "genre_ids": [
            18,
            36
        ],
        "popularity": 721.421,
        "release_date": "2023-07-19",
        "video": false,
        "vote_average": 8.276,
        "vote_count": 2566
    }
];


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
                    {renderSidebarItems()}
                </List>
            </div>
        </div>
        </StyledEngineProvider>
    ) 
}