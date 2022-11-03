export default function getUserPlaylistsNames() {
  if (localStorage.getItem("userList")) {
    let userList = JSON.parse(localStorage.getItem("userList")); //взима всички юзъри
    let currentUser = userList.find((e) => e.is_logged); //търсим да вземем текущо логнатия

    if (currentUser) {
      return currentUser.playlists.map((playlist) => playlist.title);
    } else {
      return null;
    }
  }
}
