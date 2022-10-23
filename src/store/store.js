import { configureStore } from '@reduxjs/toolkit'
import loggedUserReducer from "./loggedUser"
import currentVideoReducer from './currentVideo'
export const store = configureStore({
  reducer: {
    loggedUser: loggedUserReducer,
    currentVideo: currentVideoReducer,

  },
})