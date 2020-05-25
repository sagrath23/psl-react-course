import { createActions, handleActions } from 'redux-actions';

export const initialState = {
  list: []
};

const {
  addProductToCart,
  removeProductFromCart,
  clearCart
} = createActions({
  ADD_PRODUCT_TO_CART: (productName) => ({ productName }),
  REMOVE_PRODUCT_FROM_CART: (productName) => ({ productName }),
  CLEAR_CART: undefined
});

export const reducer = handleActions({
  [addProductToCart]: (state, { payload: { productName }}) => ({
    ...state,
    list: [...state.list, productName]
  }),
  [removeProductFromCart]: (state, { payload: { productName }}) => ({
    ...state,
    list: state.list.filter((item) => item !== productName)
  }),
  [clearCart]: (state) => ({
    ...state,
    list: []
  })
}, initialState);

export const actions = {
  addProductToCart,
  clearCart,
  removeProductFromCart
};
