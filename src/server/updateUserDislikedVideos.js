const updateUserDislikedVideos = (url) => {
    let userList = JSON.parse(localStorage.getItem("userList"))
    let current = userList.find(e => e.is_logged)
    if (current) {
        let isVideoDisliked = current.disliked_videos.find(e => e === url)
        !isVideoDisliked ? current.disliked_videos.push(url) : current.disliked_videos.splice(current.disliked_videos.indexOf(url), 1)
        return localStorage.setItem("userList", JSON.stringify(userList))
    }
}

export default updateUserDislikedVideos