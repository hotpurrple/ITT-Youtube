import React from 'react'
import LibraryPageSection from './LibraryPageSection'
import "./librarypagecontent.css"
import { Divider } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RestoreIcon from '@mui/icons-material/Restore';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

export default function LibraryPageContent() {
    return (
        <>
            <div className='libraryPageContentWrapper'>
                <div className='libraryPageInnerSections'>
                    <div className='LikedSeenPlaylists'>
                    <LibraryPageSection icon={<RestoreIcon fontSize='large'/>} className={"libraryPageSection"} name={"History"} />
                    <Divider/>
                    <LibraryPageSection icon={<AccessTimeIcon fontSize='large'/>} className={"libraryPageSection"} name={"Liked Videos"} />
                    <Divider/>
                    <LibraryPageSection icon={<PlaylistPlayIcon fontSize='large'/>} className={"libraryPageSection"} name={"Playlists"} />
                    <Divider/>
                    </div>
                </div>
            </div>
        </>
    )
}
