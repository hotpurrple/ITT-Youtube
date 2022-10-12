import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import YoutubeLogo from "./ytlogo.png"
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Header() {
    return (
        <>
            <header className='header'>
                <div className='headerLeft'>
                    <MenuIcon />
                    <img className='ytlogo' src={YoutubeLogo} alt="logo" />
                </div>

                <div className="headerCenter">
                   <TextField id="outlined-basic" className='searchbar' size='small' placeholder='Search' variant="outlined" 
                   InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}/>
                </div>

                <div className='headerRight'>
                    <MoreVertIcon/>
                    <Button className='userButton' variant="outlined">
                        <AccountCircleIcon/>
                        Sign in</Button>
                </div>
            </header>

        </>

    )
}
