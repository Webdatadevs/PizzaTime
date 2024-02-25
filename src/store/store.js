import { configureStore } from "@reduxjs/toolkit";
import { mealSlice } from "../slices/slice";

export default configureStore({
    reducer: mealSlice.reducer,
});
