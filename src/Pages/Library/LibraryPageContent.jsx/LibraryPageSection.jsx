import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
// import pseudoRecommended from '../../utils/pseudoRecommended.mjs';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import VideoPageCard from '../../SingleVideoPage/Components/VideoPageCard/VideoPageCard';

export default function LibraryPageSection(props) {
    // let arr = pseudoRecommended
    const [arrLength, setArrLength] = useState(5)
    return (
        <>
            <div className='singleLibrarySection'>
                <div className='singleLibrarySectionHead'>
                    <div className='libraryIconAndTitle'>{props.icon} <h4>{props.name}</h4></div>
                    <div className='middledivplaceholder'></div>
                    <Button className='libraryButton' variant="text">SEE ALL</Button>
                </div>
                <div className='libraryVideoPageCards'>
                    {props.vidsToShow.slice(0,arrLength).map(e => {
                        return <VideoPageCard layoutClass="libraryPageCard" url={e.id.videoId} key={e.id.videoId} props={e.snippet} />
                    })}
                </div>
                <span className='libraryExpandControls'>
                <KeyboardArrowDownOutlinedIcon onClick={() => setArrLength(arrLength+5)} fontSize='large'/>
                <KeyboardArrowUpOutlinedIcon onClick={() => arrLength > 5 && setArrLength(arrLength-5)} fontSize='large'/>
                </span>
            </div>
        </>
    )
}
