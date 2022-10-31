import { Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./playlistCard.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import * as AiIcons from "react-icons/ai";

export default function PlaylistCard({ videoData, removeVideoFromPlaylist }) {
  const [dialogShown, setDialogShown] = useState(false);
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

      <Dialog onClose={() => setDialogShown(!dialogShown)} open={dialogShown}>
        <DialogTitle> Are you sure that you want to delete it? </DialogTitle>

        <Button
          variant="text"
          color="primary"
          onClick={() => removeVideoFromPlaylist(videoData.id.videoId)}
        >
          Delete the video
        </Button>
      </Dialog>
    </div>
  );
}