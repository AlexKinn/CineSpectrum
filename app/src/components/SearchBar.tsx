import React, { useState, useCallback, useEffect } from "react";
import classes from "./SearchBar.module.scss";
import { Autocomplete, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");    
  const [searchOptions, setSearchOptions] = useState(["mike", "matt"]);
  const debounce = require('lodash.debounce');


  useEffect(() => {       // UNTESTED IF FUNCTION STILL RUNS AFTER COMPONENT UNMOUNTS
    const debouncedSearch = debounce((value: string) => { 
      console.log("current value: " + value);
    }, 350);
    const changes = (value: string) => {
      debouncedSearch(value);
    };
    changes(searchInput);
    return () => {
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

  return(
    <Autocomplete className={classes.searchbar}
      disablePortal
      id="search-bar"
      renderOption={(props: object, option: any, state: object) => (
        <div className={classes.paper__options} {...props}>
          <Link className={classes.searchbar__link} to="my-list"> 
            {option.label}
          </Link>      
        </div>
      )}
      onInputChange={(event, newInputValue) => setSearchInput(newInputValue)}
      // onInputChange={inputDebounceHandler}
      open={!!searchInput}
      options={searchOptions}
      classes={{ paper: classes.paper }}
      renderInput={(params) => (
        <TextField {...params} label="Movie" onKeyDown={(e) => handleSearch(e)}
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value)
          }}
        />
      )}
    />
  );
}

export default SearchBar;