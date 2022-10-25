import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./register.css";
import GoogleLogo from "../Login/googlelogo.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { registerUser } from "../../server/serverRegister";
import { doesUserExist } from "../../server/serverRegister";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import debounce from "lodash.debounce"
import { useState } from "react";
export default function Register() {
    const username = useRef();
    const password = useRef();
    const repeatPassword = useRef()
    const navigate = useNavigate()
    const [usernameInvalidReason, setUsernameInvalidReason] = useState("")
    const [passwordInvalidReason, setPasswordInvalidReason] = useState("")
    const [matchingPassCheck, setMatchingPassCheck] = useState("")
    const [userAlreadyExists, setUserAlreadyExists] = useState("")
    const [disabledButton, setDisabledButton] = useState(true)
    const [enableButton, setEnableButton] = useState({
        correctUsername: false,
        correctPassword: false,
        passesMatch: false
    })

    const shouldButtonBeEnabled = () => {
        const shouldButtonBeEnabled = Object.values(enableButton).every(e => e === true)
        shouldButtonBeEnabled ? setDisabledButton(false) : setDisabledButton(true)
    }
    const handleUserRegister = () => {
        if (doesUserExist(username.current.value)) {
            setUserAlreadyExists("USER ALREADY EXISTS")
            return;
        }
        registerUser(username.current.value, password.current.value);
        navigate("/login");
        
    };

    useEffect(() => {
        shouldButtonBeEnabled()   
    }, [enableButton])
  
    const validateRegisterPass = () => {
        let isPasswordValid =
            password?.current?.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
        if (!isPasswordValid) {
            setPasswordInvalidReason(`Password is not strong enough. Please make sure it's at least 6 characters long and it
            contains at least one number and special character.`)
            setEnableButton({...enableButton, correctPassword: false})

        } else {
            setPasswordInvalidReason("")
            setEnableButton({...enableButton, correctPassword: true})
        }
    }
    const validateRegisterName = (usernametest) => {
        let isUsernameValid = usernametest?.current?.value.match(/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/gi)
        if (!isUsernameValid) {
            setUsernameInvalidReason(`Invalid username. Please ensure it's 8-20 characters 
            long and lacks special characters and empty spaces.`)
            setEnableButton({...enableButton, correctUsername: false})
        } else {
            setUsernameInvalidReason("")
            setEnableButton({...enableButton, correctUsername: true})
        }
    }
  

    const doPassesMatch = (pass, repeat) => {
        let passwordtest = pass?.current?.value
        let repeatpassword = repeat?.current?.value
        let doPassesMatch = passwordtest.toLowerCase().trim() === repeatpassword.toLowerCase().trim()
        if (!doPassesMatch) {
            setMatchingPassCheck("Passwords don't match.")
            setEnableButton({...enableButton, passesMatch: false})

        } else {
            setMatchingPassCheck("")
            setEnableButton({...enableButton, passesMatch: true})
            
        }
        
        
    }
    const UpdateRegName = debounce(() => validateRegisterName(username), 1000)
    const UpdateRegPass = debounce(() => validateRegisterPass(password), 1000)
    const DoPasswordsMatch = debounce(() => doPassesMatch(password, repeatPassword), 1000)
    return (
        <>
            <div className="regcontainer">
                <form className="regform" action="">
                    <div className="regmessage">
                        <img src={GoogleLogo} alt="" />
                        <p>Welcome!</p>
                        <p className="regcontinue">Feel free to sign up.</p>
                        <Button color="error">{userAlreadyExists}</Button>
                    </div>
                    <div className="regdetails">
                        <TextField
                            onInput={UpdateRegName}
                            inputRef={username}
                            helperText={usernameInvalidReason}
                            error={usernameInvalidReason}
                            required
                            InputLabelProps={{ required: false }}
                            label="Username"
                        />
                        <TextField
                            inputRef={password}
                            required
                            type="password"
                            onInput={UpdateRegPass}
                            error={passwordInvalidReason}
                            helperText={passwordInvalidReason}
                            InputLabelProps={{ required: false }}
                            label="Password"
                        />
                        <TextField
                            required
                            inputRef={repeatPassword}
                            type="password"
                            onInput={DoPasswordsMatch}
                            InputLabelProps={{ required: false }}
                            helperText={matchingPassCheck}
                            error={matchingPassCheck}
                            label="Repeat password"
                        />

                        <div className="logHref">
                            <Link to="/login">Have an account?</Link>
                            <Button variant="contained" disabled={disabledButton} onClick={handleUserRegister}>
                                Register
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
