import React, { useState } from 'react';
import classes from "./MyListTopSection.module.scss";
import Option from './Option';


function MyListTopSection( {options, selectedOption, setSelectedOption} 
    : {options: string[], selectedOption: string, setSelectedOption: React.Dispatch<React.SetStateAction<string>>} ) {

    
    const renderOptions = (
        options.map((option)=> {
            return(
                <Option 
                    text={option}
                    onClick={(e: { preventDefault: () => void; }) => {
                        e.preventDefault();
                        setSelectedOption(option);
                    }}
                    className={selectedOption === option 
                        ? classes.top__options__list__selectedOption 
                        : classes.top__options__list__option
                    }
                />
            )
        })
    )

    const categories = [
        "Shows and Movies",
        "Shows",
        "Movies"
    ]
    const renderCategories = (
        categories.map((category) => {
            return(
                <li>
                    <button className={classes.top__categories__category}>
                        {category}
                    </button>
                </li>
            )
        })
    )

    


    return (
        <div className={classes.top}>
            <div className={classes.top__banner}>
              Banner
            </div>
            <ul className={classes.top__categories}>
                {renderCategories}
            </ul>
            <div className={classes.top__options}>
              <ul className={classes.top__options__list}>
                {renderOptions}
              </ul>
            </div>
        </div>
    )
}

export default MyListTopSection;