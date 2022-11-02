import React from "react";
import "./playlistsPlaylistCard.css";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import noVideosInPlaylist from "../../assets/images/noVideosInPlaylist.jpg";

function PlaylistsPlaylistCard({ pListData }) {
  if (pListData.videos[0]) {
    return (
      <div className="pListCard">
        <Link to={`/playlist/${pListData.title}`}>
          <img
            className="pListCardImg"
            src={pListData.videos[0].snippet.thumbnails.high.url}
            alt=""
          ></img>
        </Link>

        <Typography className="videosInfoDIv" variant="body1">
          <span>{pListData.title}</span>
          <span>{pListData.videos.length} videos</span>
        </Typography>
      </div>
    );
  } else {
    //ако няма видеа в текущия плейлист - покажи само името на плейлиста, картинката no videos и 0 видеа
    return (
      <div className="pListCard">
        <Link to={`/playlist/${pListData.title}`}>
          <img className="pListCardImg" src={noVideosInPlaylist} alt=""></img>
        </Link>

        <Typography className="videosInfoDIv" variant="body1">
          <span>{pListData.title}</span>
          <span>0 videos</span>
        </Typography>
      </div>
    );
  }
}

export default PlaylistsPlaylistCard;
