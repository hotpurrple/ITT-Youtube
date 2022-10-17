import React from "react";
import "./searchFeed.css";
import fetchFromAPI from "../../utils/fetchFromAPI";
import { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import { useParams } from "react-router-dom"; //за да можем да вземем query search параметрите от search bar-а
import { SearchVideoCard, SearchChannelCard } from "../";
// import { demoSearchResultsResponse } from "../../utils/constants";

export default function SearchFeed() {
  const { searchTerm } = useParams(); //searchTerm ще вземе това, което имаме след search/ в url bar-а, а то трябва да се промени от search bar-а в head
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchFromAPI(`/search?part=snippet&q=${searchTerm}&maxResults=20`).then(
      (data) => {
        console.log(data.items);
        setSearchResults(data.items);
      }
    );
  }, [searchTerm]);
  return (
    <div className="searchFeedMainContainer">
      <Sidebar />

      <div className="searchCardContainer">
        <div className="searchCardsScrollContainer">
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
