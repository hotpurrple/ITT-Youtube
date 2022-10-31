import { configureStore } from "@reduxjs/toolkit";
import loggedUserReducer from "./loggedUser";
import currentVideoReducer from "./currentVideo";
import selectedCategoryReducer from "./selectedCategorySlice/selectedCategorySlice";
import newResultsCountReducer from "./newResultsCountSlice/newResultsCountSlice";
export const store = configureStore({
  reducer: {
    loggedUser: loggedUserReducer,
    currentVideo: currentVideoReducer,
    selectedCategory: selectedCategoryReducer,
    newResults: newResultsCountReducer,
  },
});
