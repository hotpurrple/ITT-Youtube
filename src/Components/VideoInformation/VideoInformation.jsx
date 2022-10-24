import "./videoinformation.css"
import VideoButtons from "../VideoButtons/VideoButtons"
//fill with actual data

import React, { useState } from 'react'

export default function VideoInformation(props) {
    const {title, views, creationDate, likes} = props.props
    let currentVid = props.currentVid
  return (
    <>
        <div className="videoInformationContainer">
            <div className="titleAndViews">
                <h4 className="videoTitle">{title}</h4>
                <p className="videoViews">{views} Views - {creationDate}</p>
                <VideoButtons currentVid={currentVid} likes={likes}/>
            </div>
        </div>
    </>
  )
}
