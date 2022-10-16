import React from "react";
import "./feed.css";
import { useState, useEffect } from "react";
import { Sidebar, CategoriesBar, MainVideoCard, MainChannelCard } from "..";

import fetchFromAPI from "../../utils/fetchFromAPI";

import { demoVideosResponse } from "../../utils/constants";

export default function Feed(props) {
  const [selectedCategory, setSelectedCategory] = useState("new"); //първоначално ни зарежда видеа от категория New
  const [videos, setVideos] = useState([]);

<<<<<<< HEAD
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
=======
  // !За реални резултати от заявка, според категория от таба с категории, разкоментирай това и закоментирай следващия useEffect
  useEffect(() => {
    console.log("update");
    console.log(selectedCategory);
    fetchFromAPI(
      `/search?part=snippet&q=${selectedCategory}&maxResults=20`
    ).then((data) => {
      console.log(data.items);
      setVideos(data.items);
    });
  }, [selectedCategory]); //когато selectedCategory се промени, изпълни callback ф-ята в useEffect()

  // // //!Разкоментирай това, за да зарежда само demoVideosResponse и да не хаби заявки
  // useEffect(() => {
  //   setVideos(demoVideosResponse);
  // }, [selectedCategory]); //когато някое от тези двете в масива се промени, изпълни callback ф-ята в useEffect()
>>>>>>> 6444246e28789d08282651feff349473c38eb6df

  return (
    <div className="feedMainContainer">
      <div className="feedSidebarContainer">
        <Sidebar />
      </div>

      <div className="resultsPlusCategoriesContainer">
        <CategoriesBar //categories tab bar with tabs
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="resultsContainer">
          {videos.map((vid, idx) => {
            if (vid.id.videoId) {
              //значи е видео, а не канал
              return <MainVideoCard video={vid} key={idx} />;
            } else {
              //значи е канал, а не видео
              return <MainChannelCard channelDetails={vid} key={idx} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
