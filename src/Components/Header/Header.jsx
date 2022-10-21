import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import YoutubeLogo from "./ytlogo.png";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import { SearchBar } from "../";
import { mahniGo } from "../../store/loggedUser";

export default function Header() {
  const location = useLocation();

  let pageWithoutHeader = location.pathname.match(/login|register/gi);
  const user = useSelector((state) => state.loggedUser.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginFromHomePage = (ev) => {
    //if there's an active user, call the function to log out and update the state to 0 logged users
    if (user) {
      dispatch(mahniGo());
      return;
    }
    navigate("/login");
  };
  return (
    <>
      {!pageWithoutHeader && (
        <header className="header">
          <div className="headerLeft">
            <MenuIcon />
            <Link to={`/`}>
              <img className="ytlogo" src={YoutubeLogo} alt="logo" />
            </Link>
          </div>

          {/* <div className="headerCenter"> */}
          {/* <TextField
              id="outlined-basic"
              className="searchbar"
              size="small"
              placeholder="Search"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            /> */}
          <SearchBar />
          {/* </div> */}
          <div className="headerRight">
            <MoreVertIcon />
            <Button
              onClick={handleLoginFromHomePage}
              className="userButton"
              variant="outlined"
            >
              <AccountCircleIcon />
              {user ? <>Sign out</> : <>Sign in</>}
            </Button>
          </div>
        </header>
      )}
    </>
  );
}
