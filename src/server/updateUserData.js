const currentUser = () => {
    const userList = JSON.parse(localStorage.getItem("userList")) || []

    return userList.find(e => e.is_logged)
}



const addToVideosHistory = (VIDEO_ID, PUBLISHED_AT, TITLE, THUMBNAIL_URL, CHANNEL_TITLE, VIEWS) => {
    let is_anyone_logged = currentUser()
    if (is_anyone_logged) {
        let userList = JSON.parse(localStorage.getItem("userList"))
    let currentUser = userList.find(e => e.is_logged)
    let videoDetails = {
        "id": {
            "videoId": VIDEO_ID
        },
        "snippet": {
            "publishedAt": PUBLISHED_AT,
            "channelId": "UCoUk9iNey2e-g3XtnaNGlQA",
            "title": TITLE,

            "thumbnails": {
                "medium": {
                    "url": THUMBNAIL_URL,
                    "width": 320,
                    "height": 180
                }
            },
            "channelTitle": CHANNEL_TITLE,
            "views": VIEWS
        }
    }
        if (currentUser.videos_history.length === 0 || currentUser.videos_history[0].id.videoId !== VIDEO_ID) {
            currentUser.videos_history.unshift(videoDetails)
        }
        return localStorage.setItem("userList", JSON.stringify(userList))
    }
}
export default addToVideosHistory