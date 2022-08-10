import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: '',
        // token: ''
    },
    reducers: {
        loggedIn: (state,action) => {
            state.userName = action.payload
        }
    }
})

export const userActions = userSlice.actions
export default userSlice