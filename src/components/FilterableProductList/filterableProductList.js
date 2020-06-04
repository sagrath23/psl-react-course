import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from '../basic/Table';
import { groupedProductListSelector } from '../../store/selectors';
import { actions } from '../../store/domains';
import { PageContext } from '../../pages';
import { SearchBar } from '../SearchBar';

export const FilterableProductList = () => {
  const dispatch = useDispatch();
  const groupedProducts = useSelector(groupedProductListSelector);
  const { filterContext: { inStock, productName } } = useContext(PageContext);

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
      <Table groupedProducts={filteredProducts} />
    </div>
  );
}; 
