const isVideoDisliked = (video) => {
    let userList = JSON.parse(localStorage.getItem("userList")) || []
    let current = userList.find(e => e.is_logged)
    if (current) {
        return current.disliked_videos.find(e => e.url === video.url)
    } 
   
}

export default isVideoDisliked