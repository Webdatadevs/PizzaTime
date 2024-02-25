import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
    meals: [],
    basketData: [],
};

export const mealSlice = createSlice({
    name: "meals",
    initialState,
    reducers: {
        fetchingMeal(state) {
            state.isLoading = true;
        },
        fetchedMeal(state, action) {
            state.meals = action.payload;
        },
        selectData(state, action) {
            let data = action.payload;
            let isExsits = state.basketData.find(
                (element) => element.idMeal === data.idMeal
            );
            if (!isExsits) {
                state.basketData = [action.payload, ...state.basketData];
            }
        },
    },
});

export const { fetchedMeal, selectData } = mealSlice.actions;

export default mealSlice.reducer;
