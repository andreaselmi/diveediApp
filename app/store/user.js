import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = {
        fullName: action.payload.fullName,
        email: action.payload.email,
        userImg: action.payload.userImg,
        uid: action.payload.uid,
        provider: action.payload.provider,
      };
    },
    setNoUser: (state) => {
      state.currentUser = null;
    },
    setUserImg: (state, action) => {
      state.currentUser.userImg = action.payload.userImg;
    },
  },
});

export const {setCurrentUser, setNoUser, setUserImg} = userSlice.actions;
export default userSlice.reducer;
