import { createSlice } from '@reduxjs/toolkit'
import { logUser, logOutUsers, currentUser } from '../server/serverLogin.js'
const current = currentUser() || ""

const initialState = {
    user: current,
}

export const loggedUser = createSlice({
  name: 'loggedUser',
  initialState,
  reducers: {
    logUserIn: (state, action) => {
        logUser(action.payload)
        state.user = currentUser()
    },
    logUserOut: (state) => {
        logOutUsers()
        state.user = ""
    },
    
  },
})

export const { logUserIn, logUserOut} = loggedUser.actions

export default loggedUser.reducer