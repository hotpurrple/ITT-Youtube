import React from "react";
import "./searchFeed.css";
import fetchFromAPI from "../../../utils/fetchFromAPI";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  SearchVideoCard,
  SearchChannelCard,
  BackdropComponent,
} from "../../../Components";

export default function SearchFeed(props) {
  const [open, setOpen] = useState(false);
  const { searchTerm } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [searchKeyWord, setSearchKeyword] = useState(searchTerm);
  const scrollDiv = useRef();
  const [endOfPage, setEndOfPage] = useState(false);
  const [newResults, setNewResults] = useState(10);

  useEffect(() => {
    setSearchKeyword(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    setNewResults(10);
    scrollDiv.current.scrollTo(0, 0);
    fetchFromAPI(`/search?part=snippet&q=${searchKeyWord}&maxResults=5`)
    .then((data) => {
        setOpen(false);
        setSearchResults(data.items);
      }
    );
  }, [searchKeyWord]);

  useEffect(() => {
    if (endOfPage) {
      loadMoreSearchResults();
      setEndOfPage(false);
    }
  }, [endOfPage]);

  const loadMoreSearchResults = () => {
    setOpen(true);
    fetchFromAPI(`/search?part=snippet&q=${searchKeyWord}&maxResults=${newResults}`
    ).then((data) => {
      setOpen(false);
      setSearchResults((oldResults) => [
        ...oldResults,
        ...data.items.slice(oldResults.length),
      ]);
    });
    setNewResults(newResults + 5);
  };

  const handleScroll = () => {
    const endOfPage = scrollDiv.current.scrollHeight - scrollDiv.current.scrollTop <= scrollDiv.current.clientHeight;
    if(endOfPage) {
      setEndOfPage(true);
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
  }, [searchTerm]);

  return (
    <div className="searchFeedMainContainer">
      <BackdropComponent open={open} />
      <div className="searchCardContainer">
        <div className="searchCardsScrollContainer" ref={scrollDiv}>
          {searchResults.map((searchResult, idx) => {
            if (searchResult.id.videoId) {
              //значи е видео, а не канал
              return <SearchVideoCard video={searchResult} key={idx} />;
            } else {
              return (
                <SearchChannelCard channelDetails={searchResult} key={idx} />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
