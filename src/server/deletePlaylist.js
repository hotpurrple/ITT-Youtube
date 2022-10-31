export default function deletePlaylist(playlisTitle) {
  let userList = JSON.parse(localStorage.getItem("userList")); //взима всички юзъри
  let currentUser = userList.find((e) => e.is_logged); //търсим да вземем текущо логнатия

  //ако има логнат
  if (currentUser) {
    let currentPlaylist = currentUser.playlists.find(
      (playlist) => playlist.title === playlisTitle
    );

    console.log(currentPlaylist);

    currentUser.playlists.splice(
      currentUser.playlists.findIndex((pl) => pl.title === currentPlaylist),
      1
    );

    return localStorage.setItem("userList", JSON.stringify(userList));
  }
}
