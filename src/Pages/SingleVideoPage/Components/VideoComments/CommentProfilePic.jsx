import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./videocomments.css"

export default function CommentProfilePic(props) {
    const [currentPic, setCurrentPic] = useState(props.profilePic)

    return (
        <>
            <img
             onError={() => setCurrentPic("https://ae01.alicdn.com/kf/Hf6d83d35e5a6461cbf735788e2539295J/For-Small-Cat-Pet-Accessoires-Pet-Glasses-Photos-Props-Cat-Sunglasses-Pets-Party-Decor-Cat-Eye.jpg")} className='profilePic' src={currentPic} alt="" />
        </>
    )
}
