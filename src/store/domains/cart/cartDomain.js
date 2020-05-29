import { createActions, handleActions } from 'redux-actions';

export const initialState = {
  list: []
};

const {
  addProductToCart,
  removeProductFromCart,
  clearCart
} = createActions({
  ADD_PRODUCT_TO_CART: (product) => ({ product }),
  REMOVE_PRODUCT_FROM_CART: (product) => ({ product }),
  CLEAR_CART: undefined
});

export const reducer = handleActions({
  [addProductToCart]: (state, { payload: { product }}) => ({
    ...state,
    list: [...state.list, product]
  }),
  [removeProductFromCart]: (state, { payload: { product }}) => ({
    ...state,
    list: state.list.filter((item) => item.name !== product.name)
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
