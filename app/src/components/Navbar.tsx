import React, { useState, useEffect } from "react";
import classes from "./Navbar.module.scss";
import { Link, redirect } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Autocomplete, TextField } from "@mui/material";


const Navbar: React.FunctionComponent = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 1040 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  }

  const searchOptions = [
    { label: 'option1', id: 1},
    { label: 'option2', id: 2}
  ];
  const handleSearch = (event: SyntheticEvent<Element, Event>, value: { label: string; id: number; }) => {
    return redirect("/");
  }
  // (event: SyntheticEvent<Element, Event>, value: { label: string; id: number; } 

  return ( 
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__home}>
          LOGO
        </Link>
        { size.width >= 1040 &&
          // <div className={classes.header__content__nav__search}>
            <Autocomplete className={classes.header__content__nav__searchbar}
              disablePortal
              id="search-bar"
              onChange={handleSearch}
              options={searchOptions}
              renderInput={(params) => <TextField {...params} label="Movie" />}  
            />
          // </div>
        }
        <nav 
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 1040 ? classes.isMenu: ""
          }`}
        >
          <ul>
            <li>
              <Link to="/">Movies</Link>
            </li>
            <li>
              <Link to="/">Shows</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/my-list">My List</Link>
            </li>
          </ul>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <GiHamburgerMenu onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
          </div>
      </div>
    </header> 
  )
}

export default Navbar;