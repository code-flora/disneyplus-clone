import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    email: "",
    photo: ""
}

export const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        setUserSignOut: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    }
})

export const selectUserName = state => state.userInfo.name;
export const selectUserEmail = state => state.userInfo.email;
export const selectUserPhoto = state => state.userInfo.photo;

export const { setUserLogin, setUserSignOut } = userSlice.actions;

export default userSlice.reducer