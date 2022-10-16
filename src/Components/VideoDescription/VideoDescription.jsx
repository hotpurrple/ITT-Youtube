import React from 'react'
import "./videodescription.css"
import Button from '@mui/material/Button';
//fill with actual data

export default function VideoDescription(props) {
    const {channelName, subsCount, channelThumbnail, shortDescription} = props.props
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
                        <Button variant="contained" color="error">
                            SUBSCRIBE
                        </Button>
                    </div>
                </div>
               <div className="descriptionTextWrapper">
               <div className="descriptionText">
                   {shortDescription}
                <h6>SHOW MORE</h6>
                </div>
               </div>
            </div>
        </>
    )
}
