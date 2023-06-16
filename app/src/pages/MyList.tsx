import React from "react";

import classes from "./MyList.module.scss";

function MyList() {

    return (
        <div className={classes.mylist}>
          <div className={classes.mylist__top}></div>
          <div className={classes.mylist__main}>
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
            <div className={classes["mylist__list-block"]}>
              <div className={classes.mylist__headers}>
                <ul className={classes.mylist__list}>
                  <li className={classes.mylist__item}>
                    first
                  </li>
                  <li className={classes.mylist__item}>
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