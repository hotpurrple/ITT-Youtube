import React, { useState } from 'react'
import "./videodescription.css"

export default function VideoDescription(props) {
    const { channelName, subsCount, channelThumbnail, shortDescription } = props.props
    const [expandedDesc, setExpandedDesc] = useState(false)
    return (
        <>
            <div className='descriptionContainer'>
                <div className="channelInformation">
                    <div className="channelInformationLeft">
                        <img src={channelThumbnail} alt="" />
                        <div>
                            <h4>{channelName}</h4>
                            <p>{subsCount} Subscribers</p>
                        </div>
                    </div>
                    <div className="channelSubscribeArea">
                    </div>
                </div>
                <div className="descriptionTextWrapper">
                    <div className="descriptionText">
                        {!expandedDesc ? shortDescription?.slice(0, 200) : shortDescription}
                        <h6 className='showMoreButton' onClick={() => setExpandedDesc(!expandedDesc)}>{!expandedDesc 
                        ? "SHOW MORE" : "SHOW LESS"}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
