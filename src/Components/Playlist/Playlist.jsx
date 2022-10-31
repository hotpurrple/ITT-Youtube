import React, { useState } from "react";
import "./playlistPage.css";
import { PlaylistCard } from "..";
import { Typography } from "@mui/material";

import getPlaylistVideos from "../../server/getPlaylistVideos";
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
import deleteVideoFromPlaylist from "../../server/deleteVideoFromPlaylist";
import deletePlaylist from "../../server/deletePlaylist";
import { useParams } from "react-router-dom"; //за да можем да вземем query search параметрите от search bar-а
import noVideosInPlaylist from "../../assets/images/noVideosInPlaylist.jpg";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

//тук в props ще дойде името на плейлиста, по който ще бъдат открити видеата
export default function Playlist(props) {
  const navigate = useNavigate();
  const { playlistName } = useParams();
  const [dialogShown, setDialogShown] = useState(false);
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

          <Button
            className="removeAlbumBtn"
            aria-label=""
            variant="outlined"
            sx={{
              color: "#ffffff",
              backgroundColor: "#ff4040",
              borderColor: "black",
              "&:hover": {
                backgroundColor: "#e00b0b",
                boxShadow: "none",
              },
            }}
            onClick={() => setDialogShown(true)}
          >
            Delete playlist
          </Button>

          <Dialog
            onClose={() => setDialogShown(!dialogShown)}
            open={dialogShown}
          >
            <DialogTitle>
              Are you sure that you want to delete the playlist?
            </DialogTitle>

            <Button
              variant="text"
              color="primary"
              onClick={() => {
                deletePlaylist(playlistName);
                //redirect to playlists
                navigate("/all-playlists");
              }}
            >
              Delete playlist
            </Button>
          </Dialog>
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
