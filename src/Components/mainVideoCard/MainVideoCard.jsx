import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../../utils/constants";

export default function MainVideoCard(props) {
  let videoData = props.video;

  return (
    <Card>
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
          height: "94px",
        }}
      >
        <Link
          to={
            videoData.id.videoId
              ? `/video/:${videoData.id.videoId}`
              : demoVideoUrl
          }
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#030303" /*"#fff"*/
          >
            {videoData?.snippet.title.slice(0, 40) || //за да не става прекалено дълго заглавието
              demoVideoTitle.slice(0, 40)}
          </Typography>
        </Link>
        <Link
          to={
            videoData.snippet?.channelId
              ? `/channel/:${videoData.snippet.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="#6c6c6c">
            {videoData?.snippet.channelTitle.slice(0, 40) || //за да не става прекалено дълго заглавието
              demoChannelTitle.slice(0, 40)}
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
    </Card>
  );
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
