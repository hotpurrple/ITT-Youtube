const updateUserDislikedComments = (COMMENT_ID) => {
    let userList = JSON.parse(localStorage.getItem("userList") || [])
    let current = userList.find(e => e.is_logged)
    if (current) {
        let isCommentDisliked = current.disliked_comments.find(e => e == COMMENT_ID)
        !isCommentDisliked ? current.disliked_comments.push(COMMENT_ID) : 
        current.disliked_comments.splice(current.disliked_comments.indexOf(COMMENT_ID), 1) 
    }
    return localStorage.setItem("userList", JSON.stringify(userList))
}

export default updateUserDislikedComments