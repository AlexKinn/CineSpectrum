import React, { useState } from "react";
import classes from "./Home.module.scss";
import SidebarItem from "./SidebarItem";
import { Card, CardActionArea, CardMedia, IconButton, List, ListItem } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";


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
        mainText: "5 Things to Watch Now",
        secondaryText: "Here's What's Hot This Week"
    }, 
    {
        poster: "wonkaPoster.jpg",
        image: "wonkaIMG.jpg",
        mainText: "Timothée Chalamet Stars in 'Wonka'",
        secondaryText: "Watch the First Trailer"
    }
];



export default function Home() {
    const [selectedPostIndex, setSelectedPostIndex] = useState(0);
    
    const nextPost = () => {
        if(selectedPostIndex == topPosts.length-1) {
            setSelectedPostIndex(0);
        }
        else {
            setSelectedPostIndex(selectedPostIndex+1);
        }
    }
    const previousPost = () => {
        if(selectedPostIndex == 0) {
            setSelectedPostIndex(topPosts.length-1);
        }
        else {
            setSelectedPostIndex(selectedPostIndex-1);
        }
    }
    const renderSidebarItems = () => {    
        topPosts.map((post) => {
            // if(index === selectedPostIndex) {
            //     return null;
            // }
            return(
                <SidebarItem 
                    key={post.mainText}
                    image={post.image}   
                    mainText={post.mainText}
                    secondaryText={post.secondaryText}
                />
            )
        })


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
    };
    
    
    return(
        <div className={classes.home}>
            <div className={classes.home__top}>
                <Card className={classes.home__top__display}>
                    <CardActionArea className={classes.home__top__display__imgContainer}>
                        <CardMedia className={classes.home__top__display__imgContainer__img}
                            component="img"
                            image={topPosts[selectedPostIndex].poster}
                            alt="mainImage"
                        />
                    </CardActionArea>
                    <IconButton aria-label="previous option"
                        className={`${classes.home__top__display__backButton} 
                                    ${classes.home__top__display__directionalButton}`}
                        onClick={previousPost}>
                        <ArrowBackIos />
                    </IconButton>
                    <IconButton aria-label="next option" 
                        className={`${classes.home__top__display__forwardButton} 
                                    ${classes.home__top__display__directionalButton}`}
                        onClick={nextPost} >
                        <ArrowForwardIos />
                    </IconButton>
                </Card>
                <List>
                    {renderSidebarItems}
                </List>
            </div>
        </div>
    ) 
}