import { createSlice } from '@reduxjs/toolkit';
import { LOADING_STATE } from '../constants';

const initialState = {
  foodListStatus: LOADING_STATE.IDLE,
  foodList: [],
};

export const foodSlice = createSlice({
  name: 'foodState',
  initialState: initialState,
  reducers: {
    fetchFoodListSuccess: (state, action) => {
      state.foodListStatus = LOADING_STATE.SUCCESS;
      state.foodList = action.payload;
    },
    fetchFood: (state) => {
      state.foodListStatus = LOADING_STATE.LOADING;
    }
}});


export const foodActions = foodSlice.actions;

export default foodSlice.reducer;
