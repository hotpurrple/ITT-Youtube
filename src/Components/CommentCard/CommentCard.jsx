import React from 'react'
import "./commentcard.css"
import CommentProfilePic from '../VideoComments/CommentProfilePic'
import Guest from "../VideoComments/guest.jpg"
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

export default function CommentCard(props) {
    const {likeCount, publishedAt, authorDisplayName, textDisplay, authorProfileImageUrl} = props.props.snippet.topLevelComment.snippet
    return (
        <>
            <div className='commentCard'>
                <CommentProfilePic profilePic={authorProfileImageUrl} />
                <div className='commentCardInformation'>
                        <b>{authorDisplayName}</b> <span className='commentCardDate'>преди 3 години</span>
                        <p className='commentText'>{textDisplay}</p>
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
