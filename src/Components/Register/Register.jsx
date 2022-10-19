import React from 'react'
import TextField from '@mui/material/TextField';
import "./register.css"
import GoogleLogo from "../Login/googlelogo.png"
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';
import {registerUser} from '../../server/serverRegister';
import {doesUserExist} from "../../server/serverRegister"
import {useRef} from "react"

export default function Register() {
    const username = useRef()
    const password = useRef()
    const handleUserRegister = () => {
        if (doesUserExist(username.current.value)) {
            alert("You already exist!")
            return
        }
        registerUser(username.current.value, password.current.value)
    }
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
                   <TextField inputRef={username} required InputLabelProps={{ required: false }} label='Username' />
                    <TextField inputRef={password} required InputLabelProps={{ required: false }} label='Password' />
                    <TextField required InputLabelProps={{ required: false }} label='Repeat password' />

                    
                    <div className='logHref'>
                        <Link to="/login">Have an account?</Link>
                        <Button variant="contained" onClick={handleUserRegister}>Register</Button>
                    </div>
                   </div>
                </form>
            </div>
    </>
)
}
