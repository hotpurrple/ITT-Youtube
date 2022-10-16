import React from "react";
import { Stack, Box } from "@mui/material";
import { MainVideoCard /*MainChannelCard*/ } from "../";

function Videos(props) {
  // console.log(props.videos);
  return (
    <Stack direction={"row"} flexWrap="wrap" justifyContent={"start"} gap={2}>
      {props.videos.map((vid, idx) => (
        <Box key={idx}>
          {/* ако vid има videoId - принтирай MainVideoCard компонент */}
          {vid.id.videoId && <MainVideoCard video={vid} />}

          {/* ако vid има channelId - принтирай MainChannelCard component */}
          {/* {vid.id.channelId && <MainChannelCard channelDetails={vid} />} */}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
