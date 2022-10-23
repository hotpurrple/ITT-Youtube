import React, { useEffect, useState } from "react";
import "./playlistPage.css";
import { Sidebar, PlaylistCard } from "..";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

import { demoPlaylistIds } from "../../utils/constants";
import fetchFromApi from "../../utils/fetchFromAPI";

export default function Playlist(props) {
  // const activeUser = useSelector((state) => state.activeUser);

  //1.Влизаме на Playlist и взимаме от activeUser всички видеа за този playlist
  const demoAlbum = {
    title: "Demo album name",
    videosIds: demoPlaylistIds,
  };
  //2.После правим PromiseAll със всяко едно videoId
  const [currentPlaylistVideos, setCurrentPlaylistVideos] = useState([]);
  const [playlistImage, setPlaylistImage] = useState("");
  const [playlistTitle, setPlaylistTitle] = useState("");
  const [playlistVideosCount, setPlatlistVideosCount] = useState("");

  useEffect(() => {
    Promise.all(
      demoAlbum.videosIds.map((vidId) =>
        fetchFromApi(
          `/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${vidId}`
        )
      )
    ).then((videosFromPlaylistRes) => {
      setCurrentPlaylistVideos(videosFromPlaylistRes);
      setPlaylistImage(
        currentPlaylistVideos[0].items[0].snippet.thumbnails.high.url
      );
      setPlaylistTitle(demoAlbum.title);
      setPlatlistVideosCount(currentPlaylistVideos.length);
    });
  });

  return (
    <div className="playlistsPage">
      <Sidebar
        theClass={
          props.showSideBar
            ? `sidebar-menu-SearchFeed active`
            : `sidebar-menu-SearchFeed`
        }
      />
      <div className="playlistPageLeft">
        <div className="playlistMainCard">
          <img
            // src="https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg"
            src={playlistImage}
            alt="somePic"
          ></img>
          <Typography variant="h5" color="initial">
            {playlistTitle}
          </Typography>
          <Typography variant="subtitle1" color="initial">
            {playlistVideosCount} videos
          </Typography>
          <hr></hr>
          <Typography
            className="playlistMainCardUsernameContainer"
            variant="h5"
            color="initial"
          >
            Username
          </Typography>
        </div>
      </div>

      <div className="playlistPageRight">
        {/* {currentPlaylistVideos.map((vid) => {
          return <PlaylistCard videoData={vid} />;
        })} */}

        <div className="playlistCard">
          <Link to={`/video/oMR0E1Yijvs`}>
            <img
              className="playlistCardImg"
              src="https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg"
              alt="videoImage"
            ></img>
          </Link>

          <div className="playlistCardRightPart">
            <Link to={`/video/oMR0E1Yijvs`}>
              <Typography variant="h6" className="playlistCardTitle">
                Video reveals a major problem for new Russian soldiers
              </Typography>
            </Link>

            <Link to={`/channel/UCupvZG-5ko_eiXAupbDfxWw`}>
              <Typography variant="subtitle2" className="playlistCardSubtitle">
                CNN
              </Typography>
            </Link>
          </div>
        </div>
        <div className="playlistCard">
          <Link to={`/video/oMR0E1Yijvs`}>
            <img
              className="playlistCardImg"
              src="https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg"
              alt="videoImage"
            ></img>
          </Link>

          <div className="playlistCardRightPart">
            <Link to={`/video/oMR0E1Yijvs`}>
              <Typography variant="h6" className="playlistCardTitle">
                Video reveals a major problem for new Russian soldiers
              </Typography>
            </Link>

            <Link to={`/channel/UCupvZG-5ko_eiXAupbDfxWw`}>
              <Typography variant="subtitle2" className="playlistCardSubtitle">
                CNN
              </Typography>
            </Link>
          </div>
        </div>        <div className="playlistCard">
          <Link to={`/video/oMR0E1Yijvs`}>
            <img
              className="playlistCardImg"
              src="https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg"
              alt="videoImage"
            ></img>
          </Link>

          <div className="playlistCardRightPart">
            <Link to={`/video/oMR0E1Yijvs`}>
              <Typography variant="h6" className="playlistCardTitle">
                Video reveals a major problem for new Russian soldiers
              </Typography>
            </Link>

            <Link to={`/channel/UCupvZG-5ko_eiXAupbDfxWw`}>
              <Typography variant="subtitle2" className="playlistCardSubtitle">
                CNN
              </Typography>
            </Link>
          </div>
        </div>        <div className="playlistCard">
          <Link to={`/video/oMR0E1Yijvs`}>
            <img
              className="playlistCardImg"
              src="https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg"
              alt="videoImage"
            ></img>
          </Link>

          <div className="playlistCardRightPart">
            <Link to={`/video/oMR0E1Yijvs`}>
              <Typography variant="h6" className="playlistCardTitle">
                Video reveals a major problem for new Russian soldiers
              </Typography>
            </Link>

            <Link to={`/channel/UCupvZG-5ko_eiXAupbDfxWw`}>
              <Typography variant="subtitle2" className="playlistCardSubtitle">
                CNN
              </Typography>
            </Link>
          </div>
        </div>        <div className="playlistCard">
          <Link to={`/video/oMR0E1Yijvs`}>
            <img
              className="playlistCardImg"
              src="https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg"
              alt="videoImage"
            ></img>
          </Link>

          <div className="playlistCardRightPart">
            <Link to={`/video/oMR0E1Yijvs`}>
              <Typography variant="h6" className="playlistCardTitle">
                Video reveals a major problem for new Russian soldiers
              </Typography>
            </Link>

            <Link to={`/channel/UCupvZG-5ko_eiXAupbDfxWw`}>
              <Typography variant="subtitle2" className="playlistCardSubtitle">
                CNN
              </Typography>
            </Link>
          </div>
        </div>        <div className="playlistCard">
          <Link to={`/video/oMR0E1Yijvs`}>
            <img
              className="playlistCardImg"
              src="https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg"
              alt="videoImage"
            ></img>
          </Link>

          <div className="playlistCardRightPart">
            <Link to={`/video/oMR0E1Yijvs`}>
              <Typography variant="h6" className="playlistCardTitle">
                Video reveals a major problem for new Russian soldiers
              </Typography>
            </Link>

            <Link to={`/channel/UCupvZG-5ko_eiXAupbDfxWw`}>
              <Typography variant="subtitle2" className="playlistCardSubtitle">
                CNN
              </Typography>
            </Link>
          </div>
        </div>        <div className="playlistCard">
          <Link to={`/video/oMR0E1Yijvs`}>
            <img
              className="playlistCardImg"
              src="https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg"
              alt="videoImage"
            ></img>
          </Link>

          <div className="playlistCardRightPart">
            <Link to={`/video/oMR0E1Yijvs`}>
              <Typography variant="h6" className="playlistCardTitle">
                Video reveals a major problem for new Russian soldiers
              </Typography>
            </Link>

            <Link to={`/channel/UCupvZG-5ko_eiXAupbDfxWw`}>
              <Typography variant="subtitle2" className="playlistCardSubtitle">
                CNN
              </Typography>
            </Link>
          </div>
        </div>        <div className="playlistCard">
          <Link to={`/video/oMR0E1Yijvs`}>
            <img
              className="playlistCardImg"
              src="https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg"
              alt="videoImage"
            ></img>
          </Link>

          <div className="playlistCardRightPart">
            <Link to={`/video/oMR0E1Yijvs`}>
              <Typography variant="h6" className="playlistCardTitle">
                Video reveals a major problem for new Russian soldiers
              </Typography>
            </Link>

            <Link to={`/channel/UCupvZG-5ko_eiXAupbDfxWw`}>
              <Typography variant="subtitle2" className="playlistCardSubtitle">
                CNN
              </Typography>
            </Link>
          </div>
        </div>        <div className="playlistCard">
          <Link to={`/video/oMR0E1Yijvs`}>
            <img
              className="playlistCardImg"
              src="https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg"
              alt="videoImage"
            ></img>
          </Link>

          <div className="playlistCardRightPart">
            <Link to={`/video/oMR0E1Yijvs`}>
              <Typography variant="h6" className="playlistCardTitle">
                Video reveals a major problem for new Russian soldiers
              </Typography>
            </Link>

            <Link to={`/channel/UCupvZG-5ko_eiXAupbDfxWw`}>
              <Typography variant="subtitle2" className="playlistCardSubtitle">
                CNN
              </Typography>
            </Link>
          </div>
        </div>        <div className="playlistCard">
          <Link to={`/video/oMR0E1Yijvs`}>
            <img
              className="playlistCardImg"
              src="https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg"
              alt="videoImage"
            ></img>
          </Link>

          <div className="playlistCardRightPart">
            <Link to={`/video/oMR0E1Yijvs`}>
              <Typography variant="h6" className="playlistCardTitle">
                Video reveals a major problem for new Russian soldiers
              </Typography>
            </Link>

            <Link to={`/channel/UCupvZG-5ko_eiXAupbDfxWw`}>
              <Typography variant="subtitle2" className="playlistCardSubtitle">
                CNN
              </Typography>
            </Link>
          </div>
        </div>        <div className="playlistCard">
          <Link to={`/video/oMR0E1Yijvs`}>
            <img
              className="playlistCardImg"
              src="https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg"
              alt="videoImage"
            ></img>
          </Link>

          <div className="playlistCardRightPart">
            <Link to={`/video/oMR0E1Yijvs`}>
              <Typography variant="h6" className="playlistCardTitle">
                Video reveals a major problem for new Russian soldiers
              </Typography>
            </Link>

            <Link to={`/channel/UCupvZG-5ko_eiXAupbDfxWw`}>
              <Typography variant="subtitle2" className="playlistCardSubtitle">
                CNN
              </Typography>
            </Link>
          </div>
        </div>        <div className="playlistCard">
          <Link to={`/video/oMR0E1Yijvs`}>
            <img
              className="playlistCardImg"
              src="https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg"
              alt="videoImage"
            ></img>
          </Link>

          <div className="playlistCardRightPart">
            <Link to={`/video/oMR0E1Yijvs`}>
              <Typography variant="h6" className="playlistCardTitle">
                Video reveals a major problem for new Russian soldiers
              </Typography>
            </Link>

            <Link to={`/channel/UCupvZG-5ko_eiXAupbDfxWw`}>
              <Typography variant="subtitle2" className="playlistCardSubtitle">
                CNN
              </Typography>
            </Link>
          </div>
        </div>        <div className="playlistCard">
          <Link to={`/video/oMR0E1Yijvs`}>
            <img
              className="playlistCardImg"
              src="https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg"
              alt="videoImage"
            ></img>
          </Link>

          <div className="playlistCardRightPart">
            <Link to={`/video/oMR0E1Yijvs`}>
              <Typography variant="h6" className="playlistCardTitle">
                Video reveals a major problem for new Russian soldiers
              </Typography>
            </Link>

            <Link to={`/channel/UCupvZG-5ko_eiXAupbDfxWw`}>
              <Typography variant="subtitle2" className="playlistCardSubtitle">
                CNN
              </Typography>
            </Link>
          </div>
        </div>        <div className="playlistCard">
          <Link to={`/video/oMR0E1Yijvs`}>
            <img
              className="playlistCardImg"
              src="https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg"
              alt="videoImage"
            ></img>
          </Link>

          <div className="playlistCardRightPart">
            <Link to={`/video/oMR0E1Yijvs`}>
              <Typography variant="h6" className="playlistCardTitle">
                Video reveals a major problem for new Russian soldiers
              </Typography>
            </Link>

            <Link to={`/channel/UCupvZG-5ko_eiXAupbDfxWw`}>
              <Typography variant="subtitle2" className="playlistCardSubtitle">
                CNN
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

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
