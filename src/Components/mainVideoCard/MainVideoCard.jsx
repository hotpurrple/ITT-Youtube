import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { MainVideoCardDotsBtn } from "../";
import "./mainVideoCard.css";
import { useSelector } from "react-redux";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../../utils/constants";
import * as HiIcons from "react-icons/hi";

export default function MainVideoCard(props) {
  let videoData = props.video;
  const user = useSelector((state) => state.loggedUser.user);

  return (

    <Card
      className="card"
      sx={{
        width: 360,
        backgroundColor: "#f9f9f9",
      }}
    >

      <Link
        to={
          videoData.id.videoId
            ? `/videos/${videoData.id.videoId}`
            : demoVideoUrl
        }
      >
        <CardMedia
          image={videoData?.snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={videoData?.snippet?.title}
          sx={{
            width: 360,
            height: 202,
          }}
        />
      </Link>

      <CardContent
        sx={{
          backgroundColor: "#f9f9f9", //"#181818", //dark
          height: "60px",
        }}
      >
        <Link
          to={
            videoData.id.videoId
              ? `/videos/${videoData.id.videoId}`
              : demoVideoUrl
          }
        >
          <Typography
            className="hover"
            variant="subtitle1"
            fontWeight="bold"
            color="#030303" /*"#fff"*/
          >
            {videoData?.snippet.title.slice(0, 30) || //за да не става прекалено дълго заглавието
              demoVideoTitle.slice(0, 30)}
          </Typography>
        </Link>
        <Link
          to={
            videoData.snippet?.channelId
              ? `/channel/${videoData.snippet.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="#6c6c6c">
            {videoData?.snippet.channelTitle.slice(0, 30) || //за да не става прекалено дълго заглавието
              demoChannelTitle.slice(0, 30)}
            <CheckCircle
              sx={{
                fontSize: 12,
                ml: "5px",
                color: "#aaaaaa",
              }}
            />
          </Typography>
        </Link>
      </CardContent>

      {user && (
        <MainVideoCardDotsBtn
          className="MainVidCardDotsBtn"
          vidData={videoData}
          icon={<HiIcons.HiDotsHorizontal />}
        />
      )}

    </Card>
  );
}