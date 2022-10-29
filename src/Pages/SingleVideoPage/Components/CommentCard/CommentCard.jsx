import React, { useState } from 'react'
import "./commentcard.css"
import CommentProfilePic from '../VideoComments/CommentProfilePic'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import dateCalculator from '../../../../utils/dateCalculator.mjs';
import { isCommentDisliked, isCommentLiked } from '../../../../server/isCommentLiked';
import getUserCommentLikes  from '../../../../server/getUserCommentLikes';
import updateUserDislikedComments from "../../../../server/updateUserDislikedComments"
import updateUserLikedComments from "../../../../server/updateUserLikedComments"
export default function CommentCard(props) {
    const { likeCount, publishedAt, authorDisplayName, textDisplay, authorProfileImageUrl } = props.props.snippet.topLevelComment.snippet
    const formattedDate = dateCalculator(publishedAt)

    const handleUserLikeComment = (ev) => {
        updateUserLikedComments(props.props.id)
        if (isCommentDisliked(props.props.id)) {
            updateUserDislikedComments(props.props.id)
        }
        setIsDisliked(isCommentDisliked(props.props.id) ? dislikedIcon : notDislikedIcon)
        setIsLiked(isCommentLiked(props.props.id) ? likedIcon : notLikedIcon)

    }
    const handleUserDislikeComment = (ev) => {
        updateUserDislikedComments(props.props.id)
        if (isCommentLiked(props.props.id)) {
            updateUserLikedComments(props.props.id)
        }
        setIsLiked(isCommentLiked(props.props.id) ? likedIcon : notLikedIcon)
        setIsDisliked(isCommentDisliked(props.props.id) ? dislikedIcon : notDislikedIcon)

        // if (isCommentLiked(props.props.id)) {
        //     setIsLiked(notLikedIcon)
        // }
    }

    let notLikedIcon = <ThumbUpOutlinedIcon fontSize="small" />
    let likedIcon = <ThumbUpAltIcon fontSize="small" />
    let notDislikedIcon = <ThumbDownOutlinedIcon fontSize="small" />
    let dislikedIcon = <ThumbDownIcon fontSize="small" />
    const [isLiked, setIsLiked] = useState(isCommentLiked(props.props.id) ? likedIcon : notLikedIcon)
    const [isDisliked, setIsDisliked] = useState(isCommentDisliked(props.props.id) ? dislikedIcon : notDislikedIcon)
    let userCommentLikes = getUserCommentLikes(props.props.id)
    const totalLikesOfComment = parseInt(likeCount) + parseInt(userCommentLikes)
    return (
        <>
            <div className='commentCard'>
                <CommentProfilePic profilePic={authorProfileImageUrl} />
                <div className='commentCardInformation'>
                    <b>{authorDisplayName}</b> <span className='commentCardDate'>{formattedDate}</span>
                    <p className='commentText' dangerouslySetInnerHTML={{ __html: textDisplay }}></p>
                    {/* ^escapes html tags in the comments - not very secure(hence not a great practice), but we're brave. */}
                    <span className='commentLikeDislike'>
                        <span className='likeButtonLikeAmount' onClick={handleUserLikeComment}>
                            {isLiked} {totalLikesOfComment}</span>
                        <span onClick={handleUserDislikeComment} >{isDisliked}</span>
                        {/* <p className='commentCardReply'>REPLY</p> */}
                    </span>
                </div>
            </div>
        </>
    )
}
