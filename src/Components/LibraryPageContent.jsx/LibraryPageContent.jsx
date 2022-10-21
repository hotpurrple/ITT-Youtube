import React from 'react'
import LibraryPageSection from './LibraryPageSection'
import "./librarypagecontent.css"
import { Divider } from '@mui/material'

export default function LibraryPageContent() {
    return (
        <>
            <div className='libraryPageContentWrapper'>
                <div className='libraryPageInnerSections'>
                    <div className='LikedSeenPlaylists'>
                    <LibraryPageSection className={"libraryPageSection"} name={"History"} />
                    <Divider/>
                    <LibraryPageSection className={"libraryPageSection"} name={"Liked Videos"} />
                    <Divider/>
                    <LibraryPageSection className={"libraryPageSection"} name={"Playlists"} />
                    <Divider/>
                    </div>
                </div>
            </div>
        </>
    )
}
