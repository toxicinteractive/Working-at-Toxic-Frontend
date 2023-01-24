import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "language",
  initialState: {
    language: "",
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const getLanguage = (state: any) => state.entities.language;

export const { setLanguage } = slice.actions;
export default slice.reducer;
