import "./videoinformation.css"
import VideoButtons from "../VideoButtons/VideoButtons"
//fill with actual data

import React from 'react'

export default function VideoInformation(props) {
    const {title, views, creationDate, likes} = props.props
  return (
    <>
        <div className="videoInformationContainer">
            <div className="titleAndViews">
                <h4 className="videoTitle">{title}</h4>
                <p className="videoViews">{views} Views - {creationDate}</p>
                <VideoButtons likes={likes}/>
            </div>
        </div>
    </>
  )
}
