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
//bring back the old api key

function VideoDetail() {
    const path = useLocation()
    console.log(path.pathname);
    const url = path.pathname.split("/videos/")[1]

    // const url = path.pathname.match(/[^videos/]{1,}$/gi)[0]
    // console.log(url);
    // console.log(url);
    const [videoDetails, setVideoDetails] = useState({})
    const [channelDetails, setChannelDetails] = useState({})
    const [recommendedVideos, setRecommendedVideos] = useState([])
    const [commentsList, setCommentsList] = useState([])

    useEffect(() => {
        fetchFromApi(`/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${url}`)
            .then(data => {
                let title = data.items[0].snippet.title
                let views = data.items[0].statistics.viewCount
                let likes = data.items[0].statistics.likeCount
                let creationDate = data.items[0].snippet.publishedAt.split("T")[0].split("-").reverse().join(".")
                let shortDescription = data.items[0].snippet.description.slice(0, 200)
                let obj = { title, views, likes, creationDate, shortDescription }
                setVideoDetails({ ...obj },)
                return [data.items[0].snippet.channelId, shortDescription]
            })
            .then(res => {
                fetchFromApi(`/channels?part=snippet%2Cstatistics&id=${res[0]}`)
                    .then(data => {
                        let channelName = data.items[0].snippet.title
                        let subsCount = data.items[0].statistics.viewCount
                        let channelThumbnail = data.items[0].snippet.thumbnails.default.url
                        let shortDescription = res[1]
                        let obj = { channelName, subsCount, channelThumbnail, shortDescription }
                        setChannelDetails({ ...obj })
                    })
            })

    }, [url])

    useEffect(() => {
        fetchFromApi(`/search?relatedToVideoId=${url}&part=id%2Csnippet&type=video&maxResults=25`)
            .then(data => {
                setRecommendedVideos([...data.items])
            })
    }, [url])

    useEffect(() => {
        fetchFromApi(`/commentThreads?part=snippet&videoId=${url}&maxResults=25`)
            .then(data => {
                let arr = data.items.slice(0, 25)
                setCommentsList([...arr])
            })
    }, [url])

    


    return (
        <>
            <div className="videoPageContainer">
                <div className="videoDetails">
                    <VideoPlayer link={url} />
                    <VideoInformation props={videoDetails} />
                    <VideoDescription props={channelDetails} />
                    <VideoComments props={commentsList}/>
                </div>
                <div className="recommended">
                    {recommendedVideos.map(e => {
                        return <VideoPageCard url={e.id.videoId} key={e.id.videoId} props={e.snippet} />
                    })}
                </div>
            </div>
        </>
    )
}

export default VideoDetail;
