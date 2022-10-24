import { configureStore } from '@reduxjs/toolkit'
import loggedUserReducer from "./loggedUser"
export const store = configureStore({
  reducer: {
    loggedUser: loggedUserReducer,
  },
})