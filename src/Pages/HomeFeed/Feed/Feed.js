//!Нов вариант - начално зареждане на 15 видеа от категория + скрол със стъпка 5 видеа
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
  const selectedCategory = useSelector((state) => state.selectedCategory.value); //"new" категория initial state
  const [videos, setVideos] = useState([]);
  const [open, setOpen] = useState(false);
  const [endOfPage, setEndOfPage] = useState(false);
  const newResults = useSelector((state) => state.newResults.value); //15 видеа initial state
  const scrollDiv = useRef();

  useEffect(() => {
    dispatch(setToInitialValue());
    scrollDiv.current.scrollTo(0, 0);
    setOpen(true);
    fetchFromAPI(`/search?part=snippet&q=${selectedCategory}&maxResults=${newResults}`)
    .then((data) => {
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
    setOpen(true);
    fetchFromAPI(`/search?part=snippet&q=${selectedCategory}&maxResults=${newResults}`)
    .then((data) => {
      setOpen(false);
      setVideos((oldResults) => [
        ...oldResults,
        ...data.items.slice(oldResults.length),
      ]);
    });
  };

  const handleScroll = (e) => {
    const endOfPage = scrollDiv.current.scrollHeight - scrollDiv.current.scrollTop <= scrollDiv.current.clientHeight;
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
              return <MainVideoCard video={vid} key={idx} />;
            } else {
              return <MainChannelCard channelDetails={vid} key={idx} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
