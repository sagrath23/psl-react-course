import { createSelector } from 'reselect';

export const productListSelector = (state) => state.productList.list;

export const cartSelector = (state) => state.cart.list;

export const totalSelector = createSelector(
  cartSelector,
  (selectedProducts) => selectedProducts.reduce((acm, selectedProduct) => {
    const price = parseFloat(selectedProduct.price.replace('$', ''));

    return acm + price;
  }, 0)
);

export const groupedProductListSelector = createSelector(productListSelector, (list) => list.reduce(
  (groupedProducts, item) => ({
    ...groupedProducts,
    [item.category]: [
      ...(groupedProducts[item.category] || []),
      item
    ]
  }), {}));
