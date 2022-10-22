const getAllUserLikesForAVideo = (url) => {

    let userList = JSON.parse(localStorage.getItem("userList")) || []
    let allLikes = userList.filter(e => e.liked_videos.some(ev => ev === url))
    return allLikes.length || 0
}

export default getAllUserLikesForAVideo