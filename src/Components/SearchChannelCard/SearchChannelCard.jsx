import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../../utils/constants";

export default function SearchChannelCard(props) {
  //props.channelDetail идва от Videos component, където принтираме всички картички
  return (
    <Box
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
          <Typography variant="h6">
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
