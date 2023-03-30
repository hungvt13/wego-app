import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  foodList: [],
};

export const foodSlice = createSlice({
  name: 'foodState',
  initialState: initialState,
  reducers: {
    changeFoodList: (state, action) => {
      state.foodList = action.payload;
    },
}});


export const foodActions = foodSlice.actions;

export default foodSlice.reducer;
