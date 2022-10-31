import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import * as HiIcons from "react-icons/hi";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
  demoVideoDescription,
} from "../../utils/constants";
import MainVideoCardDotsBtn from "../MainVideoCardDotsBtn/MainVideoCardDotsBtn";
import { useSelector } from "react-redux";

export default function SearchVideoCard(props) {
  let videoData = props.video;
  const user = useSelector((state) => state.loggedUser.user);

  return (
    <Card
      className="card"
      sx={{
        width: 900,
        display: "flex",
        flexDirection: "row",
        mt: "15px",
        mb: "15px",
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
          height: 202,
          width: "100%",
        }}
      >
        <Link
          style={{ textDecoration: "none" }}
          to={
            videoData.id.videoId
              ? `/videos/${videoData.id.videoId}`
              : demoVideoUrl
          }
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#030303" /*"#fff"*/
          >
            {videoData?.snippet.title.slice(0, 40) ||
              demoVideoTitle.slice(0, 40)}
          </Typography>
        </Link>

        <Link
          style={{ textDecoration: "none" }}
          to={
            videoData.snippet?.channelId
              ? `/channel/${videoData.snippet.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="#6c6c6c">
            {videoData?.snippet.channelTitle.slice(0, 40) ||
              demoChannelTitle.slice(0, 40)}
            <CheckCircle
              sx={{
                fontSize: 12,
                ml: "5px",
                color: "#aaaaaa",
              }}
            />
          </Typography>

          <Typography variant="body2" color="#606265">
            {videoData?.snippet.description.slice(0, 70) ||
              demoVideoDescription.slice(0, 70)}
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