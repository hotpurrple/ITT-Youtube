import { createSlice } from '@reduxjs/toolkit'
import { logUser, logOutUsers, currentUser } from '../server/serverLogin.js'

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
        state.currentVideo = {...state.payload,...action.payload}
    }
    
  },
})

export const { setCurrentVideo} = currentVideo.actions

export default currentVideo.reducer