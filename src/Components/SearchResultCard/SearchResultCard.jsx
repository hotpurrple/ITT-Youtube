import React from "react";
import "./SearchResultCard.css";
import { Link } from "react-router-dom";

export default function SearchResultCard(props) {
  // console.log(props);
  return (
    <div className="mainSearchCard">
      <Link to={`/videos/${props.video.id.videoId}`}>
        <img
          className="mainSearchCardImg"
          src={props.video.snippet.thumbnails.high.url}
          alt={props.video.snippet.title}
        />
      </Link>

      <div>asdfad</div>
    </div>
  );
}

/*
{
  "video": {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "2_syirO2J10"
      },
      "snippet": {
          "publishedAt": "2022-10-15T12:00:02Z",
          "channelId": "UCtNpbO2MtsVY4qW23WfnxGg",
          "title": "The SECRET High Handicap Golf Clubs  You NEED To BREAK 90!?",
          "description": "The SECRET High Handicap Golf Clubs You NEED To BREAK 90!? 70 YEAR OLD GOLFER Shares The SECRET To Breaking ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/2_syirO2J10/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/2_syirO2J10/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/2_syirO2J10/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "James Robinson Golf",
          "liveBroadcastContent": "none",
          "publishTime": "2022-10-15T12:00:02Z"
      }
  }
}

*/
