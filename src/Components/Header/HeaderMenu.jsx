import React, { useState } from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Brightness3OutlinedIcon from "@mui/icons-material/Brightness3Outlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Menu from '@mui/material/Menu';
import gigafetcher from "../../utils/videoUpload";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logUserOut } from "../../store/loggedUser";


export default function HeaderMenu() {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    const user = useSelector((state) => state.loggedUser.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLoginFromHomePage = (ev) => {
        //if there's an active user, call the function to log out and update the state to 0 logged users
        if (user) {
            dispatch(logUserOut());
            return;
        }
        navigate("/login");
    };
    const handleClick = (e) => {
        setAnchorEl(e.target);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className="headerRight">
                <MoreVertIcon id="basic-button" onClick={handleClick} className="MoreVertIcon" />
                <Menu className="muiMenu"
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: 50, left: 1470 }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
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
                {/* <MoreVertIcon
                            className="MoreVertIcon"
                            onClick={() => setIsMenuShown(!isMenuShown)}
                        /> */}
                <Button
                    onClick={handleLoginFromHomePage}
                    className="userButton"
                    variant="outlined"
                >
                    <AccountCircleIcon />
                    {user ? <>Sign out</> : <>Sign in</>}
                </Button>
            </div>

        </>

    )
}
