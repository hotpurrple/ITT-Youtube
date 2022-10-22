import React, { useEffect, useState } from 'react'
import "./videocomments.css"
import SortIcon from '@mui/icons-material/Sort';
import CommentProfilePic from './CommentProfilePic';
import Guest from "./guest.jpg"
import TextField from '@mui/material/TextField';
import CommentCard from "../CommentCard/CommentCard"
import pseudoComments from "../../utils/pseudoComments"
import InfiniteScroll from 'react-infinite-scroll-component';
import fetchFromApi from '../../utils/fetchFromAPI';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useRef } from 'react';

export default function VideoComments(props) {

    const currentUser = useSelector(state => state.loggedUser.user)
    const [showAddCommentButton, setShowAddCommentButton] = useState(false)
    const [disabled, setDisabled] = useState(true)

    const navigate = useNavigate()
    const handleAddCommentFocus = () => {
        currentUser ? setShowAddCommentButton(true) : navigate("/login")
    }

    const [commentsList, setCommentsList] = useState({
        allItems: [],
        items: [],
        hasMore: true
    })
    const url = props.url
    
    useEffect(() => {
        setShowAddCommentButton(false)
        setDisabled(true)
    }, [url])

   
    const handleUserTypingComment = (ev) => {
        ev.target.value ? setDisabled(false) : setDisabled(true)
    }
    
    useEffect(() => {
        fetchFromApi(`/commentThreads?part=snippet&videoId=${url}&maxResults=100`)
            .then(data => {
                let arr = [...data.items]
                let partialArr = arr.slice(0, 15)
                setCommentsList({
                    allItems: [...arr],
                    items: [...partialArr],
                    hasMore: true
                })
            })
    }, [url])

    const loadmore = () => {
        if (commentsList.items.length >= 100) {
            setCommentsList({
                allItems: commentsList.allItems,
                items: commentsList.items,
                hasMore: false
            })
        } else {
            setTimeout(() => {
                let newArr = commentsList.allItems.slice(commentsList.items.length, commentsList.items.length + 15)
                setCommentsList({
                    allItems: commentsList.allItems,
                    items: [...commentsList.items, ...newArr],
                    hasMore: true
                })
                if (newArr.length < 15) {
                    setCommentsList({
                        allItems: commentsList.allItems,
                        items: commentsList.items,
                        hasMore: false
                    })
                }

            }, 3500)
        }

    }

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
                        <TextField onFocus={handleAddCommentFocus} onInput={handleUserTypingComment} 
                        className='addOwnComment' id="standard-basic" label="Add a comment..." variant="standard" />

                    </div>
                    {showAddCommentButton &&
                        <div className='AddCommentButtons'>
                            <Button onClick={() => setShowAddCommentButton(false)} variant="text">CANCEL</Button>
                            <Button disabled={disabled} variant="contained">COMMENT</Button>
                        </div>
                    }
                </div>


                <InfiniteScroll className='infiniteScroll'
                    dataLength={commentsList.items.length} //This is important field to render the next data
                    next={loadmore}
                    hasMore={commentsList.hasMore}
                    loader={<CircularProgress className='commentsScrollSpinner' size={20} color="inherit" />}
                    scrollThreshold={0.5}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Wouldn't it be better to read a book instead?</b>
                        </p>
                    }>
                    <div className='otherComments' >

                        {commentsList.items.map((e, i) => {
                            return <CommentCard key={i} props={e} />
                        })}
                    </div>
                </InfiniteScroll>


            </div>
        </>
    )
}
