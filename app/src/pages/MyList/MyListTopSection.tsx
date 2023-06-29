import React from 'react';
import classes from "./MyListTopSection.module.scss";


function MyListTopSection() {

    return (
        <div className={classes.top}>
            <h1 className={classes.top__title}>Website title</h1>
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
                <li className={classes.top__options__list__option}>
                  All Shows
                </li>
                <li className={classes.top__options__list__option}>
                  Currently Watching
                </li>
                <li className={classes.top__options__list__option}>
                  Completed
                </li>
                <li className={classes.top__options__list__option}>
                  On Hold
                </li>
                <li className={classes.top__options__list__option}>
                  Dropped
                </li>
                <li className={classes.top__options__list__option}>
                  Plan to Watch
                </li>
              </ul>
            </div>
        </div>
    )
}

export default MyListTopSection;