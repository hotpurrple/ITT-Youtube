const currentUser = () => {
    const userList = JSON.parse(localStorage.getItem("userList")) || []

    return userList.find(e => e.is_logged)
}

export const UserComment = (VIDEO_URL, TEXT_DISPLAY, AUTHOR_DISPLAY_NAME, AUTHOR_PROFILE_PIC, LIKE_COUNT, PUBLISHED_AT) => {

    let obj = {
        "videoUrl": VIDEO_URL,
        "snippet": {
            "topLevelComment": {
                "snippet": {
                    "textDisplay": TEXT_DISPLAY,
                    "authorDisplayName": AUTHOR_DISPLAY_NAME,
                    "authorProfileImageUrl": AUTHOR_PROFILE_PIC,
                    "likeCount": LIKE_COUNT,
                    // "publishedAt": "2022-10-18T13:22:50Z",
                    "publishedAt": PUBLISHED_AT
                }
            }
        }
    }
    return obj
}

const AddUserComment = (VIDEO_URL, TEXT_DISPLAY, AUTHOR_DISPLAY_NAME, AUTHOR_PROFILE_PIC, LIKE_COUNT, PUBLISHED_AT) => {
    let userList = JSON.parse(localStorage.getItem("userList"))
    let current = userList.find(e => e.is_logged)
    let obj = UserComment(VIDEO_URL, TEXT_DISPLAY, AUTHOR_DISPLAY_NAME, AUTHOR_PROFILE_PIC, LIKE_COUNT, PUBLISHED_AT)
    current.comments_list.unshift(obj)
    return localStorage.setItem("userList", JSON.stringify(userList))
}

export const GetUserComments = () => {
    let is_anyone_logged = currentUser()
    if (is_anyone_logged) {
        let userList = JSON.parse(localStorage.getItem("userList"))
        let current = userList.find(e => e.is_logged)
        return current.comments_list
    }
}

export default AddUserComment

