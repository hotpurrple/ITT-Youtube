import "./videobuttons.css"
import SingleVideoButton from "./SingleVideoButton";
import React from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

export default function VideoButtons(props) {
    const icons = [<ThumbUpOutlinedIcon />, <ThumbDownOffAltOutlinedIcon />, <SendOutlinedIcon />, <PlaylistAddOutlinedIcon />,
    <MoreHorizOutlinedIcon />
    ]
    const likeAmount = props.likes
    const names = [`${props.likes}`, "Dislike", "Share", "Save"]
    return (
        <>
            <div className="videoButtons">
                {icons.map((e,i) => {
                    return <SingleVideoButton key={i} icon={icons[i]} name={names[i]}/>
                })}
            </div>
        </>
    )
}
