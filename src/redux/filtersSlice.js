import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "" };

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterContact: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectFilter = (state) => state.filters.name;
export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
