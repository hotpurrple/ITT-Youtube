import React from 'react'
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from 'react-router-dom';

export default function YoureNotLoggedIn() {
    return (
        <>
            <div className='notLoggedIn'>
                <VideoLibraryOutlinedIcon className='VideoLibraryOutlinedIcon'/>
                <div>
                <p className='enjoy'>Enjoy your favorite videos</p>
                <p> Sign in to access videos that you’ve liked or saved </p>
                </div>
                <Link to={"/login"}>
                <Button
                    className="userButton"
                    variant="outlined"
                >
                    <AccountCircleIcon />
                    SIGN IN
                </Button></Link>
            </div>
        </>
    )
}
