//!Нов вариант - начално зареждане на 30 видеа от категория + скрол със стъпка 20 видеа
import React from "react";
import "./feed.css";
import { useState, useEffect, useRef } from "react";
import {
  CategoriesBar,
  MainVideoCard,
  MainChannelCard,
  BackdropComponent,
} from "../../../Components";

import fetchFromAPI from "../../../utils/fetchFromAPI";
import { useSelector, useDispatch } from "react-redux";
import {
  setToInitialValue,
  increment,
} from "../../../store/newResultsCountSlice/newResultsCountSlice";

export default function Feed(props) {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.selectedCategory.value);

  const [videos, setVideos] = useState([]);
  const [open, setOpen] = useState(false);
  const [endOfPage, setEndOfPage] = useState(false);

  const newResults = useSelector((state) => state.newResults.value);

  const scrollDiv = useRef();

  useEffect(() => {
    dispatch(setToInitialValue());
    console.log(
      "Rerender, because of changed searchKeyword. Render count = " + newResults
    );
    scrollDiv.current.scrollTo(0, 0);
    setOpen(true);
    fetchFromAPI(
      `/search?part=snippet&q=${selectedCategory}&maxResults=${newResults}`
    ).then((data) => {
      setOpen(false);
      setVideos(data.items);
    });
  }, [selectedCategory]);

  useEffect(() => {
    if (endOfPage) {
      loadMoreResults();
      setEndOfPage(false);
    }
  }, [endOfPage]);

  const loadMoreResults = () => {
    console.log("Rerender, because endOfPage is changed");
    console.log("Load more results of " + selectedCategory + " category");
    setOpen(true);
    fetchFromAPI(
      `/search?part=snippet&q=${selectedCategory}&maxResults=${newResults}`
    ).then((data) => {
      setOpen(false);
      setVideos((oldResults) => [
        ...oldResults,
        ...data.items.slice(oldResults.length),
      ]);
    });

    // setNewResults(newResults + 5);
  };

  const handleScroll = (e) => {
    const endOfPage =
      scrollDiv.current.scrollHeight - scrollDiv.current.scrollTop <=
      scrollDiv.current.clientHeight;
    if (endOfPage) {
      setEndOfPage(true);
      dispatch(increment());
    }
  };

  //!The problem is that scrollDiv.current is mutable, so by the time the cleanup function runs, it may have been set to null.
  //!The solution is to capture any mutable values inside the effect:
  useEffect(() => {
    const instanceOfRef = scrollDiv.current;
    scrollDiv.current.addEventListener("scroll", handleScroll);
    return () => {
      instanceOfRef.removeEventListener("scroll", handleScroll);
    };
  }, [selectedCategory]);

  return (
    <div className="feedMainContainer">
      <BackdropComponent open={open} />

      <div className="resultsPlusCategoriesContainer">
        <CategoriesBar //categories tab bar with tabs
        // setSelectedCategory={setSelectedCategory}
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
