import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 15,
};

//!Creating a slice requires:
export const newResultsCountSlice = createSlice({
  name: "newResults", //!1. A string name to identify the slice
  initialState, //!2. an initial state value
  reducers: {
    //!3. and one or more reducer functions to define how the state can be updated.
    increment: (state) => {
      state.value += 5;
    },
    setToInitialValue: (state) => {
      state.value = 15;
    },
  },
});

//!4.Once a slice is created, we can export the generated Redux action creators
// Action creators are generated for each case reducer function
export const { increment, setToInitialValue } = newResultsCountSlice.actions;

//!and the reducer function for the whole slice.
export default newResultsCountSlice.reducer;
