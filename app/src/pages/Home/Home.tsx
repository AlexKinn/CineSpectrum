import React, { useEffect, useState } from "react";
import classes from "./Home.module.scss";

// import variables from '../../styles/variables.scss';

import SidebarItem from "./SidebarItem";
import { Divider, IconButton, List, StyledEngineProvider } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Display from "./Display";
import axios from "axios";


const topPosts = [
    {
        // type: "show",
        poster: "https://m.media-amazon.com/images/M/MV5BZmY0MDRhYTMtZGJlYS00NDJlLThkNTAtNWZjYjFjYjgyODAxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._CR400,64,3247,1827_QL75_UX1000_CR0,0,1000,563_.jpg",
        image: "https://m.media-amazon.com/images/M/MV5BMDEwOWVlY2EtMWI0ZC00OWVmLWJmZGItYTk3YjYzN2Y0YmFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX280_CR0,0,280,414_.jpg",
        mainText: "The Witcher",
        secondaryText: "Watch the New Season 3 Trailer",
        path: "the-witcher-2019"
    },
    {
        // type: "movie",
        poster: "https://m.media-amazon.com/images/M/MV5BZTE3MmVjYjQtZGU2ZC00MjJjLWFmZjktZmQxMmM4MTc3YjBhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._CR467,28,3093,1740_QL75_UX1000_CR0,0,1000,563_.jpg",
        image: "https://m.media-amazon.com/images/M/MV5BYzczMzllN2UtNDJmOS00MmE5LWE2MWYtNGEwODcwMDc2M2YyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UY414_CR8,0,280,414_.jpg",
        mainText: '"One Piece"',
        secondaryText: "The Legendary Manga Is Coming to Netflix",
        path: "one-piece-2023"
    },
    {   
        // type: "movie",
        poster: "oppenheimerPoster.jpg",
        image: "oppenheimerIMG.jpg",
        mainText: "Meet the Cast of 'Oppenheimer'",
        secondaryText: "Cillian Murphy, RDJ & Others Share Their Experience",
        path: "oppenheimer-2023"
    }, 
    {
        // type: "movie",
        poster: "wonkaPoster.jpg",
        image: "wonkaIMG.jpg",
        mainText: "Timothée Chalamet Stars in 'Wonka'",
        secondaryText: "Watch the First Trailer",
        path: "wonka-2023"
    },
    {
        // type: "movie",
        poster: "https://m.media-amazon.com/images/M/MV5BYTc1YWU2NTgtNGI1Mi00N2I2LWE4ODUtZDY4MWJiZGE4NjE3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._CR278,399,3277,1843_QL75_UY281_CR0,0,500,281_.jpg",
        image: "blueBeetleIMG.jpg",
        mainText: "'Blue Beetle'",
        secondaryText: "Watch the Final Trailer",
        path: "blue-beetle-2023"
    },
    {
        // type: "movie",
        poster: "ahsokaPoster.jpg",
        image: "ahsokaIMG.jpg",
        mainText: "Ahsoka",
        secondaryText: "Watch the Trailer",
        path: "ahsoka-2023"
    }
];



export default function Home() {
    const [movies, setMovies] = useState();
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
            console.log(API_URL);
            axios.get(API_URL)
                .then((response) => {
                    console.log(response.data);
                    setMovies(response.data)
                    console.log(movies);
                })
                .catch((error) => {
                    console.log(error);
                    console.log("error found");
                }); 
        // } catch () {}
    }, []);

    const nextPost = () => {
        setSlidingLeft(true);

        setTimeout(() => {
            setSelectedPostIndex(getNextPostIndex());
            setSlidingLeft(false);
        }, 300);
    };
    const getNextPostIndex = () => {
        if(selectedPostIndex == topPosts.length-1) {
            return 0;
        }
        else {
            return selectedPostIndex+1;
        }
        return (selectedPostIndex + 1) % topPosts.length
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
            return topPosts.length-1;
        }
        else {
            return selectedPostIndex-1;
        }
    };

    const renderSidebarItems = () => {
        const sidebarItems = [];
        for(let i=0; i<3; i++) {
            let currentIndex = (selectedPostIndex+1+i) % topPosts.length;
            sidebarItems.push(
                <>
                <SidebarItem 
                    listKey={topPosts[currentIndex].mainText}
                    image={topPosts[currentIndex].image}   
                    mainText={topPosts[currentIndex].mainText}
                    secondaryText={topPosts[currentIndex].secondaryText}
                    path= { topPosts[currentIndex].path }
                    data={ topPosts[currentIndex] }
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
                                poster={ topPosts[getPreviousPostIndex()].poster }
                                image={ topPosts[getPreviousPostIndex()].image }
                                mainText={ topPosts[getPreviousPostIndex()].mainText }
                                secondaryText={ topPosts[getPreviousPostIndex()].secondaryText }
                                path={ topPosts[getPreviousPostIndex()].path }    
                            />
                        </div>
                    }
                    <div className={`${classes.home__top__display__mainDisplay}
                             ${slidingLeft && classes.home__top__display__slideLeft}
                             ${slidingRight && classes.home__top__display__slideRight}
                        `}>
                        <Display
                            poster={ topPosts[selectedPostIndex].poster }
                            image={ topPosts[selectedPostIndex].image }
                            mainText={ topPosts[selectedPostIndex].mainText }
                            secondaryText={ topPosts[selectedPostIndex].secondaryText }
                            path={ topPosts[selectedPostIndex].path }    
                        />
                    </div>
                    { slidingLeft && 
                        <div className={`${classes.home__top__display__rightDisplay}
                                ${slidingLeft && classes.home__top__display__slideLeft}
                            `}>
                            <Display
                                poster={ topPosts[getNextPostIndex()].poster }
                                image={ topPosts[getNextPostIndex()].image }
                                mainText={ topPosts[getNextPostIndex()].mainText }
                                secondaryText={ topPosts[getNextPostIndex()].secondaryText }
                                path={ topPosts[getNextPostIndex()].path }    
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