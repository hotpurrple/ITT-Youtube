export default function getUserPlaylists() {
  if (localStorage.getItem("userList")) {
    let userList = JSON.parse(localStorage.getItem("userList")); //взима всички юзъри
    let currentUser = userList.find((e) => e.is_logged); //търсим да вземем текущо логнатия

    if (currentUser) {
      // console.log("тук не се насира");
      return currentUser.playlists;
    } else {
      // console.log("тук се насира");
      return null;
    }
  }
}
