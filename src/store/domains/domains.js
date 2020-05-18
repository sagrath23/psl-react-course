import { combineReducers } from 'redux';
import { reducer as productListReducer, actions as productListActions } from './productList';

export const rootReducer = combineReducers({
  productList: productListReducer
});

export const actions = {
  ...productListActions
};
