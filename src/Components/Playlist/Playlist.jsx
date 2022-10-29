import React, { useState } from "react";
import "./playlistPage.css";
import { Sidebar, PlaylistCard } from "..";
import Typography from "@mui/material/Typography";

import getPlaylistVideos from "../../server/getPlaylistVideos";
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
import deleteVideoFromPlaylist from "../../server/deleteVideoFromPlaylist";
import { useParams } from "react-router-dom"; //за да можем да вземем query search параметрите от search bar-а
import noVideosInPlaylist from "../../assets/images/noVideosInPlaylist.jpg";

//тук в props ще дойде името на плейлиста, по който ще бъдат открити видеата
export default function Playlist(props) {
  const { playlistName } = useParams();
  // console.log("Playlist name: " + playlistName);
  const user = useSelector((state) => state.loggedUser.user);

  const [currentPlaylistVideos, setCurrentPlaylistVideos] = useState(
    getPlaylistVideos(playlistName)
  );
  // console.log("Playlist videos: " + currentPlaylistVideos);

  const [playlistImage, setPlaylistImage] = useState(
    currentPlaylistVideos[0]?.snippet?.thumbnails?.high?.url
      ? currentPlaylistVideos[0].snippet.thumbnails.high.url
      : noVideosInPlaylist
  );
  // console.log("Playlist image: " + playlistImage);

  const [playlistVideosCount, setPlatlistVideosCount] = useState(
    currentPlaylistVideos.length > 0 ? currentPlaylistVideos.length : 0
  );
  // console.log("Playlist videos count: " + playlistVideosCount);

  const removeVideoFromPlaylist = (vidId) => {
    //!delete the video from the playlist
    deleteVideoFromPlaylist(playlistName, vidId);
    setCurrentPlaylistVideos(getPlaylistVideos(playlistName));
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
          <img
            src={
              playlistImage
                ? playlistImage
                : "https://images.gutefrage.net/media/fragen/bilder/meine-kamera-auf-windows-10-funktioniert-nicht-was-tun/0_big.jpg?v=1584606917000"
            }
            alt="somePic"
          ></img>
          <Typography variant="h5" color="initial" fontSize={"1.5vw"}>
            {playlistName}
          </Typography>
          <Typography variant="body2" color="initial" fontSize={"1vw"}>
            {playlistVideosCount ? playlistVideosCount : 0} videos
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
        {currentPlaylistVideos.length > 0 ? (
          currentPlaylistVideos.map((vid) => {
            return (
              <PlaylistCard
                key={vid.id.videoId}
                videoData={vid}
                removeVideoFromPlaylist={removeVideoFromPlaylist}
              />
            );
          })
        ) : (
          <div>No videos in that playlist</div>
        )}
      </div>
    </div>
  );
}
