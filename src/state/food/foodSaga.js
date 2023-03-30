import { put, takeLatest } from 'redux-saga/effects';

import { foodActions } from './foodSlice';

function* fetchFoodList() {
  try {
    const fakeData = ['pizza'];

    yield put(foodActions.fetchFoodListSuccess(fakeData));
  } catch (error) {
    console.log('error fetchFoodList saga', error);
  }
}

function* foodSaga() {
  yield takeLatest(foodActions.fetchFood, fetchFoodList);
}

export default foodSaga;