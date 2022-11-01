import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import YoutubeLogo from "./ytlogo.png";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { SearchBar } from "../";
import { logUserOut } from "../../store/loggedUser";
import Brightness3OutlinedIcon from "@mui/icons-material/Brightness3Outlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Menu from "@mui/material/Menu";
import Dictaphone from "../SpeechRecognition/SpeechRecognition";


export default function Header(props) {
  const location = useLocation();

  let pageWithoutHeader = location.pathname.match(/login|register/gi);
  const user = useSelector((state) => state.loggedUser.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.target);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLoginFromHomePage = (ev) => {
    if (user) {
      dispatch(logUserOut());
      return;
    }
    navigate("/login");
  };
  return (
    <>
      {!pageWithoutHeader && (
        <header className="header">
          <div className="headerLeft">
            <IconButton onClick={props.handleMenuButtonClick}>
              <MenuIcon
                sx={{
                  color: "black",
                }}
              />
            </IconButton>
            <Link to={`/`}>
              <img className="ytlogo" src={YoutubeLogo} alt="logo" />
            </Link>
          </div>

          <SearchBar />
          <Dictaphone/>

          <div className="headerRight">
            <MoreVertIcon
              id="basic-button"
              onClick={handleClick}
              className="MoreVertIcon"
            />
            <Menu
              className="muiMenu"
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 50, left: 1470 }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <List className="muiList">
                <ListItemButton>
                  <ListItemIcon>
                    <Brightness3OutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Appearance: Light" />
                  <IconButton size="small">
                    <ArrowForwardIosIcon />
                  </IconButton>
                </ListItemButton>
              </List>
            </Menu>
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
