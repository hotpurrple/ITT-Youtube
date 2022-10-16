import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos, CategoriesBar } from "..";

import fetchFromAPI from "../../utils/fetchFromAPI";

import { demoVideosResponse } from "../../utils/constants";

export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New"); //първоначално ни зарежда видеа от категория New
  const [videos, setVideos] = useState([]);

  //!За реални резултати от заявка, според категория от таба с категории, разкоментирай това и закоментирай следващия useEffect
//   useEffect(() => {
//     fetchFromAPI(
//       `/search?part=snippet&q=${selectedCategory}&maxResults=20`
//     ).then((data) => {
//       setVideos(data.items);
//     });
//   }, [selectedCategory, videos]); //когато някое от тези двете в масива се промени, изпълни callback ф-ята в useEffect()

  //!Разкоментирай това, за да зарежда само demoVideosResponse и да не хаби заявки
  useEffect(() => {
    setVideos(demoVideosResponse);
  }, [selectedCategory, videos]); //когато някое от тези двете в масива се промени, изпълни callback ф-ята в useEffect()

  return (
    <Stack
      sx={{
        // backgroundColor: "#181818",
        flexDirection: "row", //default direction of mui Stack is column
      }}
    >
      <Box
        sx={{
          color: "#fff",
          backgroundColor: "#ffffff", //"#212121", ///dark
          height: "92vh",
          borderRight: "1px solid #3d3d3d",
          px: 2, //за малки екрани padding horizontal
        }}
      >
        <Sidebar />

        {/*Typography is just a simple component that is used for all text elements - instead of p and h1,2,3,4.. */}
        <Typography // The Typography component makes it easy to apply a default set of font weights and sizes in your application.
          variant="body2"
          sx={{ mt: 1.5, color: "#909090" /*"#fff"*/ }}
        >
          © 2022 Google LLC
        </Typography>
      </Box>

      <Box //the container for categories tab bar and videos container
        sx={{
          flexDirection: "column",
        }}
      >
        <CategoriesBar //categories tab bar with tabs
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Box //the videos container
          p={2}
          sx={{
            flexDirection: "row",
            flexWrap: "wrap",
            overflowY: "auto",
            height: "90vh",
            flex: 2,
            backgroundColor: "#ffffff",
          }}
        >
          <Videos //the videos component
            videos={videos}
          />
        </Box>
      </Box>
    </Stack>
  );
}
