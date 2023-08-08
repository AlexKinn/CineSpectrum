import React from 'react';
import classes from './ShowPage.module.scss';
import { useLocation } from 'react-router-dom';


function ShowPage() {

    let { state } = useLocation();

    return(
        <div className={classes.show}>
            <div className={classes.show__poster}>
                <img />
            </div>
            <h1>Page to display information for a certain show</h1>
        </div>
    )
}  

export default ShowPage;