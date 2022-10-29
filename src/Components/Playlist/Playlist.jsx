import React, { useEffect, useState } from "react";
import "./playlistPage.css";
import { Sidebar, PlaylistCard } from "..";
import Typography from "@mui/material/Typography";

import { demoPlaylistIds } from "../../utils/constants";
import fetchFromApi from "../../utils/fetchFromAPI";
import getPlaylistVideos from "../../server/getPlaylistVideos";
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
import deleteVideoFromPlaylist from "../../server/deleteVideoFromPlaylist";
import { useParams } from "react-router-dom"; //за да можем да вземем query search параметрите от search bar-а

//тук в props ще дойде името на плейлиста, по който ще бъдат открити видеата
export default function Playlist(props) {
  const { playlistName } = useParams();
  console.log(playlistName);
  const user = useSelector((state) => state.loggedUser.user);

  const [currentPlaylistVideos, setCurrentPlaylistVideos] = useState(
    getPlaylistVideos(playlistName)
  );
  const [playlistImage, setPlaylistImage] = useState(
    currentPlaylistVideos[0].snippet.thumbnails.high.url
  );
  const [playlistTitle, setPlaylistTitle] = useState("Playlist 1");
  const [playlistVideosCount, setPlatlistVideosCount] = useState(
    currentPlaylistVideos.length
  );

  const removeVideoFromPlaylist = (vidId) => {
    //!delete the video from the playlist
    //!някаква ф-я
    deleteVideoFromPlaylist("Playlist 1", vidId);
    setCurrentPlaylistVideos(getPlaylistVideos("Playlist 1"));
  };

  return (
    <div className="playlistsPage">
      <Sidebar
        theClass={
          props.showSideBar
            ? `sidebar-menu-SearchFeed active`
            : `sidebar-menu-SearchFeed`
        }
      />
      <div className="playlistPageLeft">
        <div className="playlistMainCard">
          <img src={playlistImage} alt="somePic"></img>
          <Typography variant="h5" color="initial" fontSize={"1.5vw"}>
            {playlistTitle}
          </Typography>
          <Typography variant="body2" color="initial" fontSize={"1vw"}>
            {playlistVideosCount} videos
          </Typography>
          <Divider />
          <Typography
            className="playlistMainCardUsernameContainer"
            variant="h5"
            color="initial"
            fontSize={"1.5vw"}
          >
            User:
            {user.username}
          </Typography>
        </div>
      </div>

      <div className="playlistPageRight">
        {currentPlaylistVideos.map((vid) => {
          return (
            <PlaylistCard
              key={vid.id.videoId}
              videoData={vid}
              removeVideoFromPlaylist={removeVideoFromPlaylist}
            />
          );
        })}
      </div>
    </div>
  );
}

// {
//   "kind": "youtube#searchResult",
//   "id": {
//       "kind": "youtube#video",
//       "videoId": "_3tMxunybd8"
//   },
//   "snippet": {
//       "publishedAt": "2022-10-13T01:03:04Z",
//       "channelId": "UCBi2mrWuNuyYy4gbM6fU18Q",
//       "title": "New Russian attacks hit Zaporizhzhia and other parts of Ukraine",
//       "description": "New Russian attacks hit Ukraine, with the U.S. State Department confirming another American citizen has been killed fighting for ...",
//       "thumbnails": {
//           "default": {
//               "url": "https://i.ytimg.com/vi/_3tMxunybd8/default.jpg",
//               "width": 120,
//               "height": 90
//           },
//           "medium": {
//               "url": "https://i.ytimg.com/vi/_3tMxunybd8/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//           },
//           "high": {
//               "url": "https://i.ytimg.com/vi/_3tMxunybd8/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//           }
//       },
//       "channelTitle": "ABC News",
//       "liveBroadcastContent": "none",
//       "publishTime": "2022-10-13T01:03:04Z"
//   }
// }

//2.После правим PromiseAll със всяко едно videoId
// useEffect(() => {
//   Promise.all(
//     demoAlbum.videosIds.map((vidId) =>
//       fetchFromApi(
//         `/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${vidId}`
//       )
//     )
//   ).then((videosFromPlaylistRes) => {
//     setCurrentPlaylistVideos(videosFromPlaylistRes);
//     setPlaylistImage(
//       currentPlaylistVideos[0].items[0].snippet.thumbnails.high.url
//     );
//     setPlaylistTitle(demoAlbum.title);
//     setPlatlistVideosCount(currentPlaylistVideos.length);
//   });
// });
