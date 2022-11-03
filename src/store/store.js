import { configureStore } from "@reduxjs/toolkit";
import loggedUserReducer from "./loggedUser";
import selectedCategoryReducer from "./selectedCategorySlice/selectedCategorySlice";
import newResultsCountReducer from "./newResultsCountSlice/newResultsCountSlice";
export const store = configureStore({
  reducer: {
    loggedUser: loggedUserReducer,
    selectedCategory: selectedCategoryReducer,
    newResults: newResultsCountReducer,
  },
});
