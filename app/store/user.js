import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'auth',
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
      };
    },
    setNoUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const {setCurrentUser, setNoUser} = userSlice.actions;
export default userSlice.reducer;
