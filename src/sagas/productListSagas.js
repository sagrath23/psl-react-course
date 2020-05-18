import {
  put,
  takeEvery,
  call
} from 'redux-saga/effects';
import { listComics } from '../services';
import { actions } from '../store/domains';


export function* loadProductList({ payload: { limit, offset }}) {
  try {
    const requestResult = yield call(listComics, limit, offset);

    yield put(actions.productListSuccess(requestResult.results));
  } catch (error) {
    console.error(error);

    yield put(actions.productListFailed());
  }
}

export function* watchProductListRequest() {
  yield takeEvery(actions.productListRequest, loadProductList)
}
