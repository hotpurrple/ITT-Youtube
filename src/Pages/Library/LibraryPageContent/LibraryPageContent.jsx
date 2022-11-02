import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { currentUser } from '../../../server/serverLogin.js';
import LibraryPageSection from './LibraryPageSection'
import "./librarypagecontent.css"
import { Divider } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RestoreIcon from '@mui/icons-material/Restore';

export default function LibraryPageContent() {
    const [vidHistory, setVidHistory] = useState([])
    const [likedVids, setLikedVids] = useState([])
    useEffect(() => {
        let current = currentUser()
        setVidHistory([...current.videos_history])
        setLikedVids([...current.liked_videos])
    }, [])
    return (
        <>
            <div className='libraryPageContentWrapper'>
                <div className='libraryPageInnerSections'>
                    <div className='LikedSeenPlaylists'>
                        <LibraryPageSection vidsToShow={vidHistory} icon={<RestoreIcon fontSize='large' />} className={"libraryPageSection"} name={"History"} />
                        <Divider />
                        <LibraryPageSection vidsToShow={likedVids} icon={<AccessTimeIcon fontSize='large' />} className={"libraryPageSection"} name={"Liked Videos"} />
                        <Divider />
                    </div>
                </div>
            </div>
        </>
    )
}
