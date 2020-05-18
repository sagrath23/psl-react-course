import {
  put,
  takeEvery,
  call
} from 'redux-saga/effects';
import { fetchProductList } from '../services';
import { actions } from '../store/domains';


export function* loadProductList() {
  try {
    const requestResult = yield call(fetchProductList);

    yield put(actions.productListSuccess(requestResult));
  } catch (error) {
    console.error(error);

    yield put(actions.productListFailed());
  }
}

export function* watchProductListRequest() {
  yield takeEvery(actions.productListRequest, loadProductList)
}
