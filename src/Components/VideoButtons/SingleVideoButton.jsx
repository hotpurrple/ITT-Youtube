import React, { useRef } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { Divider } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function SingleVideoButton(props) {
    const { name, icon } = props
    const [dialogShown, setDialogShown] = useState(false)
    
    const videoButtonFunction = () => {
        switch (name) {
            case "Save":
                setDialogShown(!dialogShown)
                break;
        }

     
    }
    return (
        <>
            <span className="singleVideoButton" onClick={videoButtonFunction}>
                {icon}
                <h4>{name}</h4>
            </span>
            <Dialog className='modalDialog' onClose={() => setDialogShown(!dialogShown)} open={dialogShown}>
                <DialogTitle>Save to...</DialogTitle>
                <Divider/>
                <div className='videoDialogPlaylists'>
                <FormControlLabel control={<Checkbox  />} label="Playlist 1" />
                <FormControlLabel control={<Checkbox  />} label="Playlist 2" />
                <FormControlLabel control={<Checkbox  />} label="Playlist 3" />

                </div>
            </Dialog>

        </>
    )
}
