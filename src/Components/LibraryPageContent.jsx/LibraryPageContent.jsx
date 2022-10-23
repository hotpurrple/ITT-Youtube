import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { currentUser } from '../../server/serverLogin.js';
import LibraryPageSection from './LibraryPageSection'
import "./librarypagecontent.css"
import { Divider } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RestoreIcon from '@mui/icons-material/Restore';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

export default function LibraryPageContent() {
    const videosHistory = useSelector(state => state.loggedUser.user.videos_history)
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
                    <LibraryPageSection vidsToShow={vidHistory} icon={<RestoreIcon fontSize='large'/>} className={"libraryPageSection"} name={"History"} />
                    <Divider/>
                    <LibraryPageSection vidsToShow={likedVids} icon={<AccessTimeIcon fontSize='large'/>} className={"libraryPageSection"} name={"Liked Videos"} />
                    <Divider/>
                    <LibraryPageSection vidsToShow={[]} icon={<PlaylistPlayIcon fontSize='large'/>} className={"libraryPageSection"} name={"Playlists"} />
                    <Divider/>
                    </div>
                </div>
            </div>
        </>
    )
}
