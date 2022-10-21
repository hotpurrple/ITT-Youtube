import React from 'react'
import Button from '@mui/material/Button';
import dateCalculator from '../../utils/dateCalculator.mjs'
import numberFormatter from '../../utils/numberFormatter'
import VideoPageCard from '../VideoPageCard/VideoPageCard.jsx';
import pseudoRecommended from '../../utils/pseudoRecommended.mjs';

export default function LibraryPageSection(props) {
    let arr = pseudoRecommended
    
    return (
        <>
            <div className='singleLibrarySection'>
                <div className='singleLibrarySectionHead'>
                    <div className='libraryIconAndTitle'>{props.icon} <h4>{props.name}</h4></div>
                    <div className='middledivplaceholder'></div>
                    <Button className='libraryButton' variant="text">SEE ALL</Button>
                </div>
                <div className='libraryVideoPageCards'>
                    {arr.map(e => {
                        return <VideoPageCard layoutClass="libraryPageCard" url={e.id.videoId} key={e.id.videoId} props={e.snippet} />
                    })}
                </div>
            </div>
        </>
    )
}
