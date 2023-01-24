import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "sortBy",
  initialState: {
    sortBy: "",
  },
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const getSortBy = (state: any) => state.entities.sortBy;

export const { setSortBy } = slice.actions;
export default slice.reducer;
