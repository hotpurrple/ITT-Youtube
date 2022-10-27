import React from 'react'
import TextField from '@mui/material/TextField';
import "./login.css"
import GoogleLogo from "./googlelogo.png"
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import { doesUserExist } from '../../server/serverRegister';
import { useRef } from "react"
import { useNavigate } from "react-router-dom";
import { logniGo } from '../../store/loggedUser';
import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react';

export default function Login() {
    const username = useRef()
    const password = useRef()
    const button = useRef()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [errormsg, setErrormsg] = useState("")
    const [disabled, setDisabled] = useState(true)
    const areFieldsEmpty = () => {
        username.current.value && password.current.value ? setDisabled(false) : setDisabled(true)
    }

    const handleUserLogin = (e) => {
        e.preventDefault()
        const current = doesUserExist(username.current.value)
        if (!current) {
            setErrormsg("USER DOESN'T EXIST")
        } else if (current.username !== username.current.value || current.password !== password.current.value) {
            setErrormsg("INCORRECT DETAILS")
        } else {
            dispatch(logniGo(current.username))
            navigate("/")
        }

    }
    return (
        <>
            <div className='logincontainer'>
                <form className='loginform' action="">
                    <div className='loginmessage'>
                        <img src={GoogleLogo} alt="" />
                        <p>Sign in</p>
                        <p className='logincontinue'>to continue to Youtube.</p>
                        <Button ref={button} color='error'>{errormsg}</Button>
                    </div>
                    <div className='logindetails'>
                        <TextField inputRef={username} onInput={areFieldsEmpty} required
                            InputLabelProps={{ required: false }} label='Username' />

                        <TextField type="password" inputRef={password} onInput={areFieldsEmpty} required
                            InputLabelProps={{ required: false }} label='Password' />

                        <div className='regHref'>
                            <Link to="/register">Create account</Link>
                            <Button disabled={disabled} variant="contained" onClick={handleUserLogin}>Log in</Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
