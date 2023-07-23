import React, { useState } from "react";
import classes from "./Home.module.scss";
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
            if(selectedPostIndex == topPosts.length-1) {
                setSelectedPostIndex(0);
            }
            else {
                setSelectedPostIndex(selectedPostIndex+1);
            }
            setSlidingLeft(false);
        }, 500)
    }
    const timeout = () => {

    }
    const previousPost = () => {
        setSlidingRight(false);
        if(selectedPostIndex == 0) {
            setSelectedPostIndex(topPosts.length-1);
        }
        else {
            setSelectedPostIndex(selectedPostIndex-1);
        }
    }
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
                    <div className={classes.home__top__display__leftDisplay}>
                        <Display
                            poster={ topPosts[selectedPostIndex].poster }
                            image={ topPosts[selectedPostIndex].image }
                            previousPost={ previousPost }
                            nextPost={ nextPost }
                        />
                    </div>
                    <div className={`${classes.home__top__display__mainDisplay}
                             ${slidingLeft && classes.home__top__display__slideLeft}
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
                            poster={ topPosts[selectedPostIndex+1].poster }
                            image={ topPosts[selectedPostIndex+1].image }
                            previousPost={previousPost}
                            nextPost={nextPost}
                        />}
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