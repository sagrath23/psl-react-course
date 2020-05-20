import { createActions, handleActions } from 'redux-actions';

export const initialState = {
  list: []
};

const {
  addProductToCart,
  removeProductFromCart
} = createActions({
  ADD_PRODUCT_TO_CART: (productName) => ({ productName }),
  REMOVE_PRODUCT_FROM_CART: (productName) => ({ productName })
});

export const reducer = handleActions({
  [addProductToCart]: (state, { payload: { productName }}) => ({
    ...state,
    list: [...state.list, productName]
  }),
  [removeProductFromCart]: (state, { payload: { productName }}) => ({
    ...state,
    list: state.list.filter((item) => item !== productName)
  })
}, initialState);

export const actions = {
  addProductToCart,
  removeProductFromCart
};
