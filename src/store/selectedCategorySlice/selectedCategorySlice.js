import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "new",
};

//!Creating a slice requires:
export const selectedCategorySlice = createSlice({
  name: "selectedCategory", //!1. A string name to identify the slice
  initialState, //!2. an initial state value
  reducers: {
    //!3. and one or more reducer functions to define how the state can be updated.
    changeSelectedCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

//!4.Once a slice is created, we can export the generated Redux action creators
// Action creators are generated for each case reducer function
export const { changeSelectedCategory } = selectedCategorySlice.actions;

//!and the reducer function for the whole slice.
export default selectedCategorySlice.reducer;
