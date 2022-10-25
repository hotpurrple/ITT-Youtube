export default function deleteVideoFromPlaylist(playlisTitle, vidId) {
  let userList = JSON.parse(localStorage.getItem("userList")); //взима всички юзъри
  let currentUser = userList.find((e) => e.is_logged); //търсим да вземем текущо логнатия

  //ако има логнат
  if (currentUser) {
    let currentPlaylist = currentUser.playlists.find(
      (playlist) => playlist.title === playlisTitle
    );

    console.log(currentPlaylist);

    currentPlaylist.videos.splice(
      currentPlaylist.videos.findIndex((el) => el.id.videoId === vidId),
      1
    );

    return localStorage.setItem("userList", JSON.stringify(userList));
  }
}
