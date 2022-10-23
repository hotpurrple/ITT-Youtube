import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./playlistCard.css";

function PlaylistCard({ videoData }) {
  return (
    <div className="playlistCard">
      <Link to={`/video/${videoData.items[0].id}`}>
        <img
          className="playlistCardImg"
          src={videoData.items[0].snippet.thumbnails.high.url}
          alt="videoImage"
        ></img>
      </Link>

      <div className="playlistCardRightPart">
        <Link to={`/video/${videoData.items[0].id}`}>
          <Typography variant="h6" className="playlistCardTitle">
            {videoData.items[0].snippet.title}
          </Typography>
        </Link>

        <Link to={`/channel/${videoData.items[0].snippet.channelId}`}>
          <Typography variant="subtitle2" className="playlistCardSubtitle">
            {videoData.items[0].snippet.channelTitle}
          </Typography>
        </Link>
      </div>
    </div>
  );
}

export default PlaylistCard;

// {
//   "kind": "youtube#videoListResponse",
//   "items": [
//       {
//           "kind": "youtube#video",
//           "id": "oMR0E1Yijvs",
//           "snippet": {
//               "publishedAt": "2022-10-13T12:03:48Z",
//               "channelId": "UCupvZG-5ko_eiXAupbDfxWw",
//               "title": "Video reveals a major problem for new Russian soldiers",
//               "description": "In a new video posted to social media, newly mobilized Russian soldiers are complaining about their lack of training before being sent to the war with Ukraine.  #CNN #News",
//               "thumbnails": {
//                   "default": {
//                       "url": "https://i.ytimg.com/vi/oMR0E1Yijvs/default.jpg",
//                       "width": 120,
//                       "height": 90
//                   },
//                   "medium": {
//                       "url": "https://i.ytimg.com/vi/oMR0E1Yijvs/mqdefault.jpg",
//                       "width": 320,
//                       "height": 180
//                   },
//                   "high": {
//                       "url": "https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg",
//                       "width": 480,
//                       "height": 360
//                   },
//                   "standard": {
//                       "url": "https://i.ytimg.com/vi/oMR0E1Yijvs/sddefault.jpg",
//                       "width": 640,
//                       "height": 480
//                   },
//                   "maxres": {
//                       "url": "https://i.ytimg.com/vi/oMR0E1Yijvs/maxresdefault.jpg",
//                       "width": 1280,
//                       "height": 720
//                   }
//               },
//               "channelTitle": "CNN",
//               "tags": [
//                   "latest News",
//                   "Happening Now",
//                   "CNN",
//                   "Russia",
//                   "Ukraine",
//                   "Radio Free Europe",
//                   "Erin Burnett",
//                   "World News"
//               ],
//               "categoryId": "25",
//               "liveBroadcastContent": "none",
//               "defaultLanguage": "en",
//               "localized": {
//                   "title": "Video reveals a major problem for new Russian soldiers",
//                   "description": "In a new video posted to social media, newly mobilized Russian soldiers are complaining about their lack of training before being sent to the war with Ukraine.  #CNN #News"
//               },
//               "defaultAudioLanguage": "en"
//           },
//           "contentDetails": {
//               "duration": "PT3M29S",
//               "dimension": "2d",
//               "definition": "hd",
//               "caption": "true",
//               "licensedContent": true,
//               "contentRating": {},
//               "projection": "rectangular"
//           },
//           "statistics": {
//               "viewCount": "1830264",
//               "likeCount": "16287",
//               "favoriteCount": "0",
//               "commentCount": "3979"
//           }
//       }
//   ],
//   "pageInfo": {
//       "totalResults": 1,
//       "resultsPerPage": 1
//   }
// }
