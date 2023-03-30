import { all, fork } from 'redux-saga/effects';

import { foodSaga } from './food';

export default function* rootSaga() {
  yield all([
    fork(foodSaga),
  ]);
}