import { createSlice } from '@reduxjs/toolkit'

const initialState = {
}

export const currentVideo = createSlice({
  name: 'currentVideo',
  initialState,
  reducers: {
   setCurrentVideo: (state, action) => {
        state.currentVideo = {...action.payload}
   }
    
  },
})

export const { setCurrentVideo } = currentVideo.actions

export default currentVideo.reducer 