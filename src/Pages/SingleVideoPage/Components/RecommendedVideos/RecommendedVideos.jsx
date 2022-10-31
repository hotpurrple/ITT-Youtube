import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { CircularProgress } from '@mui/material';
import fetchFromApi from '../../../../utils/fetchFromAPI';
import VideoPageCard from '../VideoPageCard/VideoPageCard';
import RecommendedCategories from '../RecommendedCategories/RecommendedCategories';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import "./recommendedvideos.css"

export default function RecommendedVideos(props) {
    const url = props.url
    const [recVideos, setRecVideos] = useState({
        allItems: [],
        items: [],
        hasMore: true
    })

    const [toggleOverlay, setToggleOverlay] = useState("")


    useEffect(() => {
        fetchFromApi(`/search?relatedToVideoId=${url}&part=id%2Csnippet&type=video&maxResults=100`)
            .then(data => {
                let arr = [...data.items]
                let partialArr = arr.slice(0, 15)
                setRecVideos({
                    allItems: [...arr],
                    items: [...partialArr],
                    hasMore: true
                })
            })
        return function () {
            document.title = "YouTube"
        }
    }, [url])

    const setRecommendedSlider = (value) => {
        setToggleOverlay("overlay")
        fetchFromApi(`/search?part=snippet&q=${value}&maxResults=100`)
            .then(data => {
                setToggleOverlay("")
                let arr = [...data.items]
                let partialArr = arr.slice(0, 15)
                setRecVideos({
                    allItems: [...arr],
                    items: [...partialArr],
                    hasMore: true
                })
            })
    }

    const loadMore = () => {
        if (recVideos.items.length >= 100) {
            setRecVideos({
                allItems: recVideos.allItems,
                items: recVideos.items,
                hasMore: false
            })
        } else {
            setTimeout(() => {
                let newArr = recVideos.allItems.slice(recVideos.items.length, recVideos.items.length + 15)
                setRecVideos({
                    allItems: recVideos.allItems,
                    items: [...recVideos.items, ...newArr],
                    hasMore: true
                })
                if (newArr.length < 15) {
                    setRecVideos({
                        allItems: recVideos.allItems,
                        items: recVideos.items,
                        hasMore: false
                    })
                }

            }, 1500)
        }

    }


    return (
        <>
            <div className='recommendedWrapper'>

                <RecommendedCategories setRecommendedSlider={setRecommendedSlider} />

                <InfiniteScroll className='infiniteScroll'
                    dataLength={recVideos.items.length}
                    next={loadMore}
                    hasMore={recVideos.hasMore}
                    loader={<CircularProgress className='recommendedVideosSpinner' size={20} color="inherit" />}
                    scrollThreshold={0.5}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>No more videos to show you for now.</b>
                        </p>
                    }>
                    <div className={toggleOverlay}>
                    </div>
                    {recVideos.items.map(e => {
                        return <VideoPageCard layoutClass="videoPageCard" url={e.id.videoId} key={e.id.videoId} props={e.snippet} />
                    })}
                </InfiniteScroll>
            </div>
        </>
    )
}
