import React, { useState } from "react";
import classes from "./SearchBar.module.scss";
import { Autocomplete, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const SearchBar: React.FunctionComponent = () => {
    const [searchInput, setSearchInput] = useState("");    
    const searchOptions = [
        { label: 'option1', id: 1},
        { label: 'option2', id: 2}
      ];

    const navigate = useNavigate();
    const handleSearch = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if(e.code != "Enter") {
          return;
        }   
        setSearchInput("");
        navigate("/my-list");
      }
    return(
        <Autocomplete className={classes.searchbar}
            disablePortal
            id="search-bar"
            options={searchOptions}
            classes={{ paper: classes.paper }}
            renderInput={(params) => (
            // <Link to="/my-list">
                <TextField {...params} label="Movie" onKeyDown={(e) => handleSearch(e)}
                value={searchInput}
                    onChange={(e) => {
                      setSearchInput(e.target.value)
                    }}
                  />
                // </Link>
              )}
        />
    );
}

export default SearchBar;