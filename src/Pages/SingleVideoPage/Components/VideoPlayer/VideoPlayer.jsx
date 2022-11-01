import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function VideoPlayer(props) {
    const url = `http://www.youtube.com/embed/${props.link}`
    const [element, setElement] = useState()

    useEffect(() => {
        setTimeout(() => {

        }, 6000)
    })

    return (
        <>
            <iframe className='ytIframe' allowtransparency="true"
                title={url} crossOrigin="anonymous" width="100%" height="100%"
                src={url}>
            </iframe>  :

        </>
    )
}
