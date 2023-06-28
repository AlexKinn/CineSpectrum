  import React from "react";

import classes from "./MyList.module.scss";

function MyList() {

    return (
        <div className={classes.mylist}>
            <div className={classes.mylist__top}>

            </div>
          <div className={classes.mylist__main}>
            <div>
              
            </div>
            <h1 className={classes.mylist__title}>Website title</h1>
            <div className={classes.mylist__banner}>
              Banner
            </div>
            <ul className={classes.mylist__categories}>
              <li className={classes.mylist__category}>
                Shows and Movies
              </li>
              <li className={classes.mylist__category}>
                Shows
              </li>
              <li className={classes.mylist__category}>
                Movies
              </li>
            </ul>
            <div className={classes.mylist__options}>
              <ul className={classes.mylist__options__list}>
                <li className={classes.mylist__options__list__option}>
                  All Shows
                </li>
                <li className={classes.mylist__options__list__option}>
                  Currently Watching
                </li>
                <li className={classes.mylist__options__list__option}>
                  Completed
                </li>
                <li className={classes.mylist__options__list__option}>
                  On Hold
                </li>
                <li className={classes.mylist__options__list__option}>
                  Dropped
                </li>
                <li className={classes.mylist__options__list__option}>
                  Plan to Watch
                </li>
              </ul>
            </div>
            <div className={classes.mylist__listBlock}>
              <div className={classes.mylist__listContainer}>
                <div className={classes.mylist__listBlock__listInfo}>
                  <h1 className={classes.mylist__listTitle}>All shows</h1>
                  <ul className={classes.mylist__listHeaders}>
                    <li className={classes.mylist__listHeaders__header}>
                      #
                    </li>
                    <li className={classes.mylist__listHeaders__header}>
                      Image
                    </li>  
                    <li className={classes.mylist__listHeaders__header}>
                      Show title
                    </li>
                    <li className={classes.mylist__listHeaders__header}>
                      Score
                    </li>    
                  </ul>
                </div>
              </div>
                <div className={classes.mylist__items}>
                  <ul className={classes.mylist__list}>
                    <li className={classes.mylist__list__item}>
                      first
                    </li>
                    <li className={classes.mylist__list__item}>
                      second
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
    )
}

export default MyList;