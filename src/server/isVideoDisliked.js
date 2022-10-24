const isVideoDisliked = (url) => {
    let userList = JSON.parse(localStorage.getItem("userList")) || []
    let current = userList.find(e => e.is_logged)
    if (current) {
        return current.disliked_videos.find(e => e.url === url)
    } 
   
}

export default isVideoDisliked