const updateUserLikedComments = (COMMENT_ID) => {
    let userList = JSON.parse(localStorage.getItem("userList") || [])
    let current = userList.find(e => e.is_logged)
    if (current) {
        let isCommentLiked = current.liked_comments.find(e => e == COMMENT_ID)
        !isCommentLiked ? current.liked_comments.push(COMMENT_ID) : 
        current.liked_comments.splice(current.liked_comments.indexOf(COMMENT_ID), 1) 
    }
    return localStorage.setItem("userList", JSON.stringify(userList))
}

export default updateUserLikedComments