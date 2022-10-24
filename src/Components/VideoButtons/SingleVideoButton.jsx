import React, { useRef } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { Divider } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useLocation } from 'react-router-dom';
import updateUserLikedVideos, { isCurrentVideoLiked } from '../../server/updateUserLikedVideos';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import updateUserDislikedVideos from '../../server/updateUserDislikedVideos';
import isVideoDisliked from '../../server/isVideoDisliked';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useDispatch, useSelector } from "react-redux"
import { dislikeCurrentVideo, likeCurrentVideo } from '../../store/currentVideo';

export default function SingleVideoButton(props) {
    const { name, icon, index_number } = props
    const [dialogShown, setDialogShown] = useState(false)
    const location = useLocation()
    const url = location.pathname.split("/videos/")[1]
    const currentVideo = useSelector(state => state.currentVideo)
    let currentVid = props.currentVid
    const videoButtonFunction = () => {
        switch (index_number) {
            case 0:
                updateUserLikedVideos(currentVid)
                isCurrentVideoLiked(currentVid.url) ? props.setCurrentVidLiked(<ThumbUpAltIcon />) :
                props.setCurrentVidLiked(<ThumbUpOutlinedIcon />)
                props.setCurrentVidDisliked(<ThumbDownOffAltOutlinedIcon />)
                return
            case 1:
                updateUserDislikedVideos(currentVid)
                isVideoDisliked(currentVid.url) ? props.setCurrentVidDisliked(<ThumbDownIcon />) :
                    props.setCurrentVidDisliked(<ThumbDownOffAltOutlinedIcon />)
                props.setCurrentVidLiked(<ThumbUpOutlinedIcon />)
                return
            case 3:
                return setDialogShown(!dialogShown)
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
                <Divider />
                <div className='videoDialogPlaylists'>
                    <FormControlLabel control={<Checkbox />} label="Playlist 1" />
                    <FormControlLabel control={<Checkbox />} label="Playlist 2" />
                    <FormControlLabel control={<Checkbox />} label="Playlist 3" />

                </div>
            </Dialog>

        </>
    )
}
