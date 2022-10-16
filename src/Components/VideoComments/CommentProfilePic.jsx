import React from 'react'
import "./videocomments.css"

export default function CommentProfilePic(props) {
  return (
    <>
        <img className='profilePic' src={props.profilePic} alt="" />
    </>
  )
}
