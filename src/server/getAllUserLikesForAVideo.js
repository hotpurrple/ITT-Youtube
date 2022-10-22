const getAllUserLikesForAVideo = (url) => {

    let userList = JSON.parse(localStorage.getItem("userList"))
    let allLikes = userList.filter(e => e.liked_videos.some(ev => ev === url))
    console.log(allLikes.length);
    return allLikes.length
}

export default getAllUserLikesForAVideo