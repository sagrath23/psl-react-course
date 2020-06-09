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

export const productCategoriesSelector = createSelector(groupedProductListSelector, (groups) => Object.keys(groups));

export const newProductIdSelector = createSelector(productListSelector, (list) => parseInt(list.map((item) => item.id).sort((a, b) => b - a)[0])+ 1);
