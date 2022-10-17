import React from 'react'
import "./commentcard.css"
import CommentProfilePic from '../VideoComments/CommentProfilePic'
import Guest from "../VideoComments/guest.jpg"
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import dateCalculator from "../../utils/dateCalculator"

export default function CommentCard(props) {
    const {likeCount, publishedAt, authorDisplayName, textDisplay, authorProfileImageUrl} = props.props.snippet.topLevelComment.snippet
    const formattedDate = dateCalculator(publishedAt)
    return (
        <>
            <div className='commentCard'>
                <CommentProfilePic profilePic={authorProfileImageUrl} />
                <div className='commentCardInformation'>
                        <b>{authorDisplayName}</b> <span className='commentCardDate'>{formattedDate}</span>
                        <p className='commentText' dangerouslySetInnerHTML={{__html: textDisplay}}></p> 
                        {/* ^escapes html tags in the comments - not very secure(hence not a great practice), but we're brave. */}
                        <span className='commentLikeDislike'>
                            <span className='likeButtonLikeAmount'><ThumbUpOutlinedIcon fontSize="small"/>{likeCount}</span>
                            <ThumbDownOutlinedIcon fontSize="small"/>
                            <p className='commentCardReply'>REPLY</p>
                        </span>
                </div>
            </div>
        </>
    )
}
