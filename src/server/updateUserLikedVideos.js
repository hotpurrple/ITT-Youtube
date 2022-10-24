const updateUserLikedVideos = (video) => {
    let userList = JSON.parse(localStorage.getItem("userList"))
    let current = userList.find(e => e.is_logged)
    if (current) {
        let isVideoLiked = current.liked_videos.find(e => e.url === video.url)
        let isVideoDisliked = current.disliked_videos.find(e => e.url === video.url)
        !isVideoLiked ? current.liked_videos.unshift(video) : current.liked_videos.splice(current.liked_videos.indexOf(video), 1)
        isVideoDisliked && current.disliked_videos.splice(current.liked_videos.indexOf(video), 1)
        return localStorage.setItem("userList", JSON.stringify(userList))
    }
}

export const isCurrentVideoLiked = (url) => {
    let userList = JSON.parse(localStorage.getItem("userList")) || []
    let current = userList.find(e => e.is_logged)
    if (current) {
        return current.liked_videos.find(e => e.url === url)
    } 
    return ""
}
export default updateUserLikedVideos