import { put, takeLatest, call } from 'redux-saga/effects';

import { foodActions } from './foodSlice';

import foodApi from '../../api/foodApi';

function* fetchFoodList() {
  try {
    const data = yield call(foodApi.getFoodList);

    yield put(foodActions.fetchFoodListSuccess(data));
  } catch (error) {
    console.log('error fetchFoodList saga', error);
  }
}

function* fetchFoodCategory() {
  try {
    const data = yield call(foodApi.getFoodCategories);

    yield put(foodActions.fetchFoodCategorySuccess(data));
  } catch (error) {
    console.log('error fetchFoodCategory saga', error);
  }
}

function* foodSaga() {
  yield takeLatest(foodActions.fetchFood, fetchFoodList);
  yield takeLatest(foodActions.fetchCategory, fetchFoodCategory);
}

export default foodSaga;