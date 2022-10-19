export const logUser = (username) => {
    
    let userList = JSON.parse(localStorage.getItem("userList")) || []
    let current = userList.find(e => e.username == username)
    let notCurrent = userList.filter(e => e.username !== current.username)
    notCurrent = notCurrent.map(e => e.is_logged = false)
    current.is_logged = true;
    return localStorage.setItem("userList", JSON.stringify(userList))
}

export const logOutUsers = () => {
    let userList = JSON.parse(localStorage.getItem("userList")) || []
    userList.forEach(e => e.is_logged = false)
    return localStorage.setItem("userList", JSON.stringify(userList))

}

export const currentUser = () => {
    const userList = JSON.parse(localStorage.getItem("userList")) || []

    return userList.find(e => e.is_logged)
}