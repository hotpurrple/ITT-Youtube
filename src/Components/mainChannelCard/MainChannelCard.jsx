import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../../utils/constants";

function MainChannelCard(props) {
  //props.channelDetail идва от Videos component, където принтираме всички картички
  console.log(props.channelDetails);
  return (
    <Box
      className="card"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "360px",
      }}
    >
      <Link to={`/channel/${props.channelDetails?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#031a42",
          }}
        >
          <CardMedia
            image={
              props.channelDetails?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={props.channelDetails?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
            }}
          />
          <Typography variant="h5">
            {props.channelDetails?.snippet?.title}
            <CheckCircle
              sx={{
                fontSize: 14,
                ml: "5px",
                color: "#aaaaaa",
              }}
            />
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
}

export default MainChannelCard;

/*
{
  "kind": "youtube#searchResult",
  "id": {
      "kind": "youtube#channel",
      "channelId": "UCDqzpUGQd60gTvEIeFknLzQ"
  },
  "snippet": {
      "publishedAt": "2015-11-14T16:51:08Z",
      "channelId": "UCDqzpUGQd60gTvEIeFknLzQ",
      "title": "Azis",
      "description": "THE OFFICIAL CHANNEL OF AZIS ОФИЦИАЛНИЯТ КАНАЛ НА АЗИС Vasil Troyanov Boyanov, professionally known as AZIS, ...",
      "thumbnails": {
          "default": {
              "url": "https://yt3.ggpht.com/-NpfuvdUBiR0wJBiUTfAkUORNxhBPOZInJLWPbqhUfuIUH-NxW5u196bOjamxkFOuwlsN9Vy7A=s88-c-k-c0xffffffff-no-rj-mo"
          },
          "medium": {
              "url": "https://yt3.ggpht.com/-NpfuvdUBiR0wJBiUTfAkUORNxhBPOZInJLWPbqhUfuIUH-NxW5u196bOjamxkFOuwlsN9Vy7A=s240-c-k-c0xffffffff-no-rj-mo"
          },
          "high": {
              "url": "https://yt3.ggpht.com/-NpfuvdUBiR0wJBiUTfAkUORNxhBPOZInJLWPbqhUfuIUH-NxW5u196bOjamxkFOuwlsN9Vy7A=s800-c-k-c0xffffffff-no-rj-mo"
          }
      },
      "channelTitle": "Azis",
      "liveBroadcastContent": "none",
      "publishTime": "2015-11-14T16:51:08Z"
  }
}
*/
