import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const favoriteSlice = createSlice({
  name: "favorit",
  initialState,
  reducers: {
    addtoFavorit: (state, action) => {
      // Təkrarlanmanı yoxlamaq vacibdir
      if (!state.value.some((item) => item.id === action.payload.id)) {
        state.value.push(action.payload);
      }
    },
    removeFromFavorit: (state, action) => {
      // ID-yə görə silmə
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addtoFavorit, removeFromFavorit } = favoriteSlice.actions;
export default favoriteSlice.reducer;
