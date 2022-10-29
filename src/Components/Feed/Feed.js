//!Нов вариант - начално зареждане на 30 видеа от категория + скрол със стъпка 20 видеа
import React from "react";
import "./feed.css";
import { useState, useEffect, useRef } from "react";
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
  // const [newResults, setNewResults] = useState(30);

  let newResults = 30;
  const scrollDiv = useRef();

  const loadMoreResults = (isNewCategory) => {
    setOpen(true);
    console.log(selectedCategory, newResults);
    fetchFromAPI(
      `/search?part=snippet&q=${selectedCategory}&maxResults=${newResults}`
    ).then((data) => {
      setOpen(false);
      console.log(data.items);
      if (isNewCategory) {
        //ако категорията е нова - зарези 30 резултата първоначално
        setVideos(data.items);
      } else {
        //ако категорията не е нова, значи скролвамe
        setVideos((oldResults) => [
          ...oldResults,
          ...data.items.slice(oldResults.length + 1), //отново получаваме и вече показани резултати, затова трябва да ги изрежем, за да не се дублират. Просто апи-то няма възможност да ни покаже следващите
        ]);
      }
    });
  };

  const handleScroll = (e) => {
    if (
      scrollDiv.current.scrollHeight - scrollDiv.current.offsetHeight ===
      scrollDiv.current.scrollTop
    ) {
      console.log("scrolling");
      // setNewResults(newResults + 20);
      newResults += 20;
      loadMoreResults(false);
    }
  };

  useEffect(() => {
    scrollDiv.current.addEventListener("scroll", handleScroll);
    scrollDiv.current.scrollTo(0, 0); //при промяна в избраната категория искаме отново да започнем да скролваме от началото на елемента
    // setNewResults(30); //при промяна в избраната категория искаме отново да започнем от 30 резултата
    newResults = 30; //при промяна в избраната категория искаме отново да започнем от 30 резултата
    loadMoreResults(true); //тук казваме, че има промяна в категорията

    //on component unmount - премахни listener-а за scroll
    // return () => {
    //   scrollDiv.current.removeEventListener("scroll", handleScroll);
    // };
  }, [selectedCategory]); //когато selectedCategory се промени, изпълни callback ф-ята в useEffect()

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

        <div className="resultsContainer" ref={scrollDiv}>
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

////!Старият вариант - зареждане по 50 видеа от категория, без скрол
// import React from "react";
// import "./feed.css";
// import { useState, useEffect } from "react";
// import {
//   Sidebar,
//   CategoriesBar,
//   MainVideoCard,
//   MainChannelCard,
//   BackdropComponent,
// } from "..";

// import fetchFromAPI from "../../utils/fetchFromAPI";
// // import { demoVideosResponse } from "../../utils/constants";

// export default function Feed(props) {
//   const [selectedCategory, setSelectedCategory] = useState("new"); //първоначално ни зарежда видеа от категория New
//   const [videos, setVideos] = useState([]);
//   const [open, setOpen] = useState(false); //backdrop div

//   //!За реални резултати от заявка, според категория от таба с категории, разкоментирай това и закоментирай следващия useEffect
//   useEffect(() => {
//     setOpen(true);
//     fetchFromAPI(
//       `/search?part=snippet&q=${selectedCategory}&maxResults=50`
//     ).then((data) => {
//       setOpen(false);
//       setVideos(data.items);
//     });
//   }, [selectedCategory]); //когато selectedCategory се промени, изпълни callback ф-ята в useEffect()

//   // // //!Разкоментирай това, за да зарежда само demoVideosResponse и да не хаби заявки
//   // useEffect(() => {
//   //   setVideos(demoVideosResponse);
//   // }, [selectedCategory]); //когато някое от тези двете в масива се промени, изпълни callback ф-ята в useEffect()

//   return (
//     <div className="feedMainContainer">
//       <BackdropComponent open={open} />
//       <Sidebar
//         theClass={
//           props.showSideBar ? `sidebar-menu-Feed active` : `sidebar-menu-Feed`
//         }
//       />

//       <div className="resultsPlusCategoriesContainer">
//         <CategoriesBar //categories tab bar with tabs
//           selectedCategory={selectedCategory}
//           setSelectedCategory={setSelectedCategory}
//         />

//         <div className="resultsContainer">
//           {videos.map((vid, idx) => {
//             if (vid.id.videoId) {
//               //значи е видео, а не канал
//               return <MainVideoCard video={vid} key={idx} />;
//             } else {
//               //значи е канал, а не видео
//               return <MainChannelCard channelDetails={vid} key={idx} />;
//             }
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
