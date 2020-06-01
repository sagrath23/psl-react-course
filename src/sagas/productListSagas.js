import {
  call,
  put,
  select,
  takeEvery
} from 'redux-saga/effects';
import { fetchProductList } from '../services';
import { actions } from '../store/domains';
import { productListSelector } from '../store/selectors';


export function* loadProductList() {
  const productList = yield select(productListSelector);
  const shouldLoadProducts = productList.length === 0;
  try {
    if (shouldLoadProducts) {
      const requestResult = yield call(fetchProductList);

      yield put(actions.productListSuccess(requestResult));
    }
  } catch (error) {
    console.error(error);

    yield put(actions.productListFailed());
  }
}

export function* watchProductListRequest() {
  yield takeEvery(actions.productListRequest, loadProductList)
}
