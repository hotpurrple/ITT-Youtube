const getAllUserLikesForAVideo = (video) => {

    let userList = JSON.parse(localStorage.getItem("userList")) || []
    let allLikes = userList.filter(e => e.liked_videos.some(ev => ev.url === video.url))
    return allLikes.length || 0
}

export default getAllUserLikesForAVideo