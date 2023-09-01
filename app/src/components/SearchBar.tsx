import React, { useState, useCallback, useEffect } from "react";
import classes from "./SearchBar.module.scss";
import { Autocomplete, Card, CardActionArea, CardContent, CardMedia, Divider, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TheMovieDBConfiguration } from "../TheMovieDBConfiguration";


function SearchBar() {
  const [searchInput, setSearchInput] = useState("");    
  const [searchOptions, setSearchOptions] = useState([]);
  const debounce = require('lodash.debounce');

  useEffect(() => {      
    const debouncedSearch = debounce((value: string) => { 
      searchForMedia();
    }, 300);
    debouncedSearch(searchInput);
    return () => {   // UNTESTED IF FUNCTION STILL RUNS AFTER COMPONENT UNMOUNTS
      debouncedSearch.cancel();
    };
  }, [searchInput]);

  const navigate = useNavigate();
  const handleSearch = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if(e.code != "Enter") {
      return;
    }   
    setSearchInput("");
    navigate("/my-list");
  };

  const searchForMedia = () => {
    if(!searchInput) {return;}
    const URL = process.env.REACT_APP_API_URL + "/search/" + searchInput;
    axios.get(URL)
    .then(response => setSearchOptions(response.data.results))
    .catch(error => console.error(error));
  };

  return(
    <Autocomplete className={classes.searchBar}
      disablePortal
      id="search-bar"
      getOptionLabel={(option) => option.title ?? option.name}
      renderOption={(props: any, option: any) => (
        <>
        <Card className={classes.searchBar__option}>
          <Link className={classes.searchBar__option__container}
            to={`/${option.media_type}/${option.id}`}
            state={{ mediaID: option.id }}
          >
            <CardMedia className={classes.searchBar__option__container__img}
              component="img"
              image={option.poster_path && TheMovieDBConfiguration.images.secure_base_url+'w342'+ option.poster_path}
              alt="poster"
            />  
            <CardContent className={classes.searchBar__option__container__text}>
              <Typography>
                {option.title ?? option.name}
              </Typography>
              <Typography>
                {option.release_date && option.release_date.split('-', 1)[0]}
                {option.first_air_date && option.first_air_date.split('-', 1)[0]}
              </Typography>
            </CardContent>
          </Link>
        </Card>
        <Divider sx={{ background: "rgb(200,200,200)" }} />
        </>

      )}
      onInputChange={(event, newInputValue) => setSearchInput(newInputValue)}
      open={!!searchInput}
      options={searchOptions}
      classes={{ paper: classes.paper }} 
      renderInput={(params) => (
        <TextField {...params} label="Search" onKeyDown={(e) => handleSearch(e)}
          value={searchInput}
        />
      )}
    />
  );
}

export default SearchBar;