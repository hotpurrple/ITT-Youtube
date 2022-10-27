import { createSlice } from '@reduxjs/toolkit'
import { logUser, logOutUsers, currentUser } from '../server/serverLogin.js'
const current = currentUser() || ""

const initialState = {
    user: current,
}

//using functions from the server folder - logniGo sets the is_logged property of the user that matches the string in the payload,
// mahniGo sets all the is_logged properties to false so there's no active user. after that the state is set to either
// whichever object matches the logged property, or to nothing.

export const loggedUser = createSlice({
  name: 'loggedUser',
  initialState,
  reducers: {
    logniGo: (state, action) => {
        logUser(action.payload)
        state.user = currentUser()
    },
    mahniGo: (state) => {
        logOutUsers()
        state.user = ""
    },
    
  },
})

export const { logniGo, mahniGo} = loggedUser.actions

export default loggedUser.reducer