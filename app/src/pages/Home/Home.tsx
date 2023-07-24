import React, { useState } from "react";
import classes from "./Home.module.scss";

// import variables from '../../styles/variables.scss';

import SidebarItem from "./SidebarItem";
import { Card, CardActionArea, CardMedia, IconButton, List, ListItem, StyledEngineProvider } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Display from "./Display";



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


    const renderSidebarItems = (    
        [...topPosts, ...topPosts].slice(selectedPostIndex+1, selectedPostIndex+5)
        .map((post, index) => {
            console.log("selectedPostIndex " + selectedPostIndex + " index " + index + " title " + topPosts[index].mainText)
            if(index === selectedPostIndex) {
                return null;
            }
            else {
                return(
                    <SidebarItem 
                        listKey={post.mainText}
                        image={post.image}   
                        mainText={post.mainText}
                        secondaryText={post.secondaryText}
                    />
                )
            }
        })
    );

    const renderSidebarItems2 = () => {
        const sidebarItems = [];
        for(let i=1; i<4; i++) {
            let currentIndex = (selectedPostIndex+i) % topPosts.length;
            // if(currentIndex === selectedPostIndex) { return null; }
            console.log("selectedPostIndex " + selectedPostIndex + " index " + currentIndex + " title " + topPosts[currentIndex].mainText)
            sidebarItems.push(
                <SidebarItem 
                    listKey={topPosts[currentIndex].mainText}
                    image={topPosts[currentIndex].image}   
                    mainText={topPosts[currentIndex].mainText}
                    secondaryText={topPosts[currentIndex].secondaryText}
                />
            )
        }
        return sidebarItems;
    };


        // const renderedList = [];
        // for(let i=0; i<topPosts.length; i++) {
        //     if(i === selectedPostIndex) {
        //         continue;
        //     }
        //     renderedList.add(
        //         <SidebarItem 
        //                 key={post.mainText}
        //                 image={post.image}   
        //                 mainText={post.mainText}
        //                 secondaryText={post.secondaryText}
        //             />
        //     )   
        // }
    
    
    return(
        <StyledEngineProvider injectFirst>
        <div className={classes.home}>
            <div className={classes.home__top}>
                <div className={classes.home__top__display}>
                    <IconButton aria-label="previous option"
                        className={`${classes.home__top__display__backButton} 
                                    ${classes.home__top__display__directionalButton}`}
                        onClick={previousPost}
                        disabled={(slidingLeft || slidingRight) ? true : false}
                    >
                        <ArrowBackIos />
                    </IconButton>
                    <IconButton aria-label="next option" 
                        className={`${classes.home__top__display__forwardButton} 
                                    ${classes.home__top__display__directionalButton}`}
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
                                previousPost={ previousPost }
                                nextPost={ nextPost }
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
                            previousPost={previousPost}
                            nextPost={nextPost}
                        />
                    </div>
                    <div className={`${classes.home__top__display__rightDisplay}
                             ${slidingLeft && classes.home__top__display__slideLeft}
                        `}>
                        { slidingLeft && 
                            <Display
                            poster={ topPosts[getNextPostIndex()].poster }
                            image={ topPosts[getNextPostIndex()].image }
                            previousPost={previousPost}
                            nextPost={nextPost}
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