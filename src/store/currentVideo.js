import { createSlice } from '@reduxjs/toolkit'
import isVideoDisliked from '../server/isVideoDisliked.js'
import { logUser, logOutUsers, currentUser } from '../server/serverLogin.js'
import updateUserDislikedVideos from '../server/updateUserDislikedVideos.js'
import updateUserLikedVideos, { isCurrentVideoLiked } from '../server/updateUserLikedVideos.js'

const initialState = {
    currentVideo: {}
}

//using functions from the server folder - logniGo sets the is_logged property of the user that matches the string in the payload,
// mahniGo sets all the is_logged properties to false so there's no active user. after that the state is set to either
// whichever object matches the logged property, or to nothing.

export const currentVideo = createSlice({
    name: 'currentVideo',
    initialState,
    reducers: {
        setCurrentVideo: (state, action) => {
            state.currentVideo = { ...action.payload }
        },
        likeCurrentVideo: (state, action) => {
            updateUserLikedVideos(action.payload)
           
        },
        dislikeCurrentVideo: (state, action) => {
            updateUserDislikedVideos(action.payload)
          
        },
        // isVidLiked: (state, action) => {
        //     console.log(isCurrentVideoLiked(action.payload));
        //     isCurrentVideoLiked(action.payload)
        // },
        // isVidDisliked: (state, action) => {
        //     console.log(isVideoDisliked(action.payload));
        //     isVideoDisliked(action.payload)
        // }
    },
})

export const { setCurrentVideo, likeCurrentVideo, dislikeCurrentVideo, isVidLiked, isVidDisliked } = currentVideo.actions

export default currentVideo.reducer