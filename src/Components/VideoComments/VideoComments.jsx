import React from 'react'
import "./videocomments.css"
import SortIcon from '@mui/icons-material/Sort';
import CommentProfilePic from './CommentProfilePic';
import Guest from "./guest.jpg"
import TextField from '@mui/material/TextField';
import CommentCard from "../CommentCard/CommentCard"

export default function VideoComments(props) {
    console.log(props);
    return (
        <>
            <div className='commentsWrapper'>
                <div className='personalComment'>
                    <div className='sortCommentsSection'>
                        <h4>122 Comments</h4>
                        <span className='commentSort'>{<SortIcon />} <h4>SORT BY</h4></span>
                    </div>

                    <div className='addCommentSection'>
                        <CommentProfilePic profilePic={Guest} />
                        <TextField className='addOwnComment' id="standard-basic" label="Add a comment..." variant="standard" />
                    </div>
                </div>
                <div className='otherComments'>
                    
                    {props.props.map((e,i) => {
                        return <CommentCard key={i} props={e}/>
                    })}
                   
                </div>
            </div>
        </>
    )
}
