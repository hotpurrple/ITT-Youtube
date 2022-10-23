import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "./videodetail.css"
import VideoInformation from "../VideoInformation/VideoInformation"
import VideoDescription from "../VideoDescription/VideoDescription"
import fetchFromApi from "../../utils/fetchFromAPI";
import VideoPageCard from "../VideoPageCard/VideoPageCard";
import alternativeFetch from "../../utils/alternativeFetch"
import VideoComments from "../VideoComments/VideoComments";
import { useState } from "react";
import numberFormatter from "../../utils/numberFormatter"
import { useDispatch, useSelector } from "react-redux";
import RecommendedVideos from "../RecommendedVideos/RecommendedVideos";
import updateVideosHistory from "../../store/loggedUser"
import addToVideosHistory from "../../server/updateUserData";
import { setCurrentVideo } from "../../store/currentVideo";

//bring back the old api key
function VideoDetail() {
    const path = useLocation()
    const user = useSelector(state => state.loggedUser.user)
    const url = path.pathname.split("/videos/")[1]
    const dispatch = useDispatch()
    // const url = path.pathname.match(/[^videos/]{1,}$/gi)[0]
    const [videoDetails, setVideoDetails] = useState({})
    const [channelDetails, setChannelDetails] = useState({})
    const currentVideo = useSelector(state => state.currentVideo.currentVideo)

    useEffect(() => {
        fetchFromApi(`/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${url}`)
            .then(data => {
                let title = data.items[0].snippet.title
                let thumbnail = data.items[0].snippet.thumbnails.medium.url
                let channelTitle = data.items[0].snippet.channelTitle
                document.title = title
                let views = numberFormatter(data.items[0].statistics.viewCount)
                let likes = numberFormatter(data.items[0].statistics.likeCount)
                let published_accurately = data.items[0].snippet.publishedAt

                let creationDate = data.items[0].snippet.publishedAt.split("T")[0].split("-").reverse().join(".")
                let shortDescription = data.items[0].snippet.description.slice(0, 200)
                let obj = { title, views, likes, creationDate, shortDescription }
                // let toBeDispatched = {url, creationDate, title, thumbnail, channelTitle}
                addToVideosHistory(url, published_accurately, title, thumbnail, channelTitle)
                dispatch(setCurrentVideo({
                    url, 
                    id: {
                        videoId: url
                    },
                    snippet: {
                        publishedAt: published_accurately,
                        title, 
                        channelTitle,
                        thumbnails: {
                            medium: {
                                url: thumbnail
                            }
                        }
                    }
                }))
                setVideoDetails({ ...obj },)
                return [data.items[0].snippet.channelId, shortDescription]
            })
            .then(res => {
                fetchFromApi(`/channels?part=snippet%2Cstatistics&id=${res[0]}`)
                    .then(data => {
                        let channelName = data.items[0].snippet.title
                        let subsCount = numberFormatter(data.items[0].statistics.subscriberCount)
                        let channelThumbnail = data.items[0].snippet.thumbnails.default.url
                        let shortDescription = res[1]
                        let obj = { channelName, subsCount, channelThumbnail, shortDescription }
                        setChannelDetails({ ...obj })

                    })
            })

    }, [url, currentVideo])

    return (
        <>
            <div className="videoPageContainer">
                <div className="videoDetails">
                    <VideoPlayer link={url} />
                    <VideoInformation props={videoDetails} />
                    <VideoDescription props={channelDetails} />
                    <VideoComments url={url} />
                </div>
                <div className="recommended">
                    <RecommendedVideos url={url} />
                </div>
            </div>
        </>
    )
}

export default VideoDetail;
