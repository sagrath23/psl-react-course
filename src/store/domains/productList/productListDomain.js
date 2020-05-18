import { createActions, handleActions } from 'redux-actions';

export const initialState = {
  list: [],
  ui: {
    isLoading: false
  }
};

const {
  productListRequest,
  productListSuccess,
  productListFailed
} = createActions({
  PRODUCT_LIST_REQUEST: undefined,
  PRODUCT_LIST_SUCCESS: (list) => ({ list }),
  PRODUCT_LIST_FAILED: undefined
});

export const reducer = handleActions({
  [productListRequest]: (state) => ({
    ...state,
    ui: {
      ...state.ui,
      isLoading: true
    }
  }),
  [productListSuccess]: (state, { payload: { list }}) => ({
    ...state,
    list,
    ui: {
      ...state.ui,
      isLoading: false
    }
  }),
  [productListFailed]: (state) => ({
    ...state,
    ui: {
      ...state.ui,
      isLoading: false
    }
  })
}, initialState);

export const actions = {
  productListRequest,
  productListSuccess,
  productListFailed
};
