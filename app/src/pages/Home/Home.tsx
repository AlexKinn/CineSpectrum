import React, { useEffect, useState } from "react";
import classes from "./Home.module.scss";

// import variables from '../../styles/variables.scss';

import SidebarItem from "./SidebarItem";
import { Divider, IconButton, List, StyledEngineProvider } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Display from "./Display";
import axios from "axios";


interface Movie {
    poster: String,
    image: String,
    mainText: String,
    secondaryText: String,
    path: String
}


export default function Home() {
    const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
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
                    setTrendingMovies(response.data.results);
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
        if(selectedPostIndex == trendingMovies.length-1) {
            return 0;
        }
        else {
            return selectedPostIndex+1;
        }
        return (selectedPostIndex + 1) % trendingMovies.length
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
            return trendingMovies.length-1;
        }
        else {
            return selectedPostIndex-1;
        }
    };

    const renderSidebarItems = () => {
        const sidebarItems = [];
        for(let i=0; i<3; i++) {
            let currentIndex = (selectedPostIndex+1+i) % trendingMovies.length;
            sidebarItems.push(
                <>
                <SidebarItem 
                    listKey={trendingMovies[currentIndex].mainText}
                    image={trendingMovies[currentIndex].image}   
                    mainText={trendingMovies[currentIndex].mainText}
                    secondaryText={trendingMovies[currentIndex].secondaryText}
                    path= { trendingMovies[currentIndex].path }
                    data={ trendingMovies[currentIndex] }
                />
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
                            <Display
                                poster={ trendingMovies[getPreviousPostIndex()].poster }
                                image={ trendingMovies[getPreviousPostIndex()].image }
                                mainText={ trendingMovies[0].mainText }
                                secondaryText={ trendingMovies[getPreviousPostIndex()].secondaryText }
                                path={ trendingMovies[getPreviousPostIndex()].path }    
                            />
                        </div>
                    }
                    <div className={`${classes.home__top__display__mainDisplay}
                             ${slidingLeft && classes.home__top__display__slideLeft}
                             ${slidingRight && classes.home__top__display__slideRight}
                        `}>
                        <Display
                            poster={ trendingMovies[selectedPostIndex].poster }
                            image={ trendingMovies[selectedPostIndex].image }
                            mainText={ trendingMovies[0].mainText }
                            secondaryText={ trendingMovies[selectedPostIndex].secondaryText }
                            path={ trendingMovies[selectedPostIndex].path }    
                        />
                    </div>
                    { slidingLeft && 
                        <div className={`${classes.home__top__display__rightDisplay}
                                ${slidingLeft && classes.home__top__display__slideLeft}
                            `}>
                            <Display
                                poster={ trendingMovies[getNextPostIndex()].poster }
                                image={ trendingMovies[getNextPostIndex()].image }
                                mainText={ trendingMovies[getNextPostIndex()].mainText }
                                secondaryText={ trendingMovies[getNextPostIndex()].secondaryText }
                                path={ trendingMovies[getNextPostIndex()].path }    
                            />
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