import React from 'react'

export default function VideoPlayer(props) {
    const url = `http://www.youtube.com/embed/${props.link}`

    return (
        <>
            <iframe className='ytIframe' allowtransparency="true" 
            title={url} crossOrigin="anonymous" width="100%" height="100%"
                src={url}>
            </iframe> 

        </>
    )
}
