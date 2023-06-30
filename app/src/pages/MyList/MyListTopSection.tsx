import React, { useState } from 'react';
import classes from "./MyListTopSection.module.scss";
import Option from './Option';


function MyListTopSection() {
    const [selectedOption, setSelectedOption] = useState("All Shows");

    return (
        <div className={classes.top}>
            <div className={classes.top__banner}>
              Banner
            </div>
            <ul className={classes.top__categories}>
              <li className={classes.top__category}>
                Shows and Movies
              </li>
              <li className={classes.top__category}>
                Shows
              </li> 
              <li className={classes.top__category}>
                Movies
              </li>
            </ul>
            <div className={classes.top__options}>
              <ul className={classes.top__options__list}>
                <Option 
                    text={"All Shows"}
                    onClick={setSelectedOption}
                    className={classes.top__options__list__option}
                />
                <li>
                    <button className={classes.top__options__list__option}
                    onClick={() => {setSelectedOption("Currently Watching")}} >
                        Currently Watching
                    </button>
                </li>
                <li>
                    <button className={classes.top__options__list__option}
                    onClick={() => {setSelectedOption("Currently Watching")}} >
                        Completed
                    </button>
                </li>
                <li>
                    <button className={classes.top__options__list__option}
                    onClick={() => {setSelectedOption("Currently Watching")}} >
                        On Hold
                    </button>
                </li>
                <li>
                    <button className={classes.top__options__list__option}>
                        Dropped
                    </button>
                </li>
                <li>
                    <button className={classes.top__options__list__option}>
                        Plan to Watch
                    </button>
                </li>
              </ul>
            </div>
        </div>
    )
}

export default MyListTopSection;