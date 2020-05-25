import { createSelector } from 'reselect';

export const productListSelector = (state) => state.productList.list;

export const cartSelector = (state) => state.cart.list;

export const groupedProductListSelector = createSelector(productListSelector, (list) => list.reduce(
  (groupedProducts, item) => ({
    ...groupedProducts,
    [item.category]: [
      ...(groupedProducts[item.category] || []),
      item
    ]
  }), {}));
