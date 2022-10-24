export default function addVideoToExistingPlaylist(playlistTitle, theVideo) {
  let userList = JSON.parse(localStorage.getItem("userList")); //взима всички юзъри
  let currentUser = userList.find((e) => e.is_logged); //търсим да вземем текущо логнатия

  //ако има логнат
  if (currentUser) {
    //ако няма плейлист с такова видео вътре
    let thePlaylistInUser = currentUser.playlists.find(p=>p.title===playlistTitle);

    if (!thePlaylistInUser.videos.some(v => v.id.videoId === theVideo.id.videoId)) {
    thePlaylistInUser.videos.push(theVideo);
    }
    return localStorage.setItem("userList", JSON.stringify(userList));
  }
}
