import React from 'react'
import TextField from '@mui/material/TextField';
import "./login.css"
import GoogleLogo from "./googlelogo.png"
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';

export default function Login() {
    return (
        <>
            <div className='logincontainer'>
                <form className='loginform' action="">
                    <div className='loginmessage'>
                        <img src={GoogleLogo} alt="" />
                        <p>Sign in</p>
                        <p className='logincontinue'>to continue to youtube.</p>
                    </div>
                   <div className='logindetails'>
                   <TextField required InputLabelProps={{ required: false }} label='Username' />
                    <TextField required InputLabelProps={{ required: false }} label='Password' />
                    
                    <div className='regHref'>
                        <Link to="/register">Create account</Link>
                        <Button variant="contained">Log in</Button>
                    </div>
                   </div>
                </form>
            </div>
        </>
    )
}
