export default function createNewPlaylist(playlistTitle, theFirstVideo) {
  let userList = JSON.parse(localStorage.getItem("userList")); //взима всички юзъри
  let currentUser = userList.find((e) => e.is_logged); //търсим да вземем текущо логнатия

  if (currentUser) {
    //ако има логнат
    if (
      !currentUser.playlists.some(
        (playlist) => playlist.title === playlistTitle
      )
    ) {
      //ако няма плейлист с такова име
      currentUser.playlists.push({
        title: playlistTitle,
        videos: [theFirstVideo],
      });
    }
    return localStorage.setItem("userList", JSON.stringify(userList));
  }
}

/*

props.video = {
  "kind": "youtube#searchResult",
  "id": {
      "kind": "youtube#video",
      "videoId": "oMR0E1Yijvs"
  },
  "snippet": {
      "publishedAt": "2022-10-13T12:03:48Z",
      "channelId": "UCupvZG-5ko_eiXAupbDfxWw",
      "title": "Video reveals a major problem for new Russian soldiers",
      "description": "In a new video posted to social media, newly mobilized Russian soldiers are complaining about their lack of training before being ...",
      "thumbnails": {
          "default": {
              "url": "https://i.ytimg.com/vi/oMR0E1Yijvs/default.jpg",
              "width": 120,
              "height": 90
          },
          "medium": {
              "url": "https://i.ytimg.com/vi/oMR0E1Yijvs/mqdefault.jpg",
              "width": 320,
              "height": 180
          },
          "high": {
              "url": "https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg",
              "width": 480,
              "height": 360
          }
      },
      "channelTitle": "CNN",
      "liveBroadcastContent": "none",
      "publishTime": "2022-10-13T12:03:48Z"
  }
}

*/
