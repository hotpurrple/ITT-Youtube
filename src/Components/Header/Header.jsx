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
import { useLocation, Link } from 'react-router-dom';

export default function Header() {

    const location = useLocation()
    let pageWithoutHeader = location.pathname.match(/login|register/gi)
    return (
        <>
           {!pageWithoutHeader &&  <header className='header'>
                <div className='headerLeft'>
                    <MenuIcon />
                    <Link to="/"><img className='ytlogo' src={YoutubeLogo} alt="logo" /></Link>
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
                   <Link to="/login"> <Button className='userButton' variant="outlined">
                        <AccountCircleIcon/>
                        Sign in</Button></Link>
                </div>
            </header>
 }
        </>

    )
}
