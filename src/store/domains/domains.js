import { combineReducers } from 'redux';
import { reducer as productListReducer, actions as productListActions } from './productList';
import { reducer as cartReducer, actions as cartActions } from './cart';

export const rootReducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer
});

export const actions = {
  ...productListActions,
  ...cartActions
};
