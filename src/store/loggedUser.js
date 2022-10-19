import { createSlice } from '@reduxjs/toolkit'
import { logUser, logOutUsers, currentUser } from '../server/serverLogin'
const current = currentUser() || ""

const initialState = {
    user: current,
}

//using functions from the server folder - respectively 

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
    }
  },
})

export const { logniGo, mahniGo } = loggedUser.actions

export default loggedUser.reducer