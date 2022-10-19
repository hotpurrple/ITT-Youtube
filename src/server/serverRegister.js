export const registerUser = (username, password) => {
    const userList = JSON.parse(localStorage.getItem("userList")) || []

    return localStorage.setItem("userList", JSON.stringify([...userList, {
        username: username,
        password: password,
        "liked_videos": [],
        "videos_history": [],
        "liked_comments": [],
        "playlists": [],
        "is_logged": false
    }]))
}

export const doesUserExist = (username) => {
    const userList = JSON.parse(localStorage.getItem("userList")) || []
    const checker = new RegExp(username, "gi")
    return userList.find(e => e.username.match(checker))
}
