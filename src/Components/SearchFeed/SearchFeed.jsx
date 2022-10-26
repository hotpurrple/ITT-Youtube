import React from "react";
import "./searchFeed.css";
import fetchFromAPI from "../../utils/fetchFromAPI";
import { useEffect, useState, useRef } from "react";
import Sidebar from "../sidebar/Sidebar";
import { useParams } from "react-router-dom"; //за да можем да вземем query search параметрите от search bar-а
import { SearchVideoCard, SearchChannelCard } from "../";
// import { demoSearchResultsResponse } from "../../utils/constants";

export default function SearchFeed(props) {
  let params = useParams();
  console.log(params);
  const { searchTerm } = useParams(); //searchTerm ще вземе това, което имаме след search/ в url bar-а, а то трябва да се промени от search bar-а в head
  const [searchResults, setSearchResults] = useState([]);

  let newResults = 20;
  console.log("Rerender Search feed component with search term: " + searchTerm);
  const scrollDiv = useRef();

  const loadSearchResults = () => {
    fetchFromAPI(`/search?part=snippet&q=${searchTerm}&maxResults=20`).then(
      (data) => {
        setSearchResults(data.items);
      }
    );
  };

  const loadMoreSearchResults = () => {
    fetchFromAPI(
      `/search?part=snippet&q=${searchTerm}&maxResults=${newResults}`
    ).then((data) => {
      setSearchResults((oldResults) => [
        ...oldResults,
        ...data.items.slice(oldResults.length + 1), //отново получаваме и вече показани резултати, затова трябва да ги изрежем, за да не се дублират. Просто апи-то няма възможност да ни покаже следващите
      ]);
    });
    newResults += 20;
  };

  const handleScroll = (e) => {
    // console.log(scrollDiv.current.scrollHeight);
    // console.log(scrollDiv.current.offsetHeight);
    // console.log(scrollDiv.current.scrollTop);
    if (
      scrollDiv.current.scrollHeight - scrollDiv.current.offsetHeight ===
      scrollDiv.current.scrollTop
    ) {
      console.log("scrolling");
      loadMoreSearchResults();
    }
  };

  useEffect(() => {
    console.log("In use effect");
    loadSearchResults();
    scrollDiv.current.addEventListener("scroll", handleScroll);

    // return () => {
    //   scrollDiv.current.removeEventListener("scroll", handleScroll);
    // };
  }, [searchTerm]);

  return (
    <div className="searchFeedMainContainer">
      <Sidebar
        theClass={
          props.showSideBar
            ? `sidebar-menu-SearchFeed active`
            : `sidebar-menu-SearchFeed`
        }
      />

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
