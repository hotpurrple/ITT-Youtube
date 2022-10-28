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
import AddUserComment, { GetUserComments, UserComment } from '../../server/addUserComment.mjs';
import { useRef } from 'react';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from '@mui/material/Menu';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ElderlyWomanIcon from '@mui/icons-material/ElderlyWoman';

export default function VideoComments(props) {

    const url = props.url
    const commentTextField = useRef()
    const currentUser = useSelector(state => state.loggedUser.user)
    const [showAddCommentButton, setShowAddCommentButton] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.target);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [sortCommentsBy, setSortCommentsBy] = useState("Newest")
    useEffect(() => {
        switch (sortCommentsBy) {
            case "Liked":
                setCommentsList({
                    allItems: commentsList.allItems
                        .sort((a, b) => b.snippet.topLevelComment.snippet.likeCount - a.snippet.topLevelComment.snippet.likeCount),
                    items: commentsList.allItems.slice(0, 15),
                    hasMore: commentsList.hasMore
                })
                break;
            case "Newest":
                setCommentsList({
                    allItems: commentsList.allItems
                        .sort((a, b) => new Date(b.snippet.topLevelComment.snippet.publishedAt)
                            - new Date(a.snippet.topLevelComment.snippet.publishedAt)),
                    items: commentsList.allItems.slice(0, 15),
                    hasMore: commentsList.hasMore
                })
                break;
            case "Oldest":
                setCommentsList({
                    allItems: commentsList.allItems
                        .sort((a, b) => new Date(a.snippet.topLevelComment.snippet.publishedAt)
                            - new Date(b.snippet.topLevelComment.snippet.publishedAt)),
                    items: commentsList.allItems.slice(0, 15),
                    hasMore: commentsList.hasMore
                })
                break;
        }
    }, [sortCommentsBy])


    const navigate = useNavigate()
    const handleAddCommentFocus = () => {
        currentUser ? setShowAddCommentButton(true) : navigate("/login")
    }

    const addNewComment = () => {
        let pfp = currentUser.profile_pic
        let username = currentUser.username
        let time = new Date()
        let text = commentTextField.current.value
        let likes = 0
        AddUserComment(url, text, username, pfp, likes, time)
        setCommentsList({
            ...commentsList,
            items: [UserComment(url, text, username, pfp, likes, time), ...commentsList.items],
        })
        commentTextField.current.value = ""
        setShowAddCommentButton(false)
    }

    const [commentsList, setCommentsList] = useState({
        allItems: [],
        items: [],
        hasMore: true
    })

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
                    items: [...GetUserComments(url), ...partialArr],
                    hasMore: true
                })
            })
    }, [url])

    const loadmore = () => {
        if (commentsList.items.length >= 100) {
            setCommentsList({
                ...commentsList,
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
                       ...commentsList,
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
                        <span className='commentSort'>{<SortIcon />}
                            <h4 id="basic-button" onClick={handleClick} className="MoreVertIcon" >SORT BY</h4></span>
                        <Menu 
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <List className="">
                                <ListItemButton onClick={(e) => setSortCommentsBy("Liked")}>
                                    <ListItemIcon>
                                        <ThumbUpAltIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Liked" />
                                </ListItemButton>

                                <ListItemButton onClick={(e) => setSortCommentsBy("Newest")}>
                                    <ListItemIcon>
                                        <FiberNewIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Newest" />
                                </ListItemButton>

                                <ListItemButton onClick={(e) => setSortCommentsBy("Oldest")}>
                                    <ListItemIcon>
                                        <ElderlyWomanIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Oldest" />
                                </ListItemButton>
                            </List>
                        </Menu>
                    </div>

                    <div className='addCommentSection'>
                        <CommentProfilePic profilePic={Guest} />
                        <TextField inputRef={commentTextField} onFocus={handleAddCommentFocus} onInput={handleUserTypingComment}

                            className='addOwnComment' id="standard-basic" label="Add a comment..." variant="standard" />

                    </div>
                    {showAddCommentButton &&
                        <div className='AddCommentButtons'>
                            <Button onClick={() => setShowAddCommentButton(false)} variant="text">CANCEL</Button>
                            <Button onClick={addNewComment} disabled={disabled} variant="contained">COMMENT</Button>
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
                            <b>You read them all. Very productive.</b>
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
