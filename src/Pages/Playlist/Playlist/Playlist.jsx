import React, { useState } from "react";
import "./playlistPage.css";
import { ConfirmationDialogComponent, PlaylistCard } from "../../../Components";
import { Typography } from "@mui/material";
import getPlaylistVideos from "../../../server/getPlaylistVideos";
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
import deleteVideoFromPlaylist from "../../../server/deleteVideoFromPlaylist";
import deletePlaylist from "../../../server/deletePlaylist";
import { useParams } from "react-router-dom";
import noVideosInPlaylist from "../../../assets/images/noVideosInPlaylist.jpg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Playlist() {
  const navigate = useNavigate();
  //!Взимаме името на плейлиста от url-то, чрез useParams
  const { playlistName } = useParams();
  const [dialogShown, setDialogShown] = useState(false);

  const user = useSelector((state) => state.loggedUser.user);

  //!Взимаме си видеата от плейлиста със съответното име
  const [currentPlaylistVideos, setCurrentPlaylistVideos] = useState(getPlaylistVideos(playlistName));

  //!главната картинка на картичката отляво - ако е празен албума, сложи default-ната снимка за празен албум
  const [playlistImage, setPlaylistImage] = useState(
    currentPlaylistVideos[0]?.snippet?.thumbnails?.high?.url
      ? currentPlaylistVideos[0].snippet.thumbnails.high.url
      : noVideosInPlaylist
  );

  //!Броят видеа е равен на дължината на масива с видеа
  const [playlistVideosCount, setPlaylistVideosCount] = useState(currentPlaylistVideos.length > 0 ? currentPlaylistVideos.length : 0);

  //!Триене на видео от текущия плейлист по id-то на видеото
  const removeVideoFromPlaylist = (vidId) => {
    //!delete the video from the playlist
    deleteVideoFromPlaylist(playlistName, vidId);
    //!сетни наново видеата от текущия плейлист, вече без изтритото
    setCurrentPlaylistVideos(getPlaylistVideos(playlistName));
  };

  //!Триене на текущо разглеждания плейлист по името му - след триенето му, трябва да се върнем на all-playlists
  const deleteCurrentPlaylist = () => {
    deletePlaylist(playlistName);
    navigate("/all-playlists");
  };

  return (
    <div className="playlistsPage">
      <div className="playlistPageLeft">
        <div className="playlistMainCard">
          <img src={playlistImage} alt="somePic"></img>
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

          <ConfirmationDialogComponent
            isOpen={dialogShown}
            question=" Are you sure that you want to delete the playlist?"
            buttonText="Delete playlist"
            onBtnClick={deleteCurrentPlaylist}
            setDialogShown={setDialogShown}
          />
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
