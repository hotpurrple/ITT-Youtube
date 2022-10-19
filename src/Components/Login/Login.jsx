import React from 'react'
import TextField from '@mui/material/TextField';
import "./login.css"
import GoogleLogo from "./googlelogo.png"
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';
import { doesUserExist } from '../../server/serverRegister';
import {useRef} from "react"
import { useNavigate } from "react-router-dom";
import { logniGo } from '../../store/loggedUser';
import {useDispatch, useSelector} from "react-redux"

export default function Login() {
    const username = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleUserLogin = (e) => {
        e.preventDefault()
        //checks if there's any user with such username in localstorage
        if (!doesUserExist(username.current.value)) {
            alert("User doesn't exist!")
            return
        }
        //if there is - set his is_logged property to true and make him the current user
        dispatch(logniGo(username.current.value))
        navigate("/")

    }
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
                   <TextField inputRef={username} required InputLabelProps={{ required: false }} label='Username' />
                    <TextField inputRef={password} required InputLabelProps={{ required: false }} label='Password' />
                    
                    <div className='regHref'>
                        <Link to="/register">Create account</Link>
                        <Button variant="contained" onClick={handleUserLogin}>Log in</Button>
                    </div>
                   </div>
                </form>
            </div>
        </>
    )
}
