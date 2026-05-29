import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // { name: 'Aryan Maurya', email: 'aryan@example.com', image: '/images/user-avatar.png' }
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
