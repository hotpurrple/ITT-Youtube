import React from 'react'
import "./videopagecard.css"
import { Link } from 'react-router-dom'
import dateCalculator from '../../utils/dateCalculator.mjs'
import numberFormatter from '../../utils/numberFormatter'

export default function VideoPageCard(props) {
    const {title, channelTitle, publishedAt} = props.props
    const formattedDate = dateCalculator(publishedAt)
    //api doesnt return recommended video views 
    const randomViews = numberFormatter(Math.floor(Math.random() * (900000 - 100 + 1)) + 100)
    const thumbnail = props.props.thumbnails.medium.url
    let url = props.url 


    return (
        <>
           <Link to={`/videos/${url}`}> <div className='videoPageCard'>
                <div className='videoPageCardThumbnail'>
                <img src={thumbnail} alt="" />
                </div>
                <div className='videoPageCardDetails'>
                    <h3>{title}</h3>
                    <p>{channelTitle}</p>
                    <p>{randomViews} Views - {formattedDate}</p>
                </div>
            </div></Link>
        </>
    )
}
