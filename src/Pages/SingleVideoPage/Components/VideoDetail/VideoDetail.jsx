import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "./videodetail.css";
import VideoDescription from "../VideoDescription/VideoDescription";
import fetchFromApi from "../../../../utils/fetchFromAPI";
import VideoComments from "../VideoComments/VideoComments";
import { useState } from "react";
import numberFormatter from "../../../../utils/numberFormatter";
import { useDispatch, useSelector } from "react-redux";
import addToVideosHistory from "../../../../server/updateUserData";
import Sidebar from "../../../../Components/sidebar/Sidebar";
import { setCurrentVideo } from "../../../../store/currentVideo";
import VideoInformation from "../VideoInformation/VideoInformation";
import RecommendedVideos from "../RecommendedVideos/RecommendedVideos";

function VideoDetail(props) {
  const url = useParams().id
  const [videoDetails, setVideoDetails] = useState({});
  const [channelDetails, setChannelDetails] = useState({});
  const [currentVid, setCurrentVid] = useState({});
  const dispatch = useDispatch()
  useEffect(() => {
    fetchFromApi(`/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${url}`)
      .then((data) => {
        console.log(data); //! от тук ще взема видео данни за плейлист
        let title = data.items[0].snippet.title;
        let thumbnail = data.items[0].snippet.thumbnails.medium.url;
        let highThumbnail = data.items[0].snippet.thumbnails.high.url;
        let channelTitle = data.items[0].snippet.channelTitle;
        document.title = title;
        let views = numberFormatter(data.items[0].statistics.viewCount);
        let likes = numberFormatter(data.items[0].statistics.likeCount);
        let published_accurately = data.items[0].snippet.publishedAt;

        let creationDate = data.items[0].snippet.publishedAt
          .split("T")[0]
          .split("-")
          .reverse()
          .join(".");
        let shortDescription = data.items[0].snippet.description
        let obj = { title, views, likes, creationDate, shortDescription };
        addToVideosHistory(
          url,
          published_accurately,
          title,
          thumbnail,
          channelTitle,
          views
        );

            // dispatch(setCurrentVideo({
            //     url,
            //     likes: likes,
            //     id: {
            //       videoId: url,
            //     },
            //     snippet: {
            //       publishedAt: published_accurately,
            //       title,
            //       channelTitle,
            //       thumbnails: {
            //         medium: {
            //           url: thumbnail,
            //         },
            //         high: {
            //           url: highThumbnail,
            //         },
            //       },
            //     },
            //   }))

        setCurrentVid({
          url,
          likes: likes,
          id: {
            videoId: url,
          },
          snippet: {
            publishedAt: published_accurately,
            title,
            channelTitle,
            views,
            thumbnails: {
              medium: {
                url: thumbnail,
              },
              high: {
                url: highThumbnail,
              },
            },
          },
        });

        setVideoDetails({ ...obj });
        return [data.items[0].snippet.channelId, shortDescription];
      })
      .then((res) => {
        fetchFromApi(`/channels?part=snippet%2Cstatistics&id=${res[0]}`).then(
          (data) => {
            let channelName = data.items[0].snippet.title;
            let subsCount = numberFormatter(
              data.items[0].statistics.subscriberCount
            );
            let channelThumbnail = data.items[0].snippet.thumbnails.default.url;
            let shortDescription = res[1];
            let obj = {
              channelName,
              subsCount,
              channelThumbnail,
              shortDescription,
            };
            setChannelDetails({ ...obj });
          }
        );
      });
  }, [url, currentVid]);

  return (
    <>
      <div className="videoPageContainer">
        <Sidebar
          theClass={
            props.showSideBar
              ? `sidebar-menu-Video active`
              : `sidebar-menu-Video`
          }
        />
        <div className="videoDetails">
          <VideoPlayer link={url} />
          <VideoInformation currentVid={currentVid} props={videoDetails} />
          <VideoDescription props={channelDetails} />
          <VideoComments url={url} />
        </div>
        <div className="recommended">
          <RecommendedVideos url={url} />
        </div>
      </div>
    </>
  );
}

export default VideoDetail;
