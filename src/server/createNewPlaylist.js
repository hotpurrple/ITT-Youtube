function createNewPlaylist(playlistTitle) {
  let userList = JSON.parse(localStorage.getItem("userList")); //взима всички юзъри
  let currentUser = userList.find((e) => e.is_logged); //търсим да вземем текущо логнатия
  if (currentUser) {
    //ако има логнат

    if (!currentUser.playlists.some((playlist) => playlist.title === playlistTitle)) {
      //ако няма плейлист с такова име
      currentUser.plalysts.push({
        title: playlistTitle,
        videos: [],
      });
    }
    return localStorage.setItem("userList", JSON.stringify(userList));
  }
}
