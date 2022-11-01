import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function VideoPlayer(props) {
    const url = `http://www.youtube.com/embed/${props.link}`

    return (
        <>
            {/* https://www.youtube.com/watch?v=-HXF6GCAPuw */}
            <iframe className='ytIframe' allowtransparency="true" 
            title={url} crossOrigin="anonymous" width="100%" height="100%"
                src={url}>
            </iframe> 

        </>
    )
}
