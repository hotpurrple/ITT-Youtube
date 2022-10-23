export const isCommentLiked = (COMMENT_ID) => {
    let userList = JSON.parse(localStorage.getItem("userList")) || []
        let current = userList.find(e => e.is_logged)
        if (current) {
            return current.liked_comments.some(e => e === COMMENT_ID)
        }
    
}

export const isCommentDisliked = (COMMENT_ID) => {
    let userList = JSON.parse(localStorage.getItem("userList")) || []
    if (userList) {
        let current = userList.find(e => e.is_logged)
        if (current) {
            return current.disliked_comments.some(e => e === COMMENT_ID)
        }
    }
   
}