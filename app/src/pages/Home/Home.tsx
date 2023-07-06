import React from "react";
import classes from "./Home.module.scss";
import SidebarItem from "./SidebarItem";
import { List, ListItem } from "@mui/material";


export default function Home() {

    
    return(
        <div className={classes.home}>
            <div className={classes.home__top}>
                <div className={classes.home__top__display}>
                    <a>
                        <img src="https://m.media-amazon.com/images/M/MV5BNjMxYjViZWYtZWZmNy00ZjVmLWJjMzAtNTIxNTFkZTRmMmU4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._CR7,159,2124,1195_QL75_UX500_CR0,0,500,281_.jpg" 
                        alt="display image" className={classes.home__top__display__img}/>
                    </a>
                </div>
                <List className={classes.home__top__sidebar}>
                    <ListItem className={classes.home__top__sidebar__sidebarItem}>
                        <SidebarItem 
                            image={"img1.jpg"}
                            mainText={"5 Things to Watch Now"}
                            secondaryText={"Here's What's Hot This Week"}
                        />                        
                    </ ListItem>
                </List>
            </div>
        </div>
    ) 
}