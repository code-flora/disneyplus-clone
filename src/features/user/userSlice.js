import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    email: "",
    photo: "",
    uid: "",
}

export const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
            state.uid = action.payload.uid;
        },
        setUserSignOut: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
            state.uid = null;
        }
    }
})

export const selectUserName = state => state.userInfo.name;
export const selectUserEmail = state => state.userInfo.email;
export const selectUserPhoto = state => state.userInfo.photo;
export const selectUserId = state => state.userInfo.uid;

export const { setUserLogin, setUserSignOut } = userSlice.actions;

export default userSlice.reducer