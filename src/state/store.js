import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: import.meta.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export default store;