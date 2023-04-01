import { createSlice } from '@reduxjs/toolkit';
import { LOADING_STATE } from '../constants';

const initialState = {
  foodListStatus: LOADING_STATE.IDLE,
  foodListRaw: [],
  foodList: [],
  foodCategoryStatus: LOADING_STATE.IDLE,
  foodCategory: [],
};

export const foodSlice = createSlice({
  name: 'foodState',
  initialState: initialState,
  reducers: {
    fetchFood: (state) => {
      state.foodListStatus = LOADING_STATE.LOADING;
    },
    fetchFoodListSuccess: (state, action) => {
      state.foodListStatus = LOADING_STATE.SUCCESS;
      state.foodListRaw = action.payload;
    },
    changeFoodList: (state, action) => {
      state.foodList = action.payload;
    },
    fetchCategory: (state) => {
      state.foodCategoryStatus = LOADING_STATE.LOADING;
    },
    fetchFoodCategorySuccess: (state, action) => {
      state.foodCategoryStatus = LOADING_STATE.SUCCESS;
      state.foodCategory = action.payload;
    },
}});


export const foodActions = foodSlice.actions;

export default foodSlice.reducer;
