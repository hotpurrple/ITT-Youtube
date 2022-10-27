import React from "react";
import "./feed.css";
import { useState, useEffect } from "react";
import {
  Sidebar,
  CategoriesBar,
  MainVideoCard,
  MainChannelCard,
  BackdropComponent,
} from "..";

import fetchFromAPI from "../../utils/fetchFromAPI";
// import { demoVideosResponse } from "../../utils/constants";

export default function Feed(props) {
  const [selectedCategory, setSelectedCategory] = useState("new"); //първоначално ни зарежда видеа от категория New
  const [videos, setVideos] = useState([]);
  const [open, setOpen] = useState(false); //backdrop div

  //!За реални резултати от заявка, според категория от таба с категории, разкоментирай това и закоментирай следващия useEffect
  useEffect(() => {
    setOpen(true);
    fetchFromAPI(
      `/search?part=snippet&q=${selectedCategory}&maxResults=50`
    ).then((data) => {
      setOpen(false);
      setVideos(data.items);
    });
  }, [selectedCategory]); //когато selectedCategory се промени, изпълни callback ф-ята в useEffect()

  // // //!Разкоментирай това, за да зарежда само demoVideosResponse и да не хаби заявки
  // useEffect(() => {
  //   setVideos(demoVideosResponse);
  // }, [selectedCategory]); //когато някое от тези двете в масива се промени, изпълни callback ф-ята в useEffect()

  return (
    <div className="feedMainContainer">
      <BackdropComponent open={open} />
      <Sidebar
        theClass={
          props.showSideBar ? `sidebar-menu-Feed active` : `sidebar-menu-Feed`
        }
      />

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
