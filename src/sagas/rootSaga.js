import { all } from 'redux-saga/effects';
import { watchProductListRequest } from './productListSagas';

export function* rootSaga() {
  yield all([watchProductListRequest()]);
}
