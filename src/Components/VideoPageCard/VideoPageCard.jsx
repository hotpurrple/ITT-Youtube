import React from 'react'
import "./videopagecard.css"
import { Link } from 'react-router-dom'
export default function VideoPageCard(props) {
    const {title, channelTitle} = props.props
    const thumbnail = props.props.thumbnails.medium.url
    let url = props.url 


    return (
        <>
           <Link to={`/video/:${url}`}> <div className='videoPageCard'>
                <div className='videoPageCardThumbnail'>
                <img src={thumbnail} alt="" />
                </div>
                <div className='videoPageCardDetails'>
                    <h3>{title}</h3>
                    <p>{channelTitle}</p>
                    <p>684K Views - 2 years ago</p>
                </div>
            </div></Link>
        </>
    )
}
