const updateUserLikedVideos = (url) => {
    let userList = JSON.parse(localStorage.getItem("userList"))
    let current = userList.find(e => e.is_logged)
    if (current) {
        let isVideoLiked = current.liked_videos.find(e => e === url)
        !isVideoLiked ? current.liked_videos.push(url) : current.liked_videos.splice(current.liked_videos.indexOf(url), 1)
        return localStorage.setItem("userList", JSON.stringify(userList))
    }
}

export const isCurrentVideoLiked = (url) => {
    let userList = JSON.parse(localStorage.getItem("userList")) || []
    let current = userList.find(e => e.is_logged)

    if (current) {
        return current.liked_videos.find(e => e === url)
    } else {
        return ""
    }

}
export default updateUserLikedVideos