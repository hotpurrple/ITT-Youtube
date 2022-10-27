import React from "react";
import "./searchFeed.css";
import fetchFromAPI from "../../utils/fetchFromAPI";
import { useEffect, useState, useRef } from "react";
import Sidebar from "../sidebar/Sidebar";
import { useParams } from "react-router-dom"; //за да можем да вземем query search параметрите от search bar-а
import { SearchVideoCard, SearchChannelCard, BackdropComponent } from "../";
// import { demoSearchResultsResponse } from "../../utils/constants";

export default function SearchFeed(props) {
  const [open, setOpen] = useState(false); //backdrop div
  const { term } = props; //search term идва от props - lift-ва се от SearchBar през Header, до App, после от App се подава до SearchFeed в props
  console.log("Term comming from props " + term);

  const { searchTerm } = useParams(); //searchTerm ще вземе това, което имаме след search/ в url bar-а, а то трябва да се промени от search bar-а в head

  const [searchResults, setSearchResults] = useState([]);

  let newResults = 20;
  const scrollDiv = useRef();

  console.log("Rerender Search feed component with search term: " + searchTerm);

  const loadMoreSearchResults = () => {
    setOpen(true);
    console.log("load more search results with search term: " + searchTerm);
    fetchFromAPI(
      `/search?part=snippet&q=${searchTerm}&maxResults=${newResults}`
    ).then((data) => {
      setOpen(false);
      if (searchResults.length === 0) {
        setSearchResults(data.items);
      } else {
        setSearchResults((oldResults) => [
          ...oldResults,
          ...data.items.slice(oldResults.length + 1), //отново получаваме и вече показани резултати, затова трябва да ги изрежем, за да не се дублират. Просто апи-то няма възможност да ни покаже следващите
        ]);
      }
    });
    newResults += 20;
  };

  const handleScroll = (e) => {
    // console.log(scrollDiv.current.scrollHeight);
    // console.log(scrollDiv.current.offsetHeight);
    // console.log(scrollDiv.current.scrollTop);
    if (
      scrollDiv.current.scrollHeight - scrollDiv.current.offsetHeight === scrollDiv.current.scrollTop) {
      console.log("scrolling");
      loadMoreSearchResults();
    }
  };

  useEffect(() => {
    console.log("In use effect");
    loadMoreSearchResults();
    scrollDiv.current.addEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   console.log("component unmount");
  //   return () => {
  //     scrollDiv.current.removeEventListener("scroll", handleScroll);
  //   };
  // });

  return (
    <div className="searchFeedMainContainer">
      <BackdropComponent open={open} />
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
