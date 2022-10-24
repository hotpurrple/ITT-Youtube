import "./videobuttons.css"
import SingleVideoButton from "./SingleVideoButton";
import React from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { isCurrentVideoLiked } from "../../server/updateUserLikedVideos";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import getAllUserLikesForAVideo from "../../server/getAllUserLikesForAVideo";
import isVideoDisliked from "../../server/isVideoDisliked";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useDispatch, useSelector } from "react-redux";
import { isVidDisliked, isVidLiked, setCurrentVideo } from "../../store/currentVideo";

export default function VideoButtons(props) {
    const currentVideo = useSelector(state => state.currentVideo.currentVideo)
    let currentVid = props.currentVid
    const url = useLocation().pathname.split("/videos/")[1]

    const [currentVidLiked, setCurrentVidLiked] = useState(null)
    const [currentVidDisliked, setCurrentVidDisliked] = useState(null)

    useEffect(() => {
        isCurrentVideoLiked(currentVid.url) ? setCurrentVidLiked(<ThumbUpAltIcon />) : setCurrentVidLiked(<ThumbUpOutlinedIcon />)
        isVideoDisliked(currentVid.url) ? setCurrentVidDisliked(<ThumbDownIcon />) : setCurrentVidDisliked(<ThumbDownOffAltOutlinedIcon />)
    }, [url, currentVid])


    const icons = [currentVidLiked, currentVidDisliked, <SendOutlinedIcon />,
        <PlaylistAddOutlinedIcon />,
        <MoreHorizOutlinedIcon />,
    ]


    let allUserLikes = getAllUserLikesForAVideo(currentVideo)
    const sumOfLikes = (Number(props.likes) + Number(allUserLikes)) || props.likes
    const names = [`${sumOfLikes}`, "Dislike", "Share", "Save"]
    return (
        <>
            <div className="videoButtons">
                {icons.map((e, i) => {
                    return <SingleVideoButton currentVid={currentVid} setCurrentVidDisliked={setCurrentVidDisliked} setCurrentVidLiked={setCurrentVidLiked}
                        key={i} index_number={i}
                        icon={e} name={names[i]} />
                })}
            </div>
        </>
    )
}
