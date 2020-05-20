import React, { useContext, useEffect } from 'react';
import { ProductListTable } from '../ProductListTable';
import { useDispatch, useSelector } from 'react-redux';
import { groupedProductListSelector } from '../../selectors';
import { actions } from '../../store/domains';
import { FilterContext } from '../../pages';
import { SearchBar } from '../SearchBar';

export const FilterableProductList = () => {
  const dispatch = useDispatch();
  const groupedProducts = useSelector(groupedProductListSelector);
  const { filterContext: { inStock, productName } } = useContext(FilterContext);

  useEffect(() => {
    dispatch(actions.productListRequest());
  }, [dispatch]);

  let filteredProducts = {};

  // filter by text
  for (let category in groupedProducts) {
    filteredProducts = {
      ...filteredProducts,
      // TODO: validate if this can be done using regExp
      [category]: productName.length > 0 ? groupedProducts[category].filter((item) => item.name.toLowerCase().indexOf(productName.toLowerCase()) >= 0) : groupedProducts[category]
    };
  }

  // filter by stock
  for (let category in filteredProducts) {
    filteredProducts = {
      ...filteredProducts,
      [category]: inStock ? filteredProducts[category].filter((item) => item.stocked === inStock) : filteredProducts[category]
    };
  }

  return (
    <div>
      <SearchBar />
      <ProductListTable groupedProducts={filteredProducts} />
    </div>
  );
}; 
