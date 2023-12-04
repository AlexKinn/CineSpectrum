import React, { useState } from "react";
import classes from "./MyList.module.scss";
import MyListTopSection from "./MyListTopSection";
import { MyListMovieCard } from "../../components/MyListMovieCard";
import { MovieWithRating } from "../../interfaces/MovieWithRating";


function MyList() {

  const options = [
    "All Shows",
    "Currently Watching",
    "Completed",
    "On Hold",
    "Dropped",
    "Plan to Watch"
  ]
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const exampleMovie : MovieWithRating = {
    posterPath: "/Ag3D9qXjhJ2FUkrlJ0Cv1pgxqYQ.jpg",
    title: "The Marvels",
    rating: 7.5
  }

    return (  
      <div className={classes.mylist}>
          <div className={classes.mylist__background}></div>
        <div className={classes.mylist__main}>
          <h1 className={classes.mylist__title}>Website title</h1>
          <MyListTopSection setSelectedOption={setSelectedOption} options={options}
          selectedOption={selectedOption}/>
          <div className={classes.mylist__listBlock}>
            <div className={classes.mylist__listContainer}>
              <div className={classes.mylist__listBlock__listInfo}>
                <h1 className={classes.mylist__listTitle}> { selectedOption } </h1>
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
                    <MyListMovieCard {...exampleMovie}/>
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