import React from "react";
import classes from "./MyList.module.scss";
import MyListTopSection from "./MyListTopSection";


function MyList() {

    return (  
      <div className={classes.mylist}>
          <div className={classes.mylist__background}></div>
        <div className={classes.mylist__main}>
          <h1 className={classes.mylist__title}>Website title</h1>
          <MyListTopSection />
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