import React, { useState } from 'react'
import Button from '@mui/material/Button';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import VideoPageCard from '../../SingleVideoPage/Components/VideoPageCard/VideoPageCard';
import { v4 as uuid } from 'uuid';

export default function LibraryPageSection(props) {
    const [arrLength, setArrLength] = useState(5)
    return (
        <>
            <div className='singleLibrarySection'>
                <div className='singleLibrarySectionHead'>
                    <div className='libraryIconAndTitle'>{props.icon} <h4>{props.name}</h4></div>
                    <div className='middledivplaceholder'></div>
                    <Button className='libraryButton' variant="text" onClick={() => setArrLength(5)}>SHRINK</Button>
                </div>
                <div className='libraryVideoPageCards'>
                    {props.vidsToShow.slice(0, arrLength).map(e => {
                        return <VideoPageCard layoutClass="libraryPageCard" url={e.id.videoId} key={uuid()} props={e.snippet} />
                    })}
                </div>
                <span className='libraryExpandControls'>
                    <KeyboardArrowDownOutlinedIcon onClick={() => setArrLength(arrLength + 5)} fontSize='large' />
                    <KeyboardArrowUpOutlinedIcon onClick={() => arrLength > 5 && setArrLength(arrLength - 5)} fontSize='large' />
                </span>
               
            </div>
        </>
    )
}
