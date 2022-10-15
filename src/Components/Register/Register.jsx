import React from 'react'
import TextField from '@mui/material/TextField';
import "./register.css"
import GoogleLogo from "../Login/googlelogo.png"
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';

export default function Register() {
  return (

    <>
        <div className='regcontainer'>
                <form className='regform' action="">
                    <div className='regmessage'>
                        <img src={GoogleLogo} alt="" />
                        <p>Welcome!</p>
                        <p className='regcontinue'>Feel free to sign up.</p>
                    </div>
                   <div className='regdetails'>
                   <TextField required InputLabelProps={{ required: false }} label='Username' />
                    <TextField required InputLabelProps={{ required: false }} label='Password' />
                    <TextField required InputLabelProps={{ required: false }} label='Repeat password' />

                    
                    <div className='logHref'>
                        <Link to="/login">Have an account?</Link>
                        <Button variant="contained">Register</Button>
                    </div>
                   </div>
                </form>
            </div>
    </>
)
}
