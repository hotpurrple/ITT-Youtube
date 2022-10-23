const updateUserLikedVideos = (video) => {
    let userList = JSON.parse(localStorage.getItem("userList"))
    let current = userList.find(e => e.is_logged)
    if (current) {
        let isVideoLiked = current.liked_videos.find(e => e.url === video.url)
        !isVideoLiked ? current.liked_videos.unshift(video) : current.liked_videos.splice(current.liked_videos.indexOf(video), 1)
        return localStorage.setItem("userList", JSON.stringify(userList))
    }
}

export const isCurrentVideoLiked = (video) => {
    let userList = JSON.parse(localStorage.getItem("userList")) || []
    let current = userList.find(e => e.is_logged)

    if (current) {
        return current.liked_videos.find(e => e.url === video.url)
    } else {
        return ""
    }

}
export default updateUserLikedVideos