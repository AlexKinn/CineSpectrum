import React, { useState } from "react";
import classes from "./Home.module.scss";

// import variables from '../../styles/variables.scss';

import SidebarItem from "./SidebarItem";
import { Card, CardActionArea, CardMedia, Divider, IconButton, List, ListItem, StyledEngineProvider } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Display from "./Display";
import { To, useNavigate } from "react-router-dom";



const topPosts = [
    {
        poster: "witcherPoster.jpg",
        image: "witcherIMG.jpg",
        mainText: "The Witcher",
        secondaryText: "Watch the New Season 3 Trailer"
    },
    {   
        poster: "oppenheimerPoster.jpg",
        image: "oppenheimerIMG.jpg",
        mainText: "Meet the Cast of 'Oppenheimer'",
        secondaryText: "Cillian Murphy, RDJ & Others Share Their Experience"
    }, 
    {
        poster: "wonkaPoster.jpg",
        image: "wonkaIMG.jpg",
        mainText: "Timothée Chalamet Stars in 'Wonka'",
        secondaryText: "Watch the First Trailer"
    },
    {
        poster: "https://m.media-amazon.com/images/M/MV5BYTc1YWU2NTgtNGI1Mi00N2I2LWE4ODUtZDY4MWJiZGE4NjE3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._CR278,399,3277,1843_QL75_UY281_CR0,0,500,281_.jpg",
        image: "blueBeetleIMG.jpg",
        mainText: "'Blue Beetle'",
        secondaryText: "Watch the Final Trailer"
    },
    {
        poster: "ahsokaPoster.jpg",
        image: "ahsokaIMG.jpg",
        mainText: "Ahsoka",
        secondaryText: "Watch the Trailer"
    }
];



export default function Home() {
    const [selectedPostIndex, setSelectedPostIndex] = useState(0);
    const [slidingLeft, setSlidingLeft] = useState(false);
    const [slidingRight, setSlidingRight] = useState(false);
    
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
    };
    // const slideTimeout = (duration, callback) => {

    // }
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
    const navigate = useNavigate();
    const redirectTo = (path: To) => {
        navigate(path);
    }


    const renderSidebarItems2 = () => {
        const sidebarItems = [];
        for(let i=1; i<4; i++) {
            let currentIndex = (selectedPostIndex+i) % topPosts.length;
            // if(currentIndex === selectedPostIndex) { return null; }
            sidebarItems.push(
                <>
                <SidebarItem 
                    listKey={topPosts[currentIndex].mainText}
                    image={topPosts[currentIndex].image}   
                    mainText={topPosts[currentIndex].mainText}
                    secondaryText={topPosts[currentIndex].secondaryText}
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
                                    ${
                                        (slidingLeft || slidingRight) 
                                        && classes.home__top__display__disabledButton
                                    }`}
                        onClick={previousPost}
                        // disabled={(slidingLeft || slidingRight) ? true : false}
                    >
                        <ArrowBackIos />
                    </IconButton>
                    <IconButton aria-label="next option" 
                        className={`${classes.home__top__display__forwardButton} 
                                    ${classes.home__top__display__directionalButton}
                                    // 
                                        // (slidingLeft || slidingRight) 
                                        // && 
                                        // classes.home__top__display__disabledButton
                                    // }
                                    `}
                        onClick={nextPost} 
                        disabled={(slidingLeft || slidingRight) ? true : false}
                    >
                        <ArrowForwardIos />
                    </IconButton>

                    <div className={`${classes.home__top__display__leftDisplay}
                             ${slidingRight && classes.home__top__display__slideRight}
                        `}>  
                        { slidingRight &&
                            <Display
                                poster={ topPosts[getPreviousPostIndex()].poster }
                                image={ topPosts[getPreviousPostIndex()].image }
                                mainText={ topPosts[getPreviousPostIndex()].mainText }
                                secondaryText={ topPosts[getPreviousPostIndex()].secondaryText }
                                path={ "/my-list" }    
                            />
                        }
                    </div>
                    <div className={`${classes.home__top__display__mainDisplay}
                             ${slidingLeft && classes.home__top__display__slideLeft}
                             ${slidingRight && classes.home__top__display__slideRight}
                        `}>
                        <Display
                            poster={ topPosts[selectedPostIndex].poster }
                            image={ topPosts[selectedPostIndex].image }
                            mainText={ topPosts[selectedPostIndex].mainText }
                            secondaryText={ topPosts[selectedPostIndex].secondaryText }
                            path={ "/my-list" }
                        />
                    </div>
                    <div className={`${classes.home__top__display__rightDisplay}
                             ${slidingLeft && classes.home__top__display__slideLeft}
                        `}>
                        { slidingLeft && 
                            <Display
                                poster={ topPosts[getNextPostIndex()].poster }
                                image={ topPosts[getNextPostIndex()].image }
                                mainText={ topPosts[getNextPostIndex()].mainText }
                                secondaryText={ topPosts[getNextPostIndex()].secondaryText }
                                path={ "/my-list" }    
                            />
                        }
                    </div>
                </div>
                <List className={classes.home__top__sidebar}>
                    {renderSidebarItems2()}
                </List>
            </div>
        </div>
        </StyledEngineProvider>
    ) 
}