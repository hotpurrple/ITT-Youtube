 const getUserCommentLikes = (COMMENT_ID) => {

    let userList = JSON.parse(localStorage.getItem("userList")) || []
    let commentLikeCount = userList.filter(e => e.liked_comments.some(ev => ev == COMMENT_ID))
    return commentLikeCount.length
}

export default getUserCommentLikes