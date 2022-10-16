import React from "react";
import "./feed.css";
import { useState, useEffect } from "react";
import { Sidebar, Videos, CategoriesBar } from "..";

import fetchFromAPI from "../../utils/fetchFromAPI";

import { demoVideosResponse } from "../../utils/constants";

export default function Feed(props) {
  const [selectedCategory, setSelectedCategory] = useState("new"); //първоначално ни зарежда видеа от категория New
  const [videos, setVideos] = useState([]);

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
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
}
