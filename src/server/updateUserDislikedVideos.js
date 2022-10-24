const updateUserDislikedVideos = (video) => {
    let userList = JSON.parse(localStorage.getItem("userList"))
    let current = userList.find(e => e.is_logged)
    if (current) {
        let isVideoDisliked = current.disliked_videos.find(e => e.url === video.url)
        let isVideoLiked = current.liked_videos.find(e => e.url === video.url)
        !isVideoDisliked ? 
        current.disliked_videos.push(video) : current.disliked_videos.splice(current.disliked_videos.indexOf(video), 1)
        isVideoLiked && current.liked_videos.splice(current.liked_videos.indexOf(video), 1)
        return localStorage.setItem("userList", JSON.stringify(userList))
    }
}

export default updateUserDislikedVideos