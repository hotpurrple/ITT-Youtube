
export const registerUser = (username, password) => {
    const userList = JSON.parse(localStorage.getItem("userList")) || []

    return localStorage.setItem("userList", JSON.stringify([...userList, {
        username: username,
        password: password,
        "profile_pic": "https://yt3.ggpht.com/a/default-user=s48-c-k-c0x00ffffff-no-rj",
        "liked_videos": [],
        "disliked_videos": [],
        "videos_history": [],
        "liked_comments": [],
        "disliked_comments": [],
        "playlists": [],
        "comments_list": [],
        "is_logged": false,

    }]))
}

export const doesUserExist = (username) => {
    const userList = JSON.parse(localStorage.getItem("userList")) || []
    const checker = new RegExp(username, "gi")
    return userList.find(e => e.username.match(checker))
}
