import React, { useContext, useEffect } from 'react';
import { ProductListTable } from '../ProductListTable';
import { useDispatch, useSelector } from 'react-redux';
import { productListSelector } from '../../selectors';
import { actions } from '../../store/domains';
import { FilterContext } from '../../pages';
import { SearchBar } from '../SearchBar';

export const FilterableProductList = () => {
  const dispatch = useDispatch();
  const list = useSelector(productListSelector);
  const { filterContext: { inStock, productName } } = useContext(FilterContext);
  
  // TODO: validate if this can be done using regExp
  let filteredList = productName.length > 0 ? list.filter((item) => item.name.toLowerCase().indexOf(productName.toLowerCase()) >= 0) : list;
  
  filteredList=  inStock ? filteredList.filter((item) => item.stocked === inStock) : filteredList;

  useEffect(() => {
    dispatch(actions.productListRequest());
  }, [dispatch]);

  return (
    <div>
      <SearchBar />
      <ProductListTable productList={filteredList} />
    </div>
  );
}; 
