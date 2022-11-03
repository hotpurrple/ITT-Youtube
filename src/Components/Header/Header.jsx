import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import YoutubeLogo from "./ytlogo.png";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from "../";
import { logUserOut } from "../../store/loggedUser";
import Dictaphone from "../SpeechRecognition/SpeechRecognition";


export default function Header(props) {
  const location = useLocation();

  let pageWithoutHeader = location.pathname.match(/login|register/gi);
  const user = useSelector((state) => state.loggedUser.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginFromHomePage = (ev) => {
    user ? dispatch(logUserOut()) : navigate("/login")
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
