const addToVideosHistory = (VIDEO_ID, PUBLISHED_AT, TITLE, THUMBNAIL_URL, CHANNEL_TITLE) => {
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
        }
    }
        currentUser.videos_history.unshift(videoDetails)
        return localStorage.setItem("userList", JSON.stringify(userList))
}
export default addToVideosHistory