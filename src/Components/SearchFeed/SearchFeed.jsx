import React from "react";
import "./searchFeed.css";
import fetchFromAPI from "../../utils/fetchFromAPI";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { SearchVideoCard, SearchChannelCard, BackdropComponent } from "../";

export default function SearchFeed(props) {
  const [open, setOpen] = useState(false);
  const { searchTerm } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  const scrollDiv = useRef();

  let newResults = 20;

  //!Когато сменим searchTerm и влезем компонента се mount-не наново - първоначални 20 резултата
  useEffect(() => {
    console.log("NEW search term: " + searchTerm);
    scrollDiv.current.scrollTo(0, 0);
    fetchFromAPI(`/search?part=snippet&q=${searchTerm}&maxResults=20`).then(
      (data) => {
        setOpen(false);
        setSearchResults(data.items);
      }
    );
  }, [searchTerm]);

  const loadMoreSearchResults = () => {
    setOpen(true);
    console.log("load more search results with search term: " + searchTerm);
    fetchFromAPI(
      `/search?part=snippet&q=${searchTerm}&maxResults=${newResults}`
    ).then((data) => {
      setOpen(false);

      setSearchResults((oldResults) => [
        ...oldResults,
        ...data.items.slice(oldResults.length + 1),
      ]);
    });
    newResults += 20;
  };

  const handleScroll = () => {
    if (
      scrollDiv.current.scrollHeight - scrollDiv.current.offsetHeight ===
      scrollDiv.current.scrollTop
    ) {
      console.log("scrolling");
      console.log(searchTerm);
      loadMoreSearchResults();
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
  }, []);

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
