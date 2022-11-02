import { Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./playlistCard.css";
import * as AiIcons from "react-icons/ai";
import { ConfirmationDialogComponent } from "../";

export default function PlaylistCard({ videoData, removeVideoFromPlaylist }) {
  const [dialogShown, setDialogShown] = useState(false);
  const removeVideoFromCurrentPlaylist = () => {
    removeVideoFromPlaylist(videoData.id.videoId);
  };
  // console.log(videoData);
  return (
    <div className="playlistCard">
      <div className="playlistCardInnerDiv">
        <Link to={`/videos/${videoData.id.videoId}`}>
          <img
            className="playlistCardImg"
            src={videoData.snippet.thumbnails.high.url}
            alt="videoImage"
          ></img>
        </Link>

        <div className="playlistCardRightPart">
          <Link to={`/videos/${videoData.id.videoId}`}>
            <Typography
              variant="h5"
              className="playlistCardTitle"
              fontSize={"1.2vw"}
            >
              {videoData.snippet.title}
            </Typography>
          </Link>

          <Link to={`/channel/${videoData.snippet.channelId}`}>
            <Typography
              variant="subtitle2"
              className="playlistCardSubtitle"
              fontSize={"0.8vw"}
            >
              {videoData.snippet.channelTitle}
            </Typography>
          </Link>
        </div>
      </div>
      <IconButton
        className="removeAlbumBtn"
        aria-label=""
        onClick={() => setDialogShown(true)}
      >
        <AiIcons.AiFillDelete />
      </IconButton>

      <ConfirmationDialogComponent
        isOpen={dialogShown}
        question="Are you sure that you want to delete it?"
        buttonText="Delete the video"
        onBtnClick={removeVideoFromCurrentPlaylist}
        setDialogShown={setDialogShown}
      />
      
    </div>
  );
}
