import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCartOpen: false,
  isMenuOpen: false,
  isSearchOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleSearch: (state) => {
      state.isSearchOpen = !state.isSearchOpen;
    },
    closeAll: (state) => {
      state.isCartOpen = false;
      state.isMenuOpen = false;
      state.isSearchOpen = false;
    }
  }
});

export const { toggleCart, toggleMenu, toggleSearch, closeAll } = uiSlice.actions;
export default uiSlice.reducer;
