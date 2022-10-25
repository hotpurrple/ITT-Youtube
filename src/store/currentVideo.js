import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentVideo : {}
}

export const currentVideo = createSlice({
  name: 'currentVideo',
  initialState,
  reducers: {
   setCurrentVideo: (state, action) => {
        state.currentVideo = {...state.currentVideo, ...action.payload}
   }
    
  },
})

export const { setCurrentVideo } = currentVideo.actions

export default currentVideo.reducer